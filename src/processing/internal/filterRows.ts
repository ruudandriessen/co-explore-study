import { RowData } from "../../models/RowData";

function filterTitleOnlyRow(row: RowData) {
  const columnWithValue = Object.values(row).filter(
    (value) => value != ""
  ).length;

  return columnWithValue > 1;
}

function filterRow(row: RowData) {
  return filterTitleOnlyRow(row);
}

export function filterRows(input: RowData[]) {
  return input.filter(filterRow);
}
