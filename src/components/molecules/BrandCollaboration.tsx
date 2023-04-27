import React from "react";
import { makeStyles } from "../../styles/theme";
import { base } from "../../styles/base";
import HighPriorityLogo from "../atoms/HighPriorityLogo";
import DoubleClickSoftwareLogo from "../atoms/DoubleClickSoftwareLogo";
import CollaborationIndicator from "../atoms/CollaborationIndicator";
import { ColorHex } from "../../styles/colors";

interface BrandCollaborationProps {
  color: ColorHex.WHITE | ColorHex.BLACK;
}

const BrandCollaboration = ({ color }: BrandCollaborationProps) => {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.brandCollaboration)}>
      <HighPriorityLogo color={color} />
      <CollaborationIndicator color={color} />
      <DoubleClickSoftwareLogo color={color} />
    </div>
  );
};

const useStyles = makeStyles()(() => ({
  brandCollaboration: {
    display: "flex",
    flexDirection: "row",
    gap: base(1),
    alignItems: "center",
  },
}));

export default BrandCollaboration;
