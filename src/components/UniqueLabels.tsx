import { Bar } from "react-chartjs-2";
import { OutputRow } from "../models/OutputRow";
import {
  uniqueLabelsDataset,
  uniqueLabelsLabels,
} from "../processing/vis/uniqueLabels";

interface BarChartProps {
  data: OutputRow[];
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
