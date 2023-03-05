import { InputRow } from "../models/InputRow";
import { RowData } from "../models/RowData";
import { filterRow } from "./internal/filterRows";
import { transformCardContent } from "./internal/transformCardContent";
import { transformLabels } from "./internal/transformLabels";

function transformRow(row: InputRow): RowData {
  return {
    activity: row.title,
    date: row.date,
    ...transformLabels(row.labels),
    ...transformCardContent(row.content),
  };
}

export function transform(input: InputRow[]) {
  const output = input.filter(filterRow).map(transformRow);
  const filtered = input.filter((row) => !filterRow(row));
  return { output, filtered };
}
