import { InputRow } from "../models/InputRow";
import { correctLoader } from "./correctLoader";
import { filterRows } from "./filterRows";
import { produceOutput } from "./produceOutput";

export function processData(input: InputRow[]) {
  const correctInput = correctLoader(input);
  const filtered = filterRows(correctInput);

  return produceOutput(filtered);
}
