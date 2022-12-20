import { InputRow } from "../models/InputRow";
import { RowData } from "../models/RowData";
import { filterRows } from "./internal/filterRows";

function transformRow(row: InputRow): RowData {
  return {
    activity: row.title,
    content: row.content,
    labels: row.labels.split(","),
  };
}

export function transform(input: InputRow[]): RowData[] {
  const transformedRows = input.map(transformRow);
  return filterRows(transformedRows);
}
