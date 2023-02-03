import { Button, Flex, Link as ChakraLink, Text } from "@chakra-ui/react";

import { ChatIcon } from "@chakra-ui/icons";

export function Profile() {
  return (
    <Flex gap={6} paddingBottom={20} direction="column">
      {/* <Image
        borderRadius="full"
        src="https://research.tue.nl/files-asset/114198509/IMG_7074.JPG?w=320&f=webp"
        alt="Ye Xinhui"
      /> */}
      <Flex gap={4}>
        <Text fontSize={"6xl"} color="blue.500">
          Hi!
        </Text>
        <Text fontSize={"6xl"}>I'm Xinhui Ye!</Text>
      </Flex>
      <Button
        as={ChakraLink}
        href="https://linkedin.com/in/xinhui-kristin-ye-673a63150"
        target="_blank"
        variant="ghost"
        leftIcon={<ChatIcon />}
      >
        Talk to meeee
      </Button>
    </Flex>
  );
}
