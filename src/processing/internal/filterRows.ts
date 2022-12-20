import { InputRow } from "../../models/InputRow";

function filterTitleAndContentOnlyRow(row: InputRow) {
  const columnWithValue = Object.values(row).filter(
    (value) => value != ""
  ).length;

  return columnWithValue > 2;
}

export function filterRow(row: InputRow) {
  return filterTitleAndContentOnlyRow(row);
}
