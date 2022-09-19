import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import ButtonComponent from "../Button";

import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { BannerImage } from "../../icons";

function Banner() {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  return (
    <Flex
      position="relative"
      justifyContent="center"
      py={[24, 24, 24, 32]}
      px={[24, 24, 24, 32]}
      h={["400px", "400px", "500px", "600px"]}
      bgColor="background.100"
    >
      <Flex w="1120px" flexDirection="column" height="fit-content">
        <Text color="white" fontWeight="600" fontSize={["lg", "2xl"]}>
          OLÁ, EU SOU O
        </Text>
        <Text color="blue.100" fontWeight="600" fontSize={["3xl", "6xl"]}>
          GABRIEL
        </Text>
        <Text color="white" fontWeight="600" fontSize={["lg", "2xl"]}>
          DESENVOLVEDOR FRONT-END
        </Text>

        <Flex mt={12} gap={4}>
          <ButtonComponent text="LinkedIn" icon={FiLinkedin} color="blue" />
          <ButtonComponent text="Github" icon={FiGithub} color="pink" />
        </Flex>
      </Flex>

      {isLargerThan1024 && (
        <Flex position="absolute" right="0" top={-12}>
          <BannerImage />
        </Flex>
      )}
    </Flex>
  );
}

export default Banner;
