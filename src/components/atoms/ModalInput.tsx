import React from "react";
import { makeStyles } from "../../styles/theme";
import { base } from "../../styles/base";
import { ColorHex } from "../../styles/colors";
import { FontWeight } from "../../styles/fontType";

interface ModalInputProps {
  value: string;
  onChange: (value: string) => void;
}

const ModalInput = ({ value, onChange }: ModalInputProps) => {
  const { cx, classes } = useStyles();

  return (
    <input
      value={value}
      type="text"
      className={cx(classes.modalInput)}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

const useStyles = makeStyles()(() => ({
  modalInput: {
    width: "100%",
    backgroundColor: ColorHex.LIGHT_BLUE,
    color: ColorHex.WHITE,
    border: 0,
    fontSize: base(0.5),
    fontFamily: "Lato, sans-serif",
    fontWeight: FontWeight.LIGHT,
  },
}));

export default ModalInput;
