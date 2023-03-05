import { InputRow } from "../../models/InputRow";

function filterTitleAndContentOnlyRow(row: InputRow) {
  const columnWithValue = Object.values(row).filter(
    (value) => value != ""
  ).length;

  return columnWithValue > 2;
}

function filterCoExplore(row: InputRow) {
  return !row.title.toLowerCase().startsWith("co-exploration");
}

export function filterRow(row: InputRow) {
  return filterTitleAndContentOnlyRow(row) && filterCoExplore(row);
}
