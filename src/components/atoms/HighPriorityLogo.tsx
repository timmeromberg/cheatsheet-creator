import React from "react";
import { makeStyles } from "../../styles/theme";
import { base } from "../../styles/base";
import { ColorHex } from "../../styles/colors";

interface HighPriorityLogoProps {
  color: ColorHex.WHITE | ColorHex.BLACK;
}

const HighPriorityLogo = ({ color }: HighPriorityLogoProps) => {
  const { classes, cx } = useStyles(color);

  const src =
    color === ColorHex.WHITE
      ? "/images/HP_amber2.png"
      : "/images/HP_black2.png";

  return (
    <img
      onClick={() => console.log("A")}
      className={cx(classes.highPriorityLogo)}
      alt="High Priority Logo"
      src={src}
    />
  );
};

const useStyles = makeStyles<>()(() => ({
  highPriorityLogo: {
    maxHeight: base(2),
    padding: base(0.1),
  },
}));

export default HighPriorityLogo;
