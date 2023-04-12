import React from "react";
import { makeStyles } from "../styles/theme";
import { base } from "../styles/base";

interface ModalFormProps {
  children: JSX.Element[];
}

const ModalForm = ({ children }: ModalFormProps): JSX.Element => {
  const { classes, cx } = useStyles();
  return <div className={cx(classes.modalForm)}>{children}</div>;
};

const useStyles = makeStyles()(() => ({
  modalForm: {
    display: "flex",
    flexDirection: "column",
    gap: base(1),
  },
}));

export default ModalForm;
