import {
  parse,
  PredicateFilter,
  PredicateFilterExpressionNode,
  PredicateFilterExpressionTerm,
  RootQueryNode,
  TraversalFilter,
  TraversalFilterExpressionNode,
  TraversalFilterExpressionTerm,
  VariableNode,
} from "@jupiterone/query-language-parser";

import { reverse } from "@jupiterone/query-language-reverser";
import { QueryVariablePayload } from "../types";

export const pruneEmptyFiltersFromQuery = (
  query: string,
  variables: QueryVariablePayload
): string => {
  const shouldPrune = (filterValue: any) => {
    return filterValue === "null";
  };

  const traverseTraversalFilter = (
    filter: TraversalFilter
  ): TraversalFilter | undefined => {
    if (isTraversalFilterExpressionTerm(filter)) {
      if (isVariableNode(filter.value)) {
        if (shouldPrune(variables[filter.value.identifier])) {
          return undefined;
        }
      }
      return filter;
    } else if (isTraversalFilterExpressionNode(filter)) {
      const prunedLeft = traverseTraversalFilter(filter.left);
      const prunedRight = traverseTraversalFilter(filter.right);

      if (!prunedLeft && !prunedRight) {
        return undefined; // Remove expression
      }
      if (!prunedLeft) {
        return prunedRight; // Replace expression with right node
      }
      if (!prunedRight) {
        return prunedLeft; // Replace expression with left node
      }

      filter.left = prunedLeft;
      filter.right = prunedRight;
      return filter;
    }
    return filter;
  };

  const traversePredicateFilter = (
    filter: PredicateFilter
  ): PredicateFilter | undefined => {
    if (isPredicateFilterExpressionTerm(filter)) {
      if (isVariableNode(filter.value)) {
        if (shouldPrune(variables[filter.value.identifier])) {
          return undefined;
        }
      }
    } else if (isPredicateFilterExpressionNode(filter)) {
      const prunedLeft = traversePredicateFilter(filter.left);
      const prunedRight = traversePredicateFilter(filter.right);

      if (!prunedLeft && !prunedRight) {
        return undefined; // Remove expression
      }
      if (!prunedLeft) {
        return prunedRight; // Replace expression with right node
      }
      if (!prunedRight) {
        return prunedLeft; // Replace expression with left node
      }

      filter.left = prunedLeft;
      filter.right = prunedRight;
    }
  };

  const traverseNode = (node: RootQueryNode): RootQueryNode => {
    if (node.filters) {
      node.filters = traverseTraversalFilter(node.filters) || undefined;
    }
    if (node.predicateFilters) {
      node.predicateFilters =
        traversePredicateFilter(node.predicateFilters) || undefined;
    }
    if (node.next) {
      traverseNode(node.next);
    }
    return node;
  };

  try {
    const parsedQuery = parse(query);
    const prunedQuery = traverseNode(parsedQuery);
    return reverse(prunedQuery);
  } catch (error) {
    return query;
  }
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
