import React from "react";
import { makeStyles } from "../../styles/theme";
import { base } from "../../styles/base";

interface ModalFormProps {
  children: JSX.Element[];
  className?: string;
}

const ModalForm = ({ children, className }: ModalFormProps): JSX.Element => {
  const { classes, cx } = useStyles();
  return <div className={cx(classes.modalForm, className)}>{children}</div>;
};

const useStyles = makeStyles()(() => ({
  modalForm: {
    display: "flex",
    flexDirection: "column",
    gap: base(1),
  },
}));

export default ModalForm;
