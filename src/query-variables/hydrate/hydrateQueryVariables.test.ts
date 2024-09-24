import { hydrateQueryVariables } from ".";

describe("hydrateQueryVariables", () => {
  describe("new query variable payload format", () => {
    it("should replace string variables in the {{}} syntax", () => {
      const variables = { displayNameVar: '"test"' };
      const query = "FIND User WITH displayName = {{displayNameVar}}";

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual('FIND User WITH displayName = "test"');
    });

    it('should replace string variables in the "{{}}" syntax', () => {
      const variables = { displayNameVar: '"test"' };
      const query = 'FIND User WITH displayName = "{{displayNameVar}}"';

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual('FIND User WITH displayName = "test"');
    });

    it("should replace string variables in the '{{}}' syntax", () => {
      const variables = { displayNameVar: '"test"' };
      const query = 'FIND User WITH displayName = "{{displayNameVar}}"';

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual('FIND User WITH displayName = "test"');
    });

    it("should replace string variables in the ${} syntax", () => {
      const variables = { displayNameVar: '"test"' };
      const query = "FIND User WITH displayName = ${displayNameVar}";

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual('FIND User WITH displayName = "test"');
    });

    it("should replace number variables in the ${} syntax", () => {
      const variables = { idVar: "123" };
      const query = "FIND User WITH id = ${idVar}";

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual("FIND User WITH id = 123");
    });

    it("should replace number variables in the {{}} syntax", () => {
      const variables = { idVar: "123" };
      const query = "FIND User WITH id = {{idVar}}";

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual("FIND User WITH id = 123");
    });

    it('should replace number variables in the "{{}}" syntax', () => {
      const variables = { idVar: "123" };
      const query = 'FIND User WITH id = "{{idVar}}"';

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual("FIND User WITH id = 123");
    });

    it("should replace number variables in the '{{}}' syntax", () => {
      const variables = { idVar: "123" };
      const query = "FIND User WITH id = '{{idVar}}'";

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual("FIND User WITH id = 123");
    });

    it("should replace boolean variables in the ${} syntax", () => {
      const variables = { isActiveVar: "true" };
      const query = "FIND User WITH isActive = ${isActiveVar}";

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual("FIND User WITH isActive = true");
    });

    it("should replace boolean variables in the {{}} syntax", () => {
      const variables = { isActiveVar: "true" };
      const query = "FIND User WITH isActive = {{isActiveVar}}";

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual("FIND User WITH isActive = true");
    });

    it('should replace boolean variables in the "{{}}" syntax', () => {
      const variables = { isActiveVar: "true" };
      const query = 'FIND User WITH isActive = "{{isActiveVar}}"';

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual("FIND User WITH isActive = true");
    });

    it("should replace boolean variables in the '{{}}' syntax", () => {
      const variables = { isActiveVar: "true" };
      const query = "FIND User WITH isActive = '{{isActiveVar}}'";

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual("FIND User WITH isActive = true");
    });

    it("should replace regex variables in the ${} syntax", () => {
      const variables = { regexVar: "/test/g" };
      const query = "FIND User WITH name =~ ${regexVar}";

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual("FIND User WITH name =~ /test/g");
    });

    it("should replace regex variables in the {{}} syntax", () => {
      const variables = { regexVar: "/test/g" };
      const query = "FIND User WITH name =~ {{regexVar}}";

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual("FIND User WITH name =~ /test/g");
    });

    it('should replace regex variables in the "{{}}" syntax', () => {
      const variables = { regexVar: "/test/g" };
      const query = 'FIND User WITH name =~ "{{regexVar}}"';

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual("FIND User WITH name =~ /test/g");
    });

    it("should replace regex variables in the '{{}}' syntax", () => {
      const variables = { regexVar: "/test/g" };
      const query = "FIND User WITH name =~ '{{regexVar}}'";

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual("FIND User WITH name =~ /test/g");
    });

    it("should replace undefined variables in the ${} syntax", () => {
      const variables = { isActiveVar: "undefined" };
      const query = "FIND User WITH isActive = ${isActiveVar}";

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual("FIND User WITH isActive = undefined");
    });

    it("should replace undefined variables in the {{}} syntax", () => {
      const variables = { isActiveVar: "undefined" };
      const query = "FIND User WITH isActive = {{isActiveVar}}";

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual("FIND User WITH isActive = undefined");
    });

    it('should replace undefined variables in the "{{}}" syntax', () => {
      const variables = { isActiveVar: "undefined" };
      const query = 'FIND User WITH isActive = "{{isActiveVar}}"';

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual("FIND User WITH isActive = undefined");
    });

    it("should replace undefined variables in the '{{}}' syntax", () => {
      const variables = { isActiveVar: "undefined" };
      const query = "FIND User WITH isActive = '{{isActiveVar}}'";

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual("FIND User WITH isActive = undefined");
    });
  });

  describe("multiple query variables", () => {
    it("should replace multiple variables in a query in the {{}} syntax", () => {
      const variables = {
        displayNameVar: '"test"',
        idVar: '"a1b2c3"',
        isActiveVar: "true",
      };
      const query =
        "FIND User WITH displayName = {{displayNameVar}} AND id = {{idVar}} AND isActive = {{isActiveVar}}";

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual(
        'FIND User WITH displayName = "test" AND id = "a1b2c3" AND isActive = true'
      );
    });

    it('should replace multiple variables in a query in the "{{}}" syntax', () => {
      const variables = {
        displayNameVar: '"test"',
        idVar: '"a1b2c3"',
        isActiveVar: "true",
      };
      const query =
        'FIND User WITH displayName = "{{displayNameVar}}" AND id = "{{idVar}}" AND isActive = "{{isActiveVar}}"';

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual(
        'FIND User WITH displayName = "test" AND id = "a1b2c3" AND isActive = true'
      );
    });

    it("should replace multiple variables in a query in the '{{}}' syntax", () => {
      const variables = {
        displayNameVar: '"test"',
        idVar: '"a1b2c3"',
        isActiveVar: "true",
      };
      const query =
        "FIND User WITH displayName = '{{displayNameVar}}' AND id = '{{idVar}}' AND isActive = '{{isActiveVar}}'";

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual(
        'FIND User WITH displayName = "test" AND id = "a1b2c3" AND isActive = true'
      );
    });

    it("should replace multiple variables in a query in the ${} syntax", () => {
      const variables = {
        displayNameVar: '"test"',
        idVar: '"a1b2c3"',
        isActiveVar: "true",
      };
      const query =
        "FIND User WITH displayName = ${displayNameVar} AND id = ${idVar} AND isActive = ${isActiveVar}";

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual(
        'FIND User WITH displayName = "test" AND id = "a1b2c3" AND isActive = true'
      );
    });
  });

  describe("array variables", () => {
    it('should replace string variables in the "{{}}" syntax', () => {
      const variables = { displayNameVar: ['"test"', '"test2"'] };
      const query = 'FIND User WITH displayName = "{{displayNameVar}}"';

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual(
        'FIND User WITH displayName = ("test" OR "test2")'
      );
    });

    it("should replace string variables in the '{{}}' syntax", () => {
      const variables = { displayNameVar: ['"test"', '"test2"'] };
      const query = "FIND User WITH displayName = '{{displayNameVar}}'";

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual(
        'FIND User WITH displayName = ("test" OR "test2")'
      );
    });

    it("should replace string variables in the {{}} syntax", () => {
      const variables = { displayNameVar: ['"test"', '"test2"'] };
      const query = "FIND User WITH displayName = {{displayNameVar}}";

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual(
        'FIND User WITH displayName = ("test" OR "test2")'
      );
    });

    it("should replace string variables in the ${} syntax", () => {
      const variables = { displayNameVar: ['"test"', '"test2"'] };
      const query = "FIND User WITH displayName = ${displayNameVar}";

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual(
        'FIND User WITH displayName = ("test" OR "test2")'
      );
    });

    it('should replace number variables in the "{{}}" syntax', () => {
      const variables = { idVar: ["123", "456"] };
      const query = 'FIND User WITH id = "{{idVar}}"';

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual("FIND User WITH id = (123 OR 456)");
    });

    it("should replace number variables in the '{{}}' syntax", () => {
      const variables = { idVar: ["123", "456"] };
      const query = "FIND User WITH id = '{{idVar}}'";

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual("FIND User WITH id = (123 OR 456)");
    });

    it("should replace number variables in the {{}} syntax", () => {
      const variables = { idVar: ["123", "456"] };
      const query = "FIND User WITH id = {{idVar}}";

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual("FIND User WITH id = (123 OR 456)");
    });

    it("should replace number variables in the ${} syntax", () => {
      const variables = { idVar: ["123", "456"] };
      const query = "FIND User WITH id = ${idVar}";

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual("FIND User WITH id = (123 OR 456)");
    });

    it('should replace boolean variables in the "{{}}" syntax', () => {
      const variables = { isActiveVar: ["true", "false"] };
      const query = 'FIND User WITH isActive = "{{isActiveVar}}"';

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual("FIND User WITH isActive = (true OR false)");
    });

    it("should replace boolean variables in the '{{}}' syntax", () => {
      const variables = { isActiveVar: ["true", "false"] };
      const query = "FIND User WITH isActive = '{{isActiveVar}}'";

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual("FIND User WITH isActive = (true OR false)");
    });

    it("should replace boolean variables in the {{}} syntax", () => {
      const variables = { isActiveVar: ["true", "false"] };
      const query = "FIND User WITH isActive = {{isActiveVar}}";

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual("FIND User WITH isActive = (true OR false)");
    });

    it("should replace boolean variables in the ${} syntax", () => {
      const variables = { isActiveVar: ["true", "false"] };
      const query = "FIND User WITH isActive = ${isActiveVar}";

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual("FIND User WITH isActive = (true OR false)");
    });

    it('should replace regex variables in the "{{}}" syntax', () => {
      const variables = { regexVar: ["/test/g", "/test2/g"] };
      const query = 'FIND User WITH name =~ "{{regexVar}}"';

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual("FIND User WITH name =~ (/test/g OR /test2/g)");
    });

    it("should replace regex variables in the '{{}}' syntax", () => {
      const variables = { regexVar: ["/test/g", "/test2/g"] };
      const query = "FIND User WITH name =~ '{{regexVar}}'";

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual("FIND User WITH name =~ (/test/g OR /test2/g)");
    });

    it("should replace regex variables in the {{}} syntax", () => {
      const variables = { regexVar: ["/test/g", "/test2/g"] };
      const query = "FIND User WITH name =~ {{regexVar}}";

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual("FIND User WITH name =~ (/test/g OR /test2/g)");
    });

    it("should replace regex variables in the ${} syntax", () => {
      const variables = { regexVar: ["/test/g", "/test2/g"] };
      const query = "FIND User WITH name =~ ${regexVar}";

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual("FIND User WITH name =~ (/test/g OR /test2/g)");
    });

    it('should replace undefined variables in the "{{}}" syntax', () => {
      const variables = { isActiveVar: ["undefined", "undefined"] };
      const query = 'FIND User WITH isActive = "{{isActiveVar}}"';

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual(
        "FIND User WITH isActive = (undefined OR undefined)"
      );
    });

    it('should handle multiple array variable types in the "{{}}" syntax', () => {
      const variables = {
        displayNameVar: ['"test"', '"test2"'],
        idVar: ["123", "456"],
        isActiveVar: ["true", "false"],
        regexVar: ["/test/g", "/test2/g"],
      };
      const query =
        'FIND User WITH displayName = "{{displayNameVar}}" AND id = "{{idVar}}" AND isActive = "{{isActiveVar}}" AND name =~ "{{regexVar}}"';

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual(
        'FIND User WITH displayName = ("test" OR "test2") AND id = (123 OR 456) AND isActive = (true OR false) AND name =~ (/test/g OR /test2/g)'
      );
    });
  });

  describe("missing variables", () => {
    it("should replace only the provided variables if others are missing", () => {
      const variables = { isActiveVar: "undefined" };
      const query =
        "FIND User WITH isActive = '{{isActiveVar}}' AND email = ${params.email}";

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual(
        "FIND User WITH isActive = undefined AND email = ${params.email}"
      );
    });

    it("should not replace any variables if none are provided", () => {
      const variables = {};
      const query =
        "FIND User WITH isActive = '{{isActiveVar}}' AND email = ${params.email}";

      const result = hydrateQueryVariables(query, variables);

      expect(result).toEqual(
        "FIND User WITH isActive = ${isActiveVar} AND email = ${params.email}"
      );
    });

    it("should prune empty filters from the query", () => {
      const query = "FIND User WITH name = ${userName}";
      const variables = { userName: "null" };
      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual("FIND User");
    });

    it("should handle a mix of all missing variable syntaxes", () => {
      const variables = { isActiveVar: "undefined", email: "null" };
      const query =
        'FIND User WITH isActive = ${isActiveVar} AND email = {{email}} AND name = "{{name}}"';

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual(
        "FIND User WITH isActive = undefined AND name = ${name}"
      );
    });
  });

  describe("complex cases", () => {
    it("should prune deeply nested empty filters with a mix of syntaxes", () => {
      const query =
        "FIND User WITH name = ${userName} AND (age = {{age}} OR height = {{height}})";
      const variables = {
        userName: "null",
        age: "null",
        height: "180",
      };

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual("FIND User WITH height = 180");
    });

    it("should inject variables into a complex query with multiple syntaxes", () => {
      const variables = {
        displayNameVar: ['"test"', '"test2"', "undefined", '"test3"'],
        idVar: "null",
        isActiveVar: ["true", "false"],
        regexVar: "/test/g",
      };
      const query = `FIND User WITH displayName = "{{displayNameVar}}" AND id = \${idVar} AND isActive = '{{isActiveVar}}' AND name = {{regexVar}}`;

      const result = hydrateQueryVariables(query, variables);
      expect(result).toEqual(
        'FIND User WITH displayName = ("test" OR "test2" OR undefined OR "test3") AND isActive = (true OR false) AND name = /test/g'
      );
    });
  });
});
