import { J1QLVariableValue } from "../types";

export const queryVariableCodec = {
  /**
   * Converts a J1QLVariableValue to a string.
   *
   * Values are converted to strings because:
   * - Query parameters are inherently strings.
   * - JSON payloads do not support undefined or regex.
   * - Strings are delimited by quotes to ensure they are treated as literals
   *   and to avoid confusion with other types.
   * - We convert variables to strings so they can be directly inserted into the
   *   query, which is a string.
   * - JSON.stringify does not handle undefined or regex.
   */
  serialize(value: J1QLVariableValue): string {
    if (value === null) {
      return "null";
    }
    if (value === undefined) {
      return "undefined";
    }
    if (typeof value === "boolean" || typeof value === "number") {
      return String(value);
    }
    if (value instanceof RegExp) {
      return value.toString();
    }
    return `"${String(value)}"`;
  },

  /**
   * Parses a serialized query variable and converts it back to
   * a JavaScript value.
   */
  parse: (value: string): J1QLVariableValue => {
    if (value === "null") {
      return null;
    }
    if (value === "undefined") {
      return undefined;
    }
    if (value === "true") {
      return true;
    }
    if (value === "false") {
      return false;
    }
    if (value.trim() !== "" && !isNaN(Number(value))) {
      return Number(value);
    }
    if (isRegexString(value)) {
      return stringToRegex(value);
    }
    if (isQuotedString(value)) {
      return value.slice(1, -1);
    }
    throw new Error(`Cannot parse value: ${value}`);
  },

  safeParse(
    value: string,
    log: (message: string, ...args: any[]) => void = console.warn
  ): J1QLVariableValue {
    try {
      return this.parse(value);
    } catch (e) {
      log(`QueryVariableFormatter: Failed to parse value: ${value}`);
      return value;
    }
  },

  isParsable(value: string): boolean {
    if (value.trim() === "") {
      return false;
    }
    return (
      value === "null" ||
      value === "undefined" ||
      value === "true" ||
      value === "false" ||
      !isNaN(Number(value)) ||
      isRegexString(value) ||
      isQuotedString(value)
    );
  },
};

// HELPERS
export const isRegexString = (value: string): boolean => {
  if (value.startsWith("/") && value.lastIndexOf("/") > 1) {
    try {
      stringToRegex(value);
      return true;
    } catch {
      return false;
    }
  }
  return false;
};

export const stringToRegex = (value: string): RegExp => {
  const body = value.slice(1, value.lastIndexOf("/"));
  const flags = value.slice(value.lastIndexOf("/") + 1);
  return new RegExp(body, flags);
};

export const isQuotedString = (value: string): boolean => {
  return value.startsWith('"') && value.endsWith('"');
};
