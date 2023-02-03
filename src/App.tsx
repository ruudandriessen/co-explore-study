import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Routes } from "./Routes";

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
  },
});

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  );
}
