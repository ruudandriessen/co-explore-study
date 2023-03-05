import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { Profile } from "./Profile";

export function Home() {
  return (
    <Flex
      height="100vh"
      direction={"column"}
      padding={4}
      gap={4}
      alignItems="center"
      justifyContent="center"
    >
      <Profile />
      <Flex gap={4}>
        <Button as={Link} to="/data" variant="ghost">
          Data processing
        </Button>
        <Button as={Link} to="/survey" variant="ghost">
          Online Survey
        </Button>
        <Button as={Link} to="/papers" variant="ghost">
          Papers
        </Button>
      </Flex>
      <Flex>
        <Button
          as={"a"}
          target="_blank"
          href="https://github.com/ruudandriessen/co-explore-study"
        >
          Visit the Git repository
        </Button>
      </Flex>
    </Flex>
  );
}
