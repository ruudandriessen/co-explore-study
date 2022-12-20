import { Flex, Grid } from "@chakra-ui/react";
import { OutputRow } from "../models/OutputRow";
import { UniqueActivities } from "./UniqueActivities";
import { UniqueLabelGroups } from "./UniqueLabelGroups";
import { UniqueLabels } from "./UniqueLabels";

interface VisualizationProps {
  data: OutputRow[];
}

export function Visualization({ data }: VisualizationProps) {
  return (
    <Grid gap={2} templateColumns="1fr 1fr">
      <div>
        <UniqueLabelGroups data={data} />
      </div>
      <div>
        <UniqueLabels data={data} />
      </div>
      <div>
        <UniqueActivities data={data} />
      </div>
    </Grid>
  );
}
