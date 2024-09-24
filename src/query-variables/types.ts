/**
 * Information to help determine the context of a query variable's usage, so we
 * can serve relevant autocomplete suggestions.
 * */
export type QueryVariableMetadata = {
  field: string;
  classes: string[];
  types: string[];
};

/**
 * A map of all metadata for multiple query variables. Duplicates are merged.
 * */
export type QueryVariableMetadataMap = Map<string, QueryVariableMetadata[]>;

/**
 * In J1QL undefined represents a null value so we treat undefined as a
 * declared type, while ‘null’ indicates no selection.
 * */
export type J1QLVariableValue =
  | string
  | number
  | boolean
  | RegExp
  | undefined
  | null;

/**
 * Map of variable identifiers to their serialized values.
 * */
export type QueryVariablePayload = Record<string, string | string[]>;
