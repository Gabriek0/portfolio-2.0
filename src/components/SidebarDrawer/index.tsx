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
import { LanguageSwitcher } from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";

function SidebarDrawer() {
  const { isOpen, onClose } = useSidebarDrawer();

  const { t } = useTranslation();

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="right">
      <DrawerOverlay />
      <DrawerContent p={4} bgColor="gray.200">
        <DrawerCloseButton mt={6} color="white" />
        <DrawerHeader color="white">
          Navegação
          <LanguageSwitcher />
        </DrawerHeader>
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
              {t("header.home")}
            </Text>
          </Link>
          <Link to="about-me" smooth={true}>
            <Text
              cursor="pointer"
              _hover={{
                textDecoration: "underline",
              }}
            >
              {t("header.aboutMe")}
            </Text>
          </Link>
          <Link to="exp" smooth={true}>
            <Text
              cursor="pointer"
              _hover={{
                textDecoration: "underline",
              }}
            >
              {t("header.experience")}
            </Text>
          </Link>
          <Link to="projects" smooth={true}>
            <Text
              cursor="pointer"
              _hover={{
                textDecoration: "underline",
              }}
            >
              {t("header.projects")}
            </Text>
          </Link>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default SidebarDrawer;
