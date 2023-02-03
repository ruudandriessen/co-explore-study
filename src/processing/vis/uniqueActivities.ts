import { arrange, desc, groupBy, n, summarize, tidy } from "@tidyjs/tidy";
import { OutputRow } from "../../models/OutputRow";

function uniqueActivities(data: OutputRow[]) {
  return tidy(
    data,
    groupBy("activity", summarize({ total: n() })),
    arrange(desc("total"))
  );
}

export function uniqueActivityLabels(data: OutputRow[]) {
  return uniqueActivities(data).map((row) => row.activity);
}

export function uniqueActivitiesDataset(data: OutputRow[]) {
  const activities = uniqueActivities(data);

  return {
    label: "Activity count",
    data: activities.map((row) => row.total),
    backgroundColor: "#67a9cf",
  };
}
