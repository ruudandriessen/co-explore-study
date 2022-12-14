import { OutputRow } from "../models/OutputRow";
import { RowData } from "../models/RowData";

function normalizeString(str: string) {
  return str.trim().toLowerCase();
}

export function produceOutput(rows: RowData[]): OutputRow[] {
  return rows.map((row) => ({
    activity: row.title,
    content: row.content,
    labels: row.labels.split(",").map(normalizeString),
  }));
}
