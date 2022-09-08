import { Box, Button, Flex } from "@chakra-ui/react";
import Header from "./components/Header/index";
import SidebarDrawer from "./components/SidebarDrawer";

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
} from "@chakra-ui/react";
import { useSidebarDrawer } from "./contexts/SidebarDrawerContext";

function App() {
  const { onOpen, isOpen, onClose } = useSidebarDrawer();

  return (
    <Box h="100vh" w="100vw" bgColor="background">
      <Flex w={["100%", null, "100%", "1120px"]} mx="auto">
        <Header />
      </Flex>
    </Box>
  );
}

export default App;
