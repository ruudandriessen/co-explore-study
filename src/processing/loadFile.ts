import { csvParse } from "d3-dsv";
import { InputRow } from "../models/InputRow";

export async function loadFile(file: File): Promise<InputRow[]> {
  const content = await file.text();
  const header = "title,content,unknown1,labels,unknown2,date";
  const completeContent = `${header}\n${content}`;

  return csvParse(completeContent) as any;
}
