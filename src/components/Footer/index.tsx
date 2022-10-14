import { Flex, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex
      w="100%"
      bgColor="background.100"
      py={8}
      alignItems="center"
      justifyContent="center"
    >
      <Text color="white">@ 2022 - Gabriel Henrique</Text>
    </Flex>
  );
}

export default Footer;
