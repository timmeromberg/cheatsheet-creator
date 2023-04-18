import React from "react";
import { makeStyles } from "../../styles/theme";
import { ColorHex } from "../../styles/colors";

interface DoubleClickSoftwareLogoProps {
  color: ColorHex.BLACK | ColorHex.WHITE;
}

const DoubleClickSoftwareLogo = ({ color }: DoubleClickSoftwareLogoProps) => {
  const { classes, cx } = useStyles({ color: color });

  return (
    <div className={cx(classes.doubleClickSoftwareLogo)}>
      <h3>{"<dc>"}</h3>
      <div>doubleclick.software</div>
    </div>
  );
};

const useStyles = makeStyles<{ color: ColorHex }>()((_, { color }) => ({
  doubleClickSoftwareLogo: {
    display: "flex",
    flexDirection: "column",
    color: color,
    alignItems: "center",
  },
}));

export default DoubleClickSoftwareLogo;
