import { convertToJ1QLVariableSyntax } from "../util/convertToJ1QLVariableSyntax";
import { pruneEmptyFiltersFromQuery } from "./pruneEmptyFiltersFromQuery";
import { QueryVariablePayload } from "../types";

export const hydrateQueryVariables = (
  query: string,
  queryVariables: QueryVariablePayload
) => {
  const j1qlFormattedQuery = convertToJ1QLVariableSyntax(query);

  const prunedQuery = pruneEmptyFiltersFromQuery(
    j1qlFormattedQuery,
    queryVariables
  );

  const regex = /\${(.*?)}/g;
  return prunedQuery.replace(regex, (_, variableName: string) => {
    if (Object.prototype.hasOwnProperty.call(queryVariables, variableName)) {
      const variableValue = queryVariables[variableName];
      if (typeof variableValue === "string") {
        console.log("variableValue", variableValue);
        return variableValue;
      } else if (Array.isArray(variableValue)) {
        return `(${variableValue.join(" OR ")})`;
      }
    }
    return `\${${variableName}}`;
  });
};
