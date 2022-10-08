import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Link,
  Text,
} from "@chakra-ui/react";

import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

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
          <Link>Home</Link>
          <Link>Sobre mim</Link>
          <Link>Experiência</Link>
          <Link>Projetos</Link>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default SidebarDrawer;
