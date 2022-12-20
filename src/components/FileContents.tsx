import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { useMemo } from "react";
import { InputRow } from "../models/InputRow";
import { transform } from "../processing/transform";
import { RowDataTable } from "./RowDataTable";

interface FileContentsProps {
  rows: InputRow[];
}

export function FileContents({ rows }: FileContentsProps) {
  const filtered = useMemo(() => (rows ? transform(rows) : null), [rows]);
  return (
    <Tabs>
      <TabList>
        <Tab>Input</Tab>
        <Tab>Output</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <RowDataTable rows={rows ?? []} />
        </TabPanel>
        <TabPanel>
          <RowDataTable rows={filtered ?? []} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
