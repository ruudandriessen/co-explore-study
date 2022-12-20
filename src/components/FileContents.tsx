import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { InputRow } from "../models/InputRow";
import { RowData } from "../models/RowData";
import { RowDataTable } from "./RowDataTable";
import { Visualization } from "./Visualization";

interface FileContentsProps {
  rows: InputRow[];
  filtered: RowData[];
}

export function FileContents({ rows, filtered }: FileContentsProps) {
  return (
    <Tabs overflow="hidden" display="flex" flexDirection="column">
      <TabList>
        <Tab>Input</Tab>
        <Tab>Output</Tab>
        <Tab>Visualization</Tab>
      </TabList>

      <TabPanels flex="1" overflow="scroll">
        <TabPanel>
          <RowDataTable rows={rows ?? []} />
        </TabPanel>
        <TabPanel>
          <RowDataTable rows={filtered ?? []} />
        </TabPanel>
        <TabPanel>
          <Visualization data={filtered ?? []} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
