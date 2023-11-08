import React, { useRef } from "react";
import { makeStyles } from "../../styles/theme";
import { ColorHex } from "../../styles/colors";
import { base } from "../../styles/base";
import { FontWeight } from "../../styles/fontType";

interface ModalInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ModalFileInput = ({ onChange }: ModalInputProps) => {
  const { cx, classes } = useStyles();
  const fileInputRef = useRef<HTMLInputElement | null>(null); // Specify the ref type

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={cx(classes.customFileInputWrapper)}>
      <input
        type="file"
        accept=".json"
        ref={fileInputRef}
        className={cx(classes.hiddenFileInput)}
        onChange={onChange}
      />
      <button
        className={cx(classes.modalInputButton)}
        onClick={handleButtonClick}
      >
        Upload File
      </button>
    </div>
  );
};

const useStyles = makeStyles()(() => ({
  hiddenFileInput: {
    display: "none",
  },
  modalInputButton: {
    backgroundColor: ColorHex.LIGHT_BLUE,
    color: ColorHex.WHITE,
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    width: base(10),
    fontSize: base(0.5),
    fontFamily: "Lato, sans-serif",
    fontWeight: FontWeight.LIGHT,
    "&:hover": {
      backgroundColor: ColorHex.AMBER,
    },
  },
  customFileInputWrapper: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default ModalFileInput;
