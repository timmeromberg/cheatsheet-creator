import React from "react";
import { makeStyles } from "../../styles/theme";
import { base } from "../../styles/base";
import BrandCollaboration from "../molecules/BrandCollaboration";
import ToolTitleWithBrands from "../atoms/ToolTitleWithBrands";
import { ColorHex } from "../../styles/colors";

interface ToolHeaderProps {
  title: string;
}

const ToolHeader = ({ title }: ToolHeaderProps) => {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.titleBar)}>
      <BrandCollaboration color={ColorHex.WHITE} />
      <ToolTitleWithBrands title={title} />
    </div>
  );
};

const useStyles = makeStyles<>()(() => ({
  titleBar: {
    paddingTop: base(0.2),
    paddingBottom: base(0.2),
    display: "flex",
    flexDirection: "row",
    gap: base(0.5),
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: ColorHex.DARK_BLUE,
  },
}));

export default ToolHeader;
