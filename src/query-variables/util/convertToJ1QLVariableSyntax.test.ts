import { convertToJ1QLVariableSyntax } from './convertToJ1QLVariableSyntax';

describe('toNewQueryVariableSyntax', () => {
  it('should convert {{variable}} to ${variable}', () => {
    const query = 'FIND User WITH name = {{userName}}';
    const result = convertToJ1QLVariableSyntax(query);
    expect(result).toBe('FIND User WITH name = ${userName}');
  });

  it('should convert "{{variable}}" to ${variable}', () => {
    const query = 'FIND User WITH name = "{{userName}}"';
    const result = convertToJ1QLVariableSyntax(query);
    expect(result).toBe('FIND User WITH name = ${userName}');
  });

  it("should convert '{{variable}}' to ${variable}", () => {
    const query = "FIND User WITH name = '{{userName}}'";
    const result = convertToJ1QLVariableSyntax(query);
    expect(result).toBe('FIND User WITH name = ${userName}');
  });

  it('should not modify query variables that use ${variable}', () => {
    const query = 'FIND User WITH name = ${userName}';
    const result = convertToJ1QLVariableSyntax(query);
    expect(result).toBe(query);
  });

  it('should handle replacing multiple variables in a query', () => {
    const query = 'FIND User WITH name = "{{userName}}" AND age = {{userAge}}';
    const result = convertToJ1QLVariableSyntax(query);
    expect(result).toBe(
      'FIND User WITH name = ${userName} AND age = ${userAge}'
    );
  });

  it('should handle variables that have a special characters', () => {
    const query =
      'FIND User WITH name = "{{user_name}}" AND age = {{user_age}}';
    const result = convertToJ1QLVariableSyntax(query);
    expect(result).toBe(
      'FIND User WITH name = ${user_name} AND age = ${user_age}'
    );
  });

  it('should not modify queries that have no variables', () => {
    const query = 'FIND User WITH name = "John Doe"';
    const result = convertToJ1QLVariableSyntax(query);
    expect(result).toBe(query);
  });

  it('should handle empty strings', () => {
    const query = '';
    const result = convertToJ1QLVariableSyntax(query);
    expect(result).toBe('');
  });
});
