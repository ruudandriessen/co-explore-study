import { Bar } from "react-chartjs-2";
import { RowData } from "../models/RowData";
import { uniqueLabelGroupsDataset } from "../processing/vis/uniqueCategories";

interface BarChartProps {
  data: RowData[];
}

export function UniqueCategories({ data }: BarChartProps) {
  return (
    <Bar
      options={{ responsive: true }}
      data={uniqueLabelGroupsDataset(data)}
    ></Bar>
  );
}
