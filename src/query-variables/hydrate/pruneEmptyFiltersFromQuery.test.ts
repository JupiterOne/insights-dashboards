import { pruneEmptyFiltersFromQuery } from "./pruneEmptyFiltersFromQuery";

describe("pruneEmptyFiltersFromQuery", () => {
  it("should remove empty filters from the query", () => {
    const query = "FIND User WITH name = ${userName}";
    const variables = { userName: "null" };
    const result = pruneEmptyFiltersFromQuery(query, variables);
    expect(result).toEqual("FIND User");
  });

  it("should not prune variables with a value", () => {
    const query = "FIND User WITH name = ${userName} AND age = ${age}";
    const variables = { userName: "null", age: "30" };
    const result = pruneEmptyFiltersFromQuery(query, variables);
    expect(result).toEqual("FIND User WITH age = ${age}");
  });

  it("should prune multiple empty filters", () => {
    const query = "FIND User WITH name = ${userName} AND age = ${age}";
    const variables = { userName: "null", age: "null" };
    const result = pruneEmptyFiltersFromQuery(query, variables);
    expect(result).toEqual("FIND User");
  });

  it("should prune nested empty filters", () => {
    const query =
      "FIND User WITH name = ${userName} AND (age = ${age} OR height = ${height})";
    const variables = {
      userName: "null",
      age: "null",
      height: "180",
    };
    const result = pruneEmptyFiltersFromQuery(query, variables);
    expect(result).toEqual("FIND User WITH height = ${height}");
  });

  it("should handle traversals", () => {
    const query = "FIND User THAT RELATES TO DEVICE WITH name = ${userName}";
    const variables = { userName: "null" };

    const result = pruneEmptyFiltersFromQuery(query, variables);
    expect(result).toEqual("FIND User THAT RELATES TO DEVICE");
  });
});
