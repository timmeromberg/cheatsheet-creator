import React from "react";
import { makeStyles } from "../../styles/theme";
import { base } from "../../styles/base";
import { ColorHex } from "../../styles/colors";

export interface ButtonProps {
  label: string;
  onClick: any;
  size: ButtonSize;
}

export enum ButtonSize {
  NORMAL = "NORMAL",
  BIG = "BIG",
}

const Button = ({ label, onClick, size }: ButtonProps): JSX.Element => {
  const { classes, cx } = useStyles({ size: size });

  return (
    <button className={cx(classes.button)} onClick={onClick}>
      {label}
    </button>
  );
};

const useStyles = makeStyles<{ size: ButtonSize }>()((_, { size }) => ({
  button: {
    fontSize: base(size === ButtonSize.NORMAL ? 0.5 : 0.85),
    fontWeight: 700,
    cursor: "pointer",
    minWidth: base(3),
    minHeight: base(1.5),
    height: "100%",
    padding:
      size === ButtonSize.NORMAL
        ? `${base(0.25)} ${base(0.5)}`
        : `${base(0.5)} ${base(0.75)}`,
    backgroundColor: ColorHex.DARK_BLUE,
    color: ColorHex.WHITE,
    border: "5px solid " + ColorHex.AMBER,
    "&:hover": {
      backgroundColor: ColorHex.AMBER,
    },
    "&:active": {
      backgroundColor: ColorHex.WHITE,
      border: "5px solid " + ColorHex.WHITE,
    },
  },
}));

export default Button;
