import { Bar } from "react-chartjs-2";
import { OutputRow } from "../models/OutputRow";
import {
  uniqueActivitiesDataset,
  uniqueActivityLabels,
} from "../processing/vis/uniqueActivities";

interface BarChartProps {
  data: OutputRow[];
}

export function UniqueActivities({ data }: BarChartProps) {
  const uniqueActivityDataset = uniqueActivitiesDataset(data);

  return (
    <Bar
      options={{ responsive: true }}
      data={{
        labels: uniqueActivityLabels(data),
        datasets: [uniqueActivityDataset],
      }}
    ></Bar>
  );
}
