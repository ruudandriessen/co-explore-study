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
  filtered: RowData[] | null;
}

export function Header({ filtered, setInputRows }: HeaderProps) {
  const downloadCsvFile = useCallback(() => {
    if (!filtered) return;

    const csvContent = csvFormat(filtered);

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "filtered.csv");
    link.click();
  }, [filtered]);
  return (
    <Flex padding={2} alignItems="center" gap={2}>
      <ColorModeToggle />

      <Uploader
        onFileSelected={async (files) => {
          setInputRows(await loadFile(files[0]));
        }}
      />

      <Button disabled={!filtered} onClick={downloadCsvFile}>
        Download
      </Button>
    </Flex>
  );
}
