// Chakra UI
import { HStack } from "@chakra-ui/react";

// React Icons
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3 } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";

// Framer motion
import { motion } from "framer-motion";

// Components
import IconComponent from "./Icon";

function IconSection() {
  const icons = [
    SiJavascript,
    SiTypescript,
    AiFillHtml5,
    SiCss3,
    DiReact,
    TbBrandNextjs,
  ];

  return (
    <HStack
      mt={4}
      spacing={4}
      cursor="pointer"
      as={motion.div}
      initial={{ y: 25, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition="ease 1s"
    >
      {icons.map((icon) => (
        <IconComponent icon={icon} />
      ))}
    </HStack>
  );
}

export default IconSection;