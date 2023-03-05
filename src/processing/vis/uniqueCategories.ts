import { arrange, desc, groupBy, n, summarize, tidy } from "@tidyjs/tidy";
import { RowData } from "../../models/RowData";
import { LabelCategory } from "../internal/transformLabelsToCategories";

const LABEL_GROUP_COLORS = {
  [LabelCategory.TeamCommunication]: "#FAC710", // yellow
  [LabelCategory.Ideation]: "#F24726", // red
  [LabelCategory.Research]: "#2D9BF0", // light blue
  [LabelCategory.Prototyping]: "#0CA789", // dark green
  [LabelCategory.DemoDay]: "purple", // purple
};

function uniqueLabels(data: RowData[]) {
  const expandedData = data.flatMap((row) =>
    row.categories.map((category) => ({ ...row, category }))
  );

  return tidy(
    expandedData,
    groupBy("category", summarize({ total: n() })),
    arrange(desc("total"))
  );
}

export function uniqueLabelGroupsDataset(data: RowData[]) {
  const groupedData = uniqueLabels(data);

  return {
    labels: groupedData.map((row) => row.category),
    datasets: [
      {
        label: "Unique Labels",
        data: groupedData.map((row) => row.total),
        backgroundColor: groupedData.map(
          (row) => LABEL_GROUP_COLORS[row.category]
        ),
      },
    ],
  };
}
