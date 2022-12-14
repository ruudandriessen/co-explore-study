import group1 from "../data/group1-clean.csv";
import { processData } from "../processing/input/processData";
import { UniqueActivities } from "./UniqueActivities";
import { UniqueLabels } from "./UniqueLabels";

export function Visualization() {
  const data = processData(group1);

  return (
    <div
      style={{
        padding: "64px",
      }}
    >
      <UniqueLabels data={data} />
      <UniqueActivities data={data} />
    </div>
  );
}
