import React from "react";
import { makeStyles } from "../styles/theme";
import { base } from "../styles/base";

export interface ButtonProps {
  label: string;
  onClick: any;
}

const Button = ({ label, onClick }: ButtonProps): JSX.Element => {
  const { classes, cx } = useStyles();

  return (
    <button className={cx(classes.button)} onClick={onClick}>
      {label}
    </button>
  );
};

const useStyles = makeStyles()(() => ({
  button: {
    fontSize: base(0.5),
    fontWeight: 700,
    border: 0,
    cursor: "pointer",
    minWidth: base(4),
    minHeight: base(2),
    height: "100%",
    padding: `${base(0.25)} ${base(0.5)} `,
  },
}));

export default Button;
