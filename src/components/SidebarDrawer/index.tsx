import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
} from "@chakra-ui/react";

import Nav from "../Header/Nav";

import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

function SidebarDrawer() {
  const { isOpen, onClose } = useSidebarDrawer();

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="right">
      <DrawerOverlay>
        <DrawerOverlay>
          <DrawerContent p={4} bgColor="gray.200">
            <DrawerCloseButton mt={6} />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <Text>Teste</Text>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </DrawerOverlay>
    </Drawer>
  );
}

export default SidebarDrawer;
