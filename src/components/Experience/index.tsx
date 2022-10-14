import { Flex, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ExperienceDesktop from "./Desktop";
import ExperienceMobile from "./Mobile";

function Experience() {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  return (
    <Flex
      h={["720px", "585px"]}
      py={[16, 16, 16, 28]}
      px={[0, 8, 8, 0]}
      as={motion.div}
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition="ease 1s"
      viewport={{
        once: true,
      }}
    >
      {isLargerThan1024 ? <ExperienceDesktop /> : <ExperienceMobile />}
    </Flex>
  );
}

export default Experience;
