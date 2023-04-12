import React from "react";
import { getStyles, makeStyles } from "../styles/theme";
import { base } from "../styles/base";
import Button from "./Button";

interface ModalButtonsProps {
  children: Button[];
}

const ModalButtons = ({ children }: ModalButtonsProps): JSX.Element => {
  const { classes, cx } = useStyles();
  return <div className={cx(classes.buttons)}>{children}</div>;
};

const useStyles = makeStyles()(() => ({
  buttons: {
    display: "flex",
    flexDirection: "row",
    gap: base(1),
  },
}));

export default ModalButtons;
