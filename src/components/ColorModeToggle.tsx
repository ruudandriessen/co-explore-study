import { IconButton, useColorMode } from "@chakra-ui/react";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      onClick={toggleColorMode}
      variant="ghost"
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      aria-label="Toggle color mode"
    />
  );
}
