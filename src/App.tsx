import { Box, Flex } from "@chakra-ui/react";
import Header from "./components/Header/index";
import { useSidebarDrawer } from "./contexts/SidebarDrawerContext";
import ButtonComponent from "./components/Button";

import { FiLinkedin } from "react-icons/fi";
import Banner from "./components/Banner";

function App() {
  const { onOpen, isOpen, onClose } = useSidebarDrawer();

  return (
    <Box h="100vh" w="100vw" bgColor="background.50">
      <Flex w={["100%", null, "100%", "1120px"]} mx="auto" flexDir="column">
        <Header />
      </Flex>
      <Banner />
    </Box>
  );
}

export default App;
