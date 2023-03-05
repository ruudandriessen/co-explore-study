import { Flex } from "@chakra-ui/react";
import { RowData } from "../models/RowData";
import { UniqueCategories } from "./UniqueCategories";
import { UniqueLabels } from "./UniqueLabels";

interface VisualizationProps {
  data: RowData[];
}

export function Visualization({ data }: VisualizationProps) {
  return (
    <Flex direction="column" gap={2} width="100%" maxWidth={"1000px"}>
      <UniqueCategories data={data} />
      <UniqueLabels data={data} />
    </Flex>
  );
}
