import { Flex, Tab, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";

import { useTranslation } from "react-i18next";

function ExperienceMobile() {
  const { t } = useTranslation();

  return (
    <Tabs px={6} variant="unstyled" display="column" gap={28}>
      <Flex flexDir="column" pb={8}>
        <Text mb={8} fontSize="2xl" fontWeight="600" color="white">
          {t("experience.title")}
        </Text>
        <Flex>
          <Tab
            py={4}
            px={9}
            fontWeight="500"
            fontSize="md"
            color="white"
            _selected={{
              fontWeight: "700",
              background: "#151515",
              borderBottom: "2px solid #00D2DF",
            }}
          >
            YOUDevelop
          </Tab>
          <Tab
            py={4}
            px={9}
            fontSize="md"
            fontWeight="500"
            color="white"
            _selected={{
              fontWeight: "700",
              background: "#151515",
              borderBottom: "2px solid #00D2DF",
            }}
          >
            LocalSIG
          </Tab>
        </Flex>
      </Flex>
      <TabPanels>
        <TabPanel w="100%">
          <Text color="white" fontSize="xl" fontWeight="500" mb={6}>
            {t("experience.youDevelop.title")}
          </Text>

          <Flex color="white" justify="space-between" align="center" mb={6}>
            <Text color="blue.100" fontWeight="700">
              YOUDevelop
            </Text>
            <Text color="white" fontSize="sm" fontWeight="500">
              {t("experience.youDevelop.date.apr")} 2022 -{" "}
              {t("experience.youDevelop.date.currently")}
            </Text>
          </Flex>

          <Text color="gray.100" fontWeight="500" textAlign="justify">
            {t("experience.youDevelop.text")}
          </Text>
        </TabPanel>
        <TabPanel w="100%">
          <Text color="white" fontSize="xl" fontWeight="500" mb={6}>
            {t("experience.localsig.title")}
          </Text>

          <Flex justify="space-between" align="center" mb={6}>
            <Text color="blue.100" fontWeight="700">
              LocalSIG
            </Text>
            <Text color="white" fontSize="sm" fontWeight="500">
              {t("experience.localsig.date.feb")} 2022 -{" "}
              {t("experience.localsig.date.apr")} 2022
            </Text>
          </Flex>

          <Text color="gray.100" fontWeight="500" textAlign="justify">
            {t("experience.localsig.text")}
          </Text>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default ExperienceMobile;
