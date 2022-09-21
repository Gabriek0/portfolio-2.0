import { Box, Flex } from "@chakra-ui/react";
import Header from "./components/Header/index";
import { useSidebarDrawer } from "./contexts/SidebarDrawerContext";
import ButtonComponent from "./components/Button";

import { FiLinkedin } from "react-icons/fi";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";

function App() {
  const { onOpen, isOpen, onClose } = useSidebarDrawer();

  return (
    <Box h="100%" w="100%" bgColor="background.50">
      <Flex w={["100%", null, "100%", "1120px"]} mx="auto" flexDir="column">
        <Header />
      </Flex>
      <Banner />
      <Flex w={["100%", null, "100%", "1120px"]} mx="auto" flexDir="column">
        <AboutMe />
      </Flex>
      <Flex bgColor="background.100">
        <Flex w={["100%", null, "100%", "1120px"]} mx="auto" flexDir="column">
          <Experience />
        </Flex>
      </Flex>
    </Box>
  );
}

export default App;
