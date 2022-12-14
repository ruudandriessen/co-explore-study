import { InputRow } from "../../models/InputRow";
import { RowData } from "../../models/RowData";

export function correctLoader(input: InputRow[]): RowData[] {
  return input.map((input) => ({
    title: input["﻿title"],
    content: input.content,
    unknown1: input.unknown1,
    labels: input.labels,
    unknown2: input.unknown2,
    unknown3: input.unknown3,
  }));
}
