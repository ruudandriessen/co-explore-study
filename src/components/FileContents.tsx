import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { InputRow } from "../models/InputRow";
import { RowData } from "../models/RowData";
import { RowDataTable } from "./RowDataTable";
import { Visualization } from "./Visualization";

interface FileContentsProps {
  rows: InputRow[];
  filtered: InputRow[];
  output: RowData[];
}

export function FileContents({ rows, output, filtered }: FileContentsProps) {
  return (
    <Tabs overflow="hidden" display="flex" flexDirection="column">
      <TabList>
        <Tab>{`Input (${rows.length})`}</Tab>
        <Tab>{`Filtered (${filtered.length})`}</Tab>
        <Tab>{`Output (${output.length})`}</Tab>
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
          <RowDataTable rows={output ?? []} />
        </TabPanel>
        <TabPanel>
          <Visualization data={output ?? []} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
