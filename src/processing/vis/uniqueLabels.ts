import { arrange, desc, groupBy, n, summarize, tidy } from "@tidyjs/tidy";
import { OutputRow } from "../../models/OutputRow";

function uniqueLabels(data: OutputRow[]) {
  const expandedData = data.flatMap((row) =>
    row.labels
      .filter((label) => label != "")
      .map((label) => ({ ...row, labels: label }))
  );

  return tidy(
    expandedData,
    groupBy("labels", summarize({ total: n() })),
    arrange(desc("total"))
  );
}

export function uniqueLabelsLabels(data: OutputRow[]) {
  return uniqueLabels(data).map((row) => row.labels);
}

export function uniqueLabelsDataset(data: OutputRow[]) {
  const groupedData = uniqueLabels(data);

  return {
    label: "Label count",
    data: groupedData.map((row) => row.total),
    backgroundColor: "#ef8a62",
  };
}
