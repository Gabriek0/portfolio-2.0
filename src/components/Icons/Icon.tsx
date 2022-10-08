import { Icon, Link } from "@chakra-ui/react";

// Types
import { IconType } from "react-icons";

type IconComponentProps = {
  icon: IconType;
};

function IconComponent({ icon }: IconComponentProps) {
  return (
    <Link>
      <Icon
        as={icon}
        height="28px"
        width="28px"
        color="blue.100"
        _hover={{
          transform: "scale(1.2)",
        }}
        transition="ease .2s"
      />
    </Link>
  );
}

export default IconComponent;
