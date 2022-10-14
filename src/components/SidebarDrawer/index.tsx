import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
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
            <Text
              cursor="pointer"
              _hover={{
                textDecoration: "underline",
              }}
            >
              Home
            </Text>
          </Link>
          <Link to="about-me" smooth={true}>
            <Text
              cursor="pointer"
              _hover={{
                textDecoration: "underline",
              }}
            >
              Sobre mim
            </Text>
          </Link>
          <Link to="exp" smooth={true}>
            <Text
              cursor="pointer"
              _hover={{
                textDecoration: "underline",
              }}
            >
              Experiência
            </Text>
          </Link>
          <Link to="projects" smooth={true}>
            <Text
              cursor="pointer"
              _hover={{
                textDecoration: "underline",
              }}
            >
              Projetos
            </Text>
          </Link>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default SidebarDrawer;
