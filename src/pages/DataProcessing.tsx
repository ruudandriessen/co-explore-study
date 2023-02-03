import { ColorModeScript, Flex } from "@chakra-ui/react";
import { useState, useMemo } from "react";
import { FileContents } from "../components/FileContents";
import { Header } from "../components/Header";
import { InputRow } from "../models/InputRow";
import { transform } from "../processing/transform";

export const DataProcessing = () => {
  const [inputRows, setInputRows] = useState<InputRow[] | null>(null);
  const result = useMemo(
    () => (inputRows ? transform(inputRows) : null),
    [inputRows]
  );
  return (
    <>
      <ColorModeScript initialColorMode={"system"} />

      <Flex padding={2} gap={2} direction="column" maxHeight={"100vh"}>
        <Header output={result?.output} setInputRows={setInputRows} />

        {inputRows && result ? (
          <FileContents
            output={result.output}
            filtered={result.filtered}
            rows={inputRows}
          />
        ) : (
          <div>No data</div>
        )}
      </Flex>
    </>
  );
};
