import { useMemo, useState } from "react";
import { InputRow } from "./models/InputRow";
import {
  ChakraProvider,
  ColorModeScript,
  extendTheme,
  Flex,
} from "@chakra-ui/react";
import { FileContents } from "./components/FileContents";
import { Header } from "./components/Header";
import { transform } from "./processing/transform";

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
  },
});

export function App() {
  const [inputRows, setInputRows] = useState<InputRow[] | null>(null);
  const filtered = useMemo(
    () => (inputRows ? transform(inputRows) : null),
    [inputRows]
  );

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={"system"} />

      <Flex padding={2} gap={2} direction="column" maxHeight={"100vh"}>
        <Header filtered={filtered} setInputRows={setInputRows} />

        {inputRows && filtered ? (
          <FileContents filtered={filtered} rows={inputRows} />
        ) : (
          <div>No data</div>
        )}
      </Flex>
    </ChakraProvider>
  );
}
