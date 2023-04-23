import React from "react";
import { makeStyles } from "../../styles/theme";
import { base } from "../../styles/base";
import { ColorHex } from "../../styles/colors";
import { FontWeight } from "../../styles/fontType";

interface ModalTextAreaProps {
  value: string;
  onChange: (value: string) => void;
}

const ModalTextArea = ({ value, onChange }: ModalTextAreaProps) => {
  const { cx, classes } = useStyles();

  return (
    <textarea
      className={cx(classes.modalTextArea)}
      onChange={(e) => onChange(e.target.value)}
      value={value}
    />
  );
};

const useStyles = makeStyles()(() => ({
  modalTextArea: {
    width: "100%",
    height: base(1.5),
    backgroundColor: ColorHex.LIGHT_BLUE,
    color: ColorHex.WHITE,
    border: 0,
    resize: "none",
    fontSize: base(0.5),
    fontFamily: "Lato, sans-serif",
    fontWeight: FontWeight.LIGHT,
  },
}));

export default ModalTextArea;
