import { tidy, groupBy, summarize, n, arrange, desc } from "@tidyjs/tidy";
import { OutputRow } from "../../models/OutputRow";

enum LabelGroups {
  Inspiration = "Inspiration",
  Meetings = "Meetings",
  Iteration = "Iteration",
  Prototyping = "Prototyping",
  TeamBuilding = "Team Building",
  Research = "Research",
}

const LABEL_MAPPING: Record<string, LabelGroups> = {
  brainstorming: LabelGroups.Inspiration,
  "finding inspiration": LabelGroups.Inspiration,
  "mood board": LabelGroups.Inspiration,
  storyboards: LabelGroups.Inspiration,
  sketching: LabelGroups.Inspiration,
  "making video": LabelGroups.Inspiration,
  visualizing: LabelGroups.Inspiration,
  scenarios: LabelGroups.Inspiration,

  "regular meeting": LabelGroups.Meetings,
  "coach meeting": LabelGroups.Meetings,

  discussion: LabelGroups.Iteration,
  presenting: LabelGroups.Iteration,
  reflection: LabelGroups.Iteration,
  planning: LabelGroups.Iteration,
  voting: LabelGroups.Iteration,
  writing: LabelGroups.Iteration,
  "making agreement": LabelGroups.Iteration,
  interview: LabelGroups.Iteration,
  "preparing materials for presentation": LabelGroups.Iteration,

  "literature reading": LabelGroups.Research,
  research: LabelGroups.Research,

  "squad activity": LabelGroups.TeamBuilding,

  analysing: LabelGroups.Prototyping,
  prototyping: LabelGroups.Prototyping,
  coding: LabelGroups.Prototyping,
  "3d modeling": LabelGroups.Prototyping,
  "user test prep": LabelGroups.Prototyping,
  "user test": LabelGroups.Prototyping,
};

const LABEL_GROUP_COLORS = {
  [LabelGroups.Inspiration]: "#FAC710", // yellow
  [LabelGroups.Meetings]: "#F24726", // red
  [LabelGroups.Iteration]: "#2D9BF0", // light blue
  [LabelGroups.Prototyping]: "#0CA789", // dark green
  [LabelGroups.TeamBuilding]: "purple", // purple
  [LabelGroups.Research]: "#8FD14F", // light green
};

function uniqueLabels(data: OutputRow[]) {
  const expandedData = data.flatMap((row) =>
    row.labels
      .filter((label) => label != "")
      .map((label) => ({ ...row, group: LABEL_MAPPING[label] }))
  );

  return tidy(
    expandedData,
    groupBy("group", summarize({ total: n() })),
    arrange(desc("total"))
  );
}

export function uniqueLabelGroupsDataset(data: OutputRow[]) {
  const groupedData = uniqueLabels(data);

  return {
    labels: groupedData.map((row) => row.group),
    datasets: [
      {
        label: "Unique Labels",
        data: groupedData.map((row) => row.total),
        backgroundColor: groupedData.map(
          (row) => LABEL_GROUP_COLORS[row.group]
        ),
      },
    ],
  };
}
