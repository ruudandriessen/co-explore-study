import { Bar } from "react-chartjs-2";
import { RowData } from "../models/RowData";
import {
  uniqueLabelsDataset,
  uniqueLabelsLabels,
} from "../processing/vis/uniqueLabels";

interface BarChartProps {
  data: RowData[];
}

export function UniqueLabels({ data }: BarChartProps) {
  const datasets = uniqueLabelsDataset(data);

  return (
    <Bar
      options={{ responsive: true }}
      data={{
        labels: uniqueLabelsLabels(data),
        datasets: [datasets],
      }}
    ></Bar>
  );
}
