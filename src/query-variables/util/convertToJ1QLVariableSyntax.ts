/**
 * Takes a query string with variables in the format `{{variableName}}`,
 * `'{{variableName}}'`, or `"{{variableName}}"` and converts them to the format
 * `${variableName}` which makes them AST transformable.
 */
export const convertToJ1QLVariableSyntax = (query: string): string => {
  const REGEX = /"{{(.*?)}}"|'{{(.*?)}}'|{{(.*?)}}/gm;
  const newQuery = query.replace(
    REGEX,
    (_, p1, p2, p3) => `\${${p1 || p2 || p3}}`
  );
  return newQuery;
};
