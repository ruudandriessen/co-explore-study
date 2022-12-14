import { useMemo, useState } from "react";
import group1 from "../data/group1-clean.csv";
import { processData } from "../processing/input/processData";
import { UniqueActivities } from "./UniqueActivities";
import { UniqueLabelGroups } from "./UniqueLabelGroups";
import { UniqueLabels } from "./UniqueLabels";

export function Visualization() {
  const data = useMemo(() => processData(group1), []);

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
