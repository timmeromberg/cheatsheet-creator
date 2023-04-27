import React from "react";
import { makeStyles } from "../../styles/theme";
import { ColorHex } from "../../styles/colors";
import { FontWeight } from "../../styles/fontType";

interface ToolTitleWithBrandsProps {
  title: string;
}

const ToolTitleWithBrands = ({ title }: ToolTitleWithBrandsProps) => {
  const { classes, cx } = useStyles();

  return (
    <div>
      <h4 className={cx(classes.toolTitleWithBrandsTitle)}>{title}</h4>
      <span className={cx(classes.toolTitleWithBrandsBrands)}>
        <span className={cx(classes.toolTitleBetweenText)}>by </span>
        <span className={cx(classes.toolTitleWithBrandsBrand)}>
          High Priority
        </span>{" "}
        <span className={cx(classes.toolTitleBetweenText)}>& </span>
        <span className={cx(classes.toolTitleWithBrandsBrand)}>
          doubleclick.software
        </span>
      </span>
    </div>
  );
};

const useStyles = makeStyles()(() => ({
  toolTitleWithBrandsTitle: {
    color: ColorHex.WHITE,
  },
  toolTitleWithBrandsBrands: {
    fontWeight: FontWeight.LIGHT,
    textAlign: "right",
    color: ColorHex.WHITE,
    marginLeft: "auto",
  },
  toolTitleBetweenText: {
    textAlign: "right",
    color: ColorHex.LIGHT_GRAY,
    marginLeft: "auto",
  },
  toolTitleWithBrandsBrand: {
    color: ColorHex.AMBER,
  },
}));

export default ToolTitleWithBrands;
