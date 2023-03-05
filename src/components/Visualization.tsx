import { Grid } from "@chakra-ui/react";
import { RowData } from "../models/RowData";
import { UniqueActivities } from "./UniqueActivities";
import { UniqueCategories } from "./UniqueCategories";
import { UniqueLabels } from "./UniqueLabels";

interface VisualizationProps {
  data: RowData[];
}

export function Visualization({ data }: VisualizationProps) {
  return (
    <Grid gap={2} templateColumns="1fr 1fr">
      <div>
        <UniqueCategories data={data} />
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
