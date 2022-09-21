import { Flex, useMediaQuery } from "@chakra-ui/react";
import ExperienceDesktop from "./Desktop";
import ExperienceMobile from "./Mobile";

function Experience() {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  return (
    <Flex h={"585px"} py={[16, 16, 16, 28]} px={[0, 8, 8, 0]}>
      {isLargerThan1024 ? <ExperienceDesktop /> : <ExperienceMobile />}
    </Flex>
  );
}

export default Experience;
