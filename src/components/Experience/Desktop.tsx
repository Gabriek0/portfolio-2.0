import {
  Box,
  Flex,
  Tab,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

import { useTranslation } from "react-i18next";

function ExperienceDesktop() {
  const { t } = useTranslation();

  return (
    <Tabs display="flex" width="100%" variant="unstyled" gap={36}>
      <Flex flexDir="column">
        <Text mb={8} fontSize="2xl" fontWeight="600" color="white">
          {t("experience.title")}
        </Text>
        <Tab
          w={48}
          py={4}
          px={9}
          fontWeight="500"
          fontSize="md"
          color="white"
          _selected={{
            background: "#151515",
            borderLeft: "2px solid #00D2DF",
            fontWeight: "700",
          }}
        >
          YOUDevelop
        </Tab>
        <Tab
          w={48}
          py={4}
          px={9}
          fontSize="md"
          fontWeight="500"
          color="white"
          _selected={{
            background: "#151515",
            borderLeft: "2px solid #00D2DF",
            fontWeight: "700",
          }}
        >
          LocalSIG
        </Tab>
      </Flex>
      <TabPanels>
        <TabPanel w="630px">
          <Box>
            <Flex color="white" justify="space-between" align="center" mb={6}>
              <Text fontSize="xl" fontWeight="500">
                {t("experience.youDevelop.title")}
              </Text>
              <Text fontSize="sm" fontWeight="500">
                {t("experience.youDevelop.date.apr")} 2022 -{" "}
                {t("experience.youDevelop.date.currently")} 2023
              </Text>
            </Flex>
            <Text color="blue.100" mb={6} fontWeight="700">
              YOUDevelop
            </Text>

            <Text color="gray.100" fontWeight="500" textAlign="justify">
              {t("experience.youDevelop.text")}
            </Text>
          </Box>
        </TabPanel>
        <TabPanel w="630px">
          <Box>
            <Flex color="white" justify="space-between" align="center" mb={6}>
              <Text fontSize="xl" fontWeight="500">
                {t("experience.localsig.title")}
              </Text>
              <Text fontSize="sm" fontWeight="500">
                {t("experience.localsig.date.feb")} 2022 -{" "}
                {t("experience.localsig.date.apr")} 2022
              </Text>
            </Flex>
            <Text color="blue.100" mb={6} fontWeight="700">
              LocalSIG
            </Text>

            <Text color="gray.100" fontWeight="500" textAlign="justify">
              {t("experience.localsig.text")}
            </Text>
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default ExperienceDesktop;
