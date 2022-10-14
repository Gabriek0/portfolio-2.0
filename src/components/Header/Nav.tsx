import {
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

import { RiMenuLine } from "react-icons/ri";

import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

import { Link } from "react-scroll";

import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../LanguageSwitcher";

function Nav() {
  const { onOpen } = useSidebarDrawer();
  const { t } = useTranslation();

  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  console.log(navigator.language);

  return (
    <Flex color="gray.100">
      {isLargerThan1024 ? (
        <HStack spacing={16}>
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
          <LanguageSwitcher />
        </HStack>
      ) : (
        <>
          <IconButton
            aria-label="Open navigation" // Accessibility
            variant="unstyled"
            fontSize={24}
            onClick={onOpen}
            icon={<Icon as={RiMenuLine} />}
          />
        </>
      )}
    </Flex>
  );
}

export default Nav;
