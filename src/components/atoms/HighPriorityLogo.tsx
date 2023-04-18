import React from "react";
import { makeStyles } from "../../styles/theme";
import { base } from "../../styles/base";
import { ColorHex } from "../../styles/colors";

interface HighPriorityLogoProps {
  color: ColorHex.WHITE | ColorHex.BLACK;
}

const HighPriorityLogo = ({ color }: HighPriorityLogoProps) => {
  const { classes, cx } = useStyles(color);

  return (
    <img
      className={cx(classes.highPriorityLogo)}
      alt="High Priority Logo"
      src={
        "/images/High-Priority-Game-Art-Logo-Name-Horz-AlphaWhite-2400x680-1-640x181.png"
      }
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
