import { Button, Flex } from "@chakra-ui/react";
import { useCallback } from "react";
import { InputRow } from "../models/InputRow";
import { RowData } from "../models/RowData";
import { loadFile } from "../processing/loadFile";
import { ColorModeToggle } from "./ColorModeToggle";
import { Uploader } from "./Uploader";
import { csvFormat } from "d3-dsv";

interface HeaderProps {
  setInputRows: (rows: InputRow[]) => void;
  output?: RowData[];
}

export function Header({ output, setInputRows }: HeaderProps) {
  const downloadCsvFile = useCallback(() => {
    if (!output) return;

    const csvContent = csvFormat(output);

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "output.csv");
    link.click();
  }, [output]);
  return (
    <Flex padding={2} alignItems="center" gap={2}>
      <ColorModeToggle />

      <Uploader
        onFileSelected={async (files) => {
          setInputRows(await loadFile(files[0]));
        }}
      />

      <Button disabled={!output} onClick={downloadCsvFile}>
        Download
      </Button>
    </Flex>
  );
}
