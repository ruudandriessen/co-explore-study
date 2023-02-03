import { Button, ColorModeScript, Flex, Spacer } from "@chakra-ui/react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ColorModeToggle } from "../../components/ColorModeToggle";

import { ArrowBackIcon } from "@chakra-ui/icons";

export function HeaderLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <Flex padding={4} height="100vh" direction={"column"}>
      <Flex>
        {!isHome && (
          <Button
            leftIcon={<ArrowBackIcon />}
            as={Link}
            to="/"
            variant={"ghost"}
          >
            Back home
          </Button>
        )}

        <Spacer />
        <ColorModeScript initialColorMode={"system"} />
        <ColorModeToggle />
      </Flex>
      <Outlet />
    </Flex>
  );
}
