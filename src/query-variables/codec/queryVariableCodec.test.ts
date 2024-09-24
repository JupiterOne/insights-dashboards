import {
  queryVariableCodec,
  isRegexString,
  isQuotedString,
  stringToRegex,
} from ".";

describe("isRegexString", () => {
  it("should identify a simple regex", () => {
    const result = isRegexString("/test/");
    expect(result).toBe(true);
  });

  it("should identify a regex with flags", () => {
    const result = isRegexString("/test/g");
    expect(result).toBe(true);
  });

  it("should identify a regex with multiple flags", () => {
    const result = isRegexString("/test/gim");
    expect(result).toBe(true);
  });

  it("should identify a complex regex", () => {
    const result = isRegexString("/^a(b|cd){3}x?y$/");
    expect(result).toBe(true);
  });

  it("should not identify a string starting a single slash", () => {
    const result = isRegexString("/test");
    expect(result).toBe(false);
    const result2 = isRegexString("test/");
    expect(result2).toBe(false);
    const result3 = isRegexString("te/st");
    expect(result3).toBe(false);
  });

  it("should not pick up paths", () => {
    const result = isRegexString("/path/one");
    expect(result).toBe(false);
  });
});

describe("stringToRegex", () => {
  it("should convert a simple regex", () => {
    const result = stringToRegex("/test/");
    expect(result).toEqual(/test/);
  });

  it("should convert a regex with flags", () => {
    const result = stringToRegex("/test/g");
    expect(result).toEqual(/test/g);
  });

  it("should extract a regex with multiple flags", () => {
    const result = stringToRegex("/test/gim");
    expect(result).toEqual(/test/gim);
  });

  it("should extract a complex regex", () => {
    const result = stringToRegex("/^a(b|cd){3}x?y$/");
    expect(result).toEqual(/^a(b|cd){3}x?y$/);
  });
});

describe("isQuotedString", () => {
  it("should identify a quoted string", () => {
    const result = isQuotedString('"test"');
    expect(result).toBe(true);
  });

  it("should not identify a string with a single quote", () => {
    const result = isQuotedString('"test');
    expect(result).toBe(false);
    const result2 = isQuotedString('test"');
    expect(result2).toBe(false);
    const result3 = isQuotedString('te"st');
    expect(result3).toBe(false);
  });

  it("should not identify a string with no quotes", () => {
    const result = isQuotedString("test");
    expect(result).toBe(false);
  });

  it("should not identify a string with single quotes", () => {
    const result = isQuotedString("'test'");
    expect(result).toBe(false);
  });
});

describe("queryVariableFormatter", () => {
  describe("parse", () => {
    it("should parse undefined", () => {
      const result = queryVariableCodec.parse("undefined");
      expect(result).toBeUndefined();
    });

    it("should parse booleans", () => {
      const result = queryVariableCodec.parse("true");
      expect(result).toBe(true);
      const result2 = queryVariableCodec.parse("false");
      expect(result2).toBe(false);
    });

    it("should parse numbers", () => {
      const result = queryVariableCodec.parse("123");
      expect(result).toBe(123);
      const result2 = queryVariableCodec.parse("123.456");
      expect(result2).toBe(123.456);
    });

    it("should parse regex", () => {
      const result = queryVariableCodec.parse("/test/");
      expect(result).toEqual(/test/);
      const result2 = queryVariableCodec.parse("/test/g");
      expect(result2).toEqual(/test/g);
      const result3 = queryVariableCodec.parse("/^a(b|cd){3}x?y$/");
      expect(result3).toEqual(/^a(b|cd){3}x?y$/);
    });

    it("should parse quoted strings", () => {
      const result = queryVariableCodec.parse('"test"');
      expect(result).toBe("test");
    });

    it("should throw an error for unparseable values", () => {
      expect(() => queryVariableCodec.parse("")).toThrow();
      expect(() => queryVariableCodec.parse(" ")).toThrow();
      expect(() => queryVariableCodec.parse("invalid")).toThrow();
      expect(() => queryVariableCodec.parse("/test")).toThrow();
      expect(() => queryVariableCodec.parse("test/")).toThrow();
      expect(() => queryVariableCodec.parse("123abc")).toThrow();
      expect(() => queryVariableCodec.parse("!@#$%^&*()")).toThrow();
      expect(() => queryVariableCodec.parse('{"key": "value"}')).toThrow();
    });
  });

  describe("safeParse", () => {
    it("should not throw an error for unparseable values", () => {
      expect(() => queryVariableCodec.safeParse("")).not.toThrow();
      expect(() => queryVariableCodec.safeParse(" ")).not.toThrow();
      expect(() => queryVariableCodec.safeParse("invalid")).not.toThrow();
      expect(() => queryVariableCodec.safeParse("/test")).not.toThrow();
      expect(() => queryVariableCodec.safeParse("test/")).not.toThrow();
      expect(() => queryVariableCodec.safeParse("123abc")).not.toThrow();
      expect(() => queryVariableCodec.safeParse("!@#$%^&*()")).not.toThrow();
      expect(() =>
        queryVariableCodec.safeParse('{"key": "value"}')
      ).not.toThrow();
    });
  });

  describe("isParsable", () => {
    it("should identify parsable values", () => {
      expect(queryVariableCodec.isParsable("null")).toBe(true);
      expect(queryVariableCodec.isParsable("undefined")).toBe(true);
      expect(queryVariableCodec.isParsable("true")).toBe(true);
      expect(queryVariableCodec.isParsable("false")).toBe(true);
      expect(queryVariableCodec.isParsable("123")).toBe(true);
      expect(queryVariableCodec.isParsable("123.456")).toBe(true);
      expect(queryVariableCodec.isParsable("/test/")).toBe(true);
      expect(queryVariableCodec.isParsable("/test/g")).toBe(true);
      expect(queryVariableCodec.isParsable("/^a(b|cd){3}x?y$/")).toBe(true);
      expect(queryVariableCodec.isParsable('"test"')).toBe(true);
    });

    it("should identify unparseable values", () => {
      expect(queryVariableCodec.isParsable("")).toBe(false);
      expect(queryVariableCodec.isParsable(" ")).toBe(false);
      expect(queryVariableCodec.isParsable("invalid")).toBe(false);
      expect(queryVariableCodec.isParsable("/test")).toBe(false);
      expect(queryVariableCodec.isParsable("test/")).toBe(false);
      expect(queryVariableCodec.isParsable("123abc")).toBe(false);
      expect(queryVariableCodec.isParsable("!@#$%^&*()")).toBe(false);
      expect(queryVariableCodec.isParsable('{"key": "value"}')).toBe(false);
    });
  });
});
