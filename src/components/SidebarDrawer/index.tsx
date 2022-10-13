import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";

import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

import { Link } from "react-scroll";

function SidebarDrawer() {
  const { isOpen, onClose } = useSidebarDrawer();

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="right">
      <DrawerOverlay />
      <DrawerContent p={4} bgColor="gray.200">
        <DrawerCloseButton mt={6} color="white" />
        <DrawerHeader color="white">Navegação</DrawerHeader>
        <DrawerBody
          color="white"
          display="flex"
          flexDir="column"
          gap={4}
          mt={6}
        >
          <Link to="home" smooth={true}>
            Home
          </Link>
          <Link to="about-me" smooth={true}>
            Sobre mim
          </Link>
          <Link to="exp" smooth={true}>
            Experiência
          </Link>
          <Link to="projects" smooth={true}>
            Projetos
          </Link>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default SidebarDrawer;
