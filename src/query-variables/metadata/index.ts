import { QueryVariableMetadata, QueryVariableMetadataMap } from "../types";
import {
  parse,
  TraversalFilterExpressionNode,
  TraversalFilterExpressionTerm,
  TraversalFilter,
  PredicateFilter,
  PredicateFilterExpressionTerm,
  PredicateFilterExpressionNode,
  VariableNode,
  RootQueryNode,
} from "@jupiterone/query-language-parser";

/**
 * Extracts metadata for all variables in a query or from an array of queries,
 * removing duplicate metadata.
 * */
export const extractQueryVariableMetadata = (
  queries: string | string[]
): QueryVariableMetadataMap => {
  if (typeof queries === "string") {
    queries = [queries];
  }
  return queries.reduce((aggregateMetadata, query) => {
    const variableMetadataMap = extractQueryVariableMetadataQuery(query);
    variableMetadataMap.forEach((variableMetadata, identifier) => {
      if (!aggregateMetadata.has(identifier)) {
        aggregateMetadata.set(identifier, []);
      }
      const existingMetadata = aggregateMetadata.get(identifier) || [];
      const newMetadata = variableMetadata.filter(
        (item) =>
          !existingMetadata.some((existingItem) => isEqual(existingItem, item))
      );
      aggregateMetadata.set(
        identifier,
        uniqueMerge(existingMetadata, newMetadata)
      );
    });
    return aggregateMetadata;
  }, new Map() as QueryVariableMetadataMap);
};

const extractQueryVariableMetadataQuery = (
  query: string
): QueryVariableMetadataMap => {
  const metadataMap: QueryVariableMetadataMap = new Map();

  const checkAndAddFilter = (
    filter: PredicateFilterExpressionTerm | TraversalFilterExpressionTerm,
    classes: string[],
    types: string[]
  ) => {
    if (isVariableNode(filter.value)) {
      const identifier = filter.value.identifier;
      const metadata: QueryVariableMetadata = {
        field: filter.field,
        classes,
        types,
      };
      metadataMap.set(
        identifier,
        uniqueMerge(metadataMap.get(identifier) || [], [metadata])
      );
    }
  };

  const traverseFilter = (
    filter: TraversalFilter | PredicateFilter,
    classes: string[],
    types: string[]
  ) => {
    if (isTraversalFilterExpressionTerm(filter)) {
      checkAndAddFilter(filter, classes, types);
    } else if (isTraversalFilterExpressionNode(filter)) {
      traverseFilter(filter.left, classes, types);
      traverseFilter(filter.right, classes, types);
    } else if (isPredicateFilterExpressionTerm(filter)) {
      checkAndAddFilter(filter, classes, types);
    } else if (isPredicateFilterExpressionNode(filter)) {
      traverseFilter(filter.left, classes, types);
      traverseFilter(filter.right, classes, types);
    }
  };

  const traverseNode = (node: RootQueryNode) => {
    const classes = node.classes || [];
    const types = node.types || [];

    if (node.filters) {
      traverseFilter(node.filters, classes, types);
    }
    if (node.predicateFilters) {
      traverseFilter(node.predicateFilters, classes, types);
    }
    if (node.next) {
      traverseNode(node.next);
    }
  };

  try {
    traverseNode(parse(query));
  } catch (error) {
    console.warn(
      "Failed to parse query and extract variable metadata: ",
      query
    );
  }

  return metadataMap;
};

// HELPERS

const isEqual = <T>(value1: T, value2: T): boolean => {
  if (value1 === value2) {
    return true;
  }

  const isObject1 = typeof value1 === "object" && value1 !== null;
  const isObject2 = typeof value2 === "object" && value2 !== null;

  if (isObject1 && isObject2) {
    const keys1 = Object.keys(value1) as Array<keyof T>;
    const keys2 = Object.keys(value2) as Array<keyof T>;

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (let key of keys1) {
      if (!keys2.includes(key) || !isEqual(value1[key], value2[key])) {
        return false;
      }
    }

    return true;
  }

  return false;
};

const uniqueMerge = <T extends Record<string, unknown>>(
  arr1: T[],
  arr2: T[]
): T[] => {
  const result = [...arr1];
  arr2.forEach((item2) => {
    const isDuplicate = arr1.some((item1) => isEqual(item1, item2));
    if (!isDuplicate) {
      result.push(item2);
    }
  });
  return result;
};

// GUARDS
const isTraversalFilterExpressionNode = (
  data: TraversalFilter | PredicateFilter | undefined
): data is TraversalFilterExpressionNode => {
  return data?.type === "traversalFilterExpression";
};

const isTraversalFilterExpressionTerm = (
  data: TraversalFilter | PredicateFilter | undefined
): data is TraversalFilterExpressionTerm => {
  return data?.type === "traversalPropertyFilter";
};

const isPredicateFilterExpressionNode = (
  data: TraversalFilter | PredicateFilter | undefined
): data is PredicateFilterExpressionNode => {
  return data?.type === "predicateFilterExpression";
};

const isPredicateFilterExpressionTerm = (
  data: TraversalFilter | PredicateFilter | undefined
): data is PredicateFilterExpressionTerm => {
  return data?.type === "predicatePropertyFilter";
};

const isVariableNode = (
  data:
    | PredicateFilterExpressionTerm["value"]
    | TraversalFilterExpressionTerm["value"]
): data is VariableNode => {
  if (typeof data !== "object") return false;
  return data?.type === "variable";
};
