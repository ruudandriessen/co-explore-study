import { useMemo } from "react";
import { OutputRow } from "../models/OutputRow";
import { UniqueActivities } from "./UniqueActivities";
import { UniqueLabelGroups } from "./UniqueLabelGroups";
import { UniqueLabels } from "./UniqueLabels";

interface VisualizationProps {
  data: OutputRow[];
}

export function Visualization({ data }: VisualizationProps) {
  return (
    <div
      style={{
        padding: "64px",
      }}
    >
      <UniqueLabelGroups data={data} />
      <UniqueLabels data={data} />
      <UniqueActivities data={data} />
    </div>
  );
}
