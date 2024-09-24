import { extractQueryVariableMetadata } from ".";
import { QueryVariableMetadata } from "../types";

describe("extractQueryVariableMetadata", () => {
  describe("with a single query", () => {
    it("should return an empty map if the query cannot be parsed", () => {
      const query = "INVALID QUERY";
      const result = extractQueryVariableMetadata(query);
      expect(result).toEqual(new Map());
    });

    it("should return an empty map if there are no variables in the query", () => {
      const query = 'Find User WITH name = "Karson"';
      const result = extractQueryVariableMetadata(query);
      expect(result).toEqual(new Map());
    });

    it("should return a map with the variable name as the key", () => {
      const query = "FIND User WITH displayName = ${variable}";
      const result = extractQueryVariableMetadata(query);
      expect(result.has("variable")).toBe(true);
    });

    it("should extract one variable metadata if the variable is used once", () => {
      const query = "FIND User WITH displayName = ${variable}";
      const result = extractQueryVariableMetadata(query);
      expect(result.get("variable")?.length).toBe(1);
    });

    it("should extract the correct classes of a query variable for a simple query", () => {
      const query = "FIND User WITH displayName = ${variable}";
      const result = extractQueryVariableMetadata(query);
      expect(result.get("variable")).toEqual([
        expect.objectContaining({
          classes: ["User"],
        }),
      ]);
    });

    it("should extract the correct types of a query variable for a simple query", () => {
      const query = "FIND jira_user WITH displayName = ${variable}";
      const result = extractQueryVariableMetadata(query);
      expect(result.get("variable")).toEqual([
        expect.objectContaining({
          types: ["jira_user"],
        }),
      ]);
    });

    it("should extract the correct field of a query variable for a simple query", () => {
      const query = "FIND jira_user WITH displayName = ${variable}";
      const result = extractQueryVariableMetadata(query);
      expect(result.get("variable")).toEqual([
        expect.objectContaining({
          field: "displayName",
        }),
      ]);
    });

    it("should extract the correct metadata of a query variable for a complex query", () => {
      const query =
        "FIND User THAT RELATES TO >> Problem THAT RELATES TO jira_user AS ju WHERE ju.name = ${variable}";
      const result = extractQueryVariableMetadata(query);
      expect(result.get("variable")).toEqual([
        {
          field: "name",
          classes: ["User"],
          types: [],
        },
      ]);
    });

    it("should handle multiple variables", () => {
      const validQuery =
        "FIND User WITH displayName = ${variable1} AND email = ${variable2}";
      const result = extractQueryVariableMetadata(validQuery);

      const expectedMetadata1: QueryVariableMetadata = {
        field: "displayName",
        classes: ["User"],
        types: [],
      };

      const expectedMetadata2: QueryVariableMetadata = {
        field: "email",
        classes: ["User"],
        types: [],
      };

      expect(result.get("variable1")).toEqual([expectedMetadata1]);
      expect(result.get("variable2")).toEqual([expectedMetadata2]);
    });

    it("should not put the same variable metadata in the map multiple times", () => {
      const validQuery =
        "FIND User WITH displayName = ${variable1} AND displayName = ${variable1}";
      const result = extractQueryVariableMetadata(validQuery);
      expect(result.get("variable1")?.length).toBe(1);
    });

    it("should handle multiple uses of the same variable", () => {
      const validQuery =
        "FIND User WITH displayName = ${variable1} THAT RELATES TO Device with owner = ${variable1}";
      const result = extractQueryVariableMetadata(validQuery);

      const expectedMetadata1: QueryVariableMetadata = {
        field: "displayName",
        classes: ["User"],
        types: [],
      };

      const expectedMetadata2: QueryVariableMetadata = {
        field: "owner",
        classes: ["Device"],
        types: [],
      };

      expect(result.get("variable1")).toEqual([
        expectedMetadata1,
        expectedMetadata2,
      ]);
    });
  });

  describe("with an array of queries", () => {
    it("should return a single map of all query variables", () => {
      const queries = [
        "FIND User WITH displayName = ${variable1}",
        "FIND jira_user WITH email = ${variable2}",
      ];
      const result = extractQueryVariableMetadata(queries);
      expect(result.get("variable1")).toEqual([
        {
          field: "displayName",
          classes: ["User"],
          types: [],
        },
      ]);
      expect(result.get("variable2")).toEqual([
        {
          field: "email",
          classes: [],
          types: ["jira_user"],
        },
      ]);
    });

    it("should put multiple uses of the same query variable on the same key", () => {
      const queries = [
        "FIND User WITH displayName = ${variable1} AND email = ${variable2}",
        "FIND Device WITH name = ${variable1} AND email = ${variable2}",
      ];
      const result = extractQueryVariableMetadata(queries);
      const variable1Metadata = result.get("variable1");
      const variable2Metadata = result.get("variable2");
      expect(variable1Metadata).toEqual([
        {
          field: "displayName",
          classes: ["User"],
          types: [],
        },
        {
          field: "name",
          classes: ["Device"],
          types: [],
        },
      ]);
      expect(variable2Metadata).toEqual([
        {
          field: "email",
          classes: ["User"],
          types: [],
        },
        {
          field: "email",
          classes: ["Device"],
          types: [],
        },
      ]);
    });

    it("should not add the same variable metadata multiple times", () => {
      const queries = [
        "FIND User WITH displayName = ${variable1}",
        "FIND User WITH displayName = ${variable1}",
      ];
      const result = extractQueryVariableMetadata(queries);
      expect(result.get("variable1")?.length).toBe(1);
    });

    it("should return query variables if one query is invalid", () => {
      const queries = [
        "FIND User WITH displayName = ${variable1}",
        "INVALID QUERY",
      ];
      const result = extractQueryVariableMetadata(queries);
      expect(result.get("variable1")).toEqual([
        {
          field: "displayName",
          classes: ["User"],
          types: [],
        },
      ]);
    });
  });
});
