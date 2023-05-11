import React from "react";
import { makeStyles } from "../../styles/theme";
import { base } from "../../styles/base";
import { ColorHex } from "../../styles/colors";
import { m } from "../../styles/queries";

export enum ButtonType {
  NORMAL = "NORMAL",
  WARNING = "WARNING",
}

export enum ButtonSize {
  NORMAL = "NORMAL",
  BIG = "BIG",
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  size: ButtonSize;
  type?: ButtonType;
}

const Button = ({ label, onClick, size, type }: ButtonProps): JSX.Element => {
  const type_ = type ? type : ButtonType.NORMAL;
  const size_ = size ? size : ButtonType.NORMAL;
  const { classes, cx } = useStyles({ size: size_, type: type_ });

  return (
    <button className={cx(classes.button)} onClick={onClick}>
      {label}
    </button>
  );
};

const useStyles = makeStyles<{ size: ButtonSize; type: ButtonType }>()(
  (_, { size, type }) => ({
    button: {
      fontSize: base(size === ButtonSize.NORMAL ? 0.5 : 0.85),
      [m]: {
        fontSize: base(size === ButtonSize.NORMAL ? 0.5 : 0.7),
      },
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
      border:
        "5px solid " +
        (type === ButtonType.NORMAL ? ColorHex.AMBER : ColorHex.BRIGHT_RED),
      "&:hover": {
        backgroundColor:
          type === ButtonType.NORMAL ? ColorHex.AMBER : ColorHex.BRIGHT_RED,
      },
      "&:active": {
        backgroundColor: ColorHex.WHITE,
        border: "5px solid " + ColorHex.WHITE,
      },
    },
  })
);

export default Button;
