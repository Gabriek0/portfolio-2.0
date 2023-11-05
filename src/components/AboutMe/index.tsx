// Chakra UI
import { Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";

// Components
import ButtonComponent from "../Button";
import IconSection from "../Icons";

// React Icons
import { AiOutlineCloudDownload, AiOutlineMail } from "react-icons/ai";

// Images
import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";

function AboutMe() {
  const { t } = useTranslation();

  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  return (
    <Flex my={[12, 28]} gap={28} justify="space-between">
      {isLargerThan1024 && (
        <Flex
          as={motion.div}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition="ease 1s"
          viewport={{
            once: true,
          }}
        >
          <Image
            h="367px"
            w="367px"
            src="https://media.licdn.com/dms/image/D4D03AQGQlM-IM5ZIhw/profile-displayphoto-shrink_800_800/0/1693020067040?e=1704931200&v=beta&t=oAhbROAltul6w-A-8C3yisQrs9Iktfb65jw0fzYC-n4"
          />
        </Flex>
      )}
      <Flex
        flexDir="column"
        w={["100%", "100%", "100%", "500px"]}
        gap={4}
        px={[8, 8, 24, 24, 0]}
        as={motion.div}
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition="ease 1s"
        viewport={{
          once: true,
        }}
      >
        <Text mb={4} color="white" fontWeight="bold" fontSize={["2xl", "xl"]}>
          {t("aboutMe.title")}
        </Text>

        <Text fontWeight="500" fontSize="xl" color="white">
          {t("aboutMe.location")}
        </Text>

        <Text
          color="gray.100"
          fontWeight="500"
          fontSize={18}
          lineHeight={8}
          textAlign="justify"
        >
          {t("aboutMe.text")}
        </Text>

        <IconSection />

        <Flex mt={12} gap={4}>
          <ButtonComponent
            icon={AiOutlineCloudDownload}
            text={t("aboutMe.buttonCv")}
            color="pink"
            linkTo="/public/Curriculum.pdf"
            download
          />
          <ButtonComponent
            linkTo="mailto:gabriel.sanches170@gmail.com"
            icon={AiOutlineMail}
            text="E-mail"
            color="blue"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default AboutMe;
