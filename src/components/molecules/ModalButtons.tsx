import React from "react";
import { makeStyles } from "../../styles/theme";
import { base } from "../../styles/base";

interface ModalButtonsProps {
  children: JSX.Element | JSX.Element[];
}

const ModalButtons = ({ children }: ModalButtonsProps): JSX.Element => {
  const { classes, cx } = useStyles();
  return <div className={cx(classes.buttons)}>{children}</div>;
};

const useStyles = makeStyles()(() => ({
  buttons: {
    paddingTop: base(0.5),
    display: "flex",
    flexDirection: "row",
    gap: base(1),
    justifyContent: "center",
  },
}));

export default ModalButtons;
