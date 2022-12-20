import { Bar } from "react-chartjs-2";
import { OutputRow } from "../models/OutputRow";
import { uniqueLabelGroupsDataset } from "../processing/vis/uniqueLabelGroups";

interface BarChartProps {
  data: OutputRow[];
}

export function UniqueLabelGroups({ data }: BarChartProps) {
  return (
    <Bar
      options={{ responsive: true }}
      data={uniqueLabelGroupsDataset(data)}
    ></Bar>
  );
}
