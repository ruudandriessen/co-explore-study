export interface ContentProperties {
  tools: string[];
  workStyle: string;
  outputs: string[];
  content: string;
}

export interface RowData extends ContentProperties {
  activity: string;
  labels: string[];
}
