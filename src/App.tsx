// Chakra
import { Box, Flex } from "@chakra-ui/react";

// Components
import Header from "./components/Header/index";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

import SidebarDrawer from "./components/SidebarDrawer";

function App() {
  return (
    <>
      <Box h="100%" w="100%" bgColor="background.50">
        <SidebarDrawer />
        <Flex w={["100%", null, "100%", "1120px"]} mx="auto" flexDir="column">
          <Header />
        </Flex>
        <Banner />
        <Flex
          id="about-me"
          w={["100%", null, "100%", "1120px"]}
          mx="auto"
          flexDir="column"
        >
          <AboutMe />
        </Flex>
        <Flex id="exp" bgColor="background.100">
          <Flex w={["100%", null, "100%", "1120px"]} mx="auto" flexDir="column">
            <Experience />
          </Flex>
        </Flex>
        <Flex
          id="projects"
          w={["100%", null, "100%", "1120px"]}
          mx="auto"
          flexDir="column"
        >
          <Projects />
        </Flex>
      </Box>
    </>
  );
}

export default App;
