import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { useMemo } from "react";
import { InputRow } from "../models/InputRow";
import { transform } from "../processing/transform";
import { RowDataTable } from "./RowDataTable";
import { Visualization } from "./Visualization";

interface FileContentsProps {
  rows: InputRow[];
}

export function FileContents({ rows }: FileContentsProps) {
  const filtered = useMemo(() => (rows ? transform(rows) : null), [rows]);
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
