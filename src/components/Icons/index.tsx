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

import { IconType } from "react-icons/lib";

export interface IconProps {
  icon: IconType;
  link: string;
}

const icons: IconProps[] = [
  {
    icon: SiJavascript,
    link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
  },
  {
    icon: SiTypescript,
    link: "https://www.typescriptlang.org/",
  },
  {
    icon: AiFillHtml5,
    link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
  },
  {
    icon: SiCss3,
    link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
  },
  {
    icon: DiReact,
    link: "https://pt-br.reactjs.org/",
  },
  {
    icon: TbBrandNextjs,
    link: "https://nextjs.org/docs/api-reference/next/image",
  },
];

function IconSection() {
  return (
    <HStack
      mt={4}
      spacing={4}
      cursor="pointer"
      as={motion.div}
      initial={{ y: 25, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition="ease 1s"
      viewport={{ once: true }}
    >
      {icons.map((icon) => (
        <IconComponent icon={icon} />
      ))}
    </HStack>
  );
}

export default IconSection;
