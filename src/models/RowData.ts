import { LabelCategory } from "../processing/internal/transformLabelsToCategories";

export interface ContentProperties {
  tools: string[];
  workStyle: string;
  outputs: string[];
  content: string;
  coexplore: string;
}

export interface RowData extends ContentProperties {
  activity: string;
  labels: string[];
  categories: LabelCategory[];
  group?: number;
  participants: number[];
  date: string;
}
