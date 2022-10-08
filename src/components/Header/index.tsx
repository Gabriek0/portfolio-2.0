import { Container, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import SidebarDrawer from "../SidebarDrawer";
import Nav from "./Nav";

function Header() {
  return (
    <Flex
      w="100%"
      py="6"
      px={[8, 8, 10, 0]}
      justifyContent="space-between"
      alignItems="center"
      borderBottom="2px solid #151515"
    >
      <Text color="blue.100" fontWeight="600" fontSize={[24, 32]}>
        Portfólio
      </Text>
      <Nav />
    </Flex>
  );
}

export default Header;
