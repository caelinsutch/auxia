import React from "react";
import {
  Icon as ChakraIcon,
  IconProps as ChakraIconProps,
} from "@chakra-ui/react";
import icons from "./Assets";

export type IllustrationName = keyof typeof icons;

export type IllustrationProps = {
  name: IllustrationName;
  size?: number | string;
} & ChakraIconProps;

const Illustration: React.FC<IllustrationProps> = ({ name, size, ...props }) => {
  const SVG = icons[name];

  return <ChakraIcon as={SVG} width={size} height={size} {...props} />;
};

export default Illustration;
