import { extractQueryVariables } from './extractQueryVariables';

describe('extractQueryVariables', () => {
  it('should return an array of variable names', () => {
    const query =
      'FIND User THAT RELATES TO Problem WITH displayName = ${displayNameVar} AND age > ${ageVar}';
    const result = extractQueryVariables(query);
    expect(result).toEqual(['displayNameVar', 'ageVar']);
  });

  it('should return an empty array if there are no variables', () => {
    const query =
      'FIND User THAT RELATES TO Problem WITH displayName = "John Doe" AND age > 30';
    const result = extractQueryVariables(query);
    expect(result).toEqual([]);
  });

  it('should not add the same variable multiple times', () => {
    const query = 'Find User WITH name = ${nameVar} OR alias = ${nameVar}';
    const result = extractQueryVariables(query);
    expect(result).toEqual(['nameVar']);
  });

  it('should handle queries with variables that have special characters', () => {
    const query = 'Find User WITH name = ${user_name_var} AND id = ${user-id}';
    const result = extractQueryVariables(query);
    expect(result).toEqual(['user_name_var', 'user-id']);
  });

  it('should strip out extra spaces and tabs around a variable name', () => {
    const query =
      'Find User WITH name = ${  nameVar  } AND age = ${\tageVar\t} OR id = ${   idVar }';
    const result = extractQueryVariables(query);
    expect(result).toEqual(['nameVar', 'ageVar', 'idVar']);
  });

  it('should handle an empty query string', () => {
    const query = '';
    const result = extractQueryVariables(query);
    expect(result).toEqual([]);
  });

  it('should handle queries with no variables but have similar syntax', () => {
    const query = 'Find User WITH name = "$" AND age > 30';
    const result = extractQueryVariables(query);
    expect(result).toEqual([]);
  });

  it('should handle a query WITH only one variable', () => {
    const query = 'Find User WITH id = ${userId}';
    const result = extractQueryVariables(query);
    expect(result).toEqual(['userId']);
  });
});
