/**
 * Takes a J1QL query with query variables in the `${variableName}` format
 * and returns an array of all variable names.
 */
export const extractQueryVariables = (query: string): string[] => {
  const REGEX = /\${(.*?)}/gm;
  const matches = query.match(REGEX) || [];
  const variables = matches.map((match) => match.slice(2, -1).trim()); // remove the ${} and trim whitespace
  return Array.from(new Set(variables));
};
