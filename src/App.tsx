import { useState } from "react";
import { Uploader } from "./components/Uploader";
import { InputRow } from "./models/InputRow";
import { loadFile } from "./processing/loadFile";
import {
  Button,
  ChakraProvider,
  ColorModeScript,
  extendTheme,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import { FileContents } from "./components/FileContents";
import { ColorModeToggle } from "./components/ColorModeToggle";

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
  },
});

export function App() {
  const [inputRows, setInputRows] = useState<InputRow[] | null>(null);
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={"system"} />

      <Flex padding={2} gap={2} direction="column">
        <Flex padding={2} alignItems="center" gap={2}>
          <ColorModeToggle />
          <Uploader
            onFileSelected={async (files) => {
              setInputRows(await loadFile(files[0]));
            }}
          />
        </Flex>

        {inputRows ? <FileContents rows={inputRows} /> : <div>No data</div>}
      </Flex>
    </ChakraProvider>
  );
}
