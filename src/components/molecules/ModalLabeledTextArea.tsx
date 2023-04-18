import React from "react";
import ModalInputLabel from "../atoms/ModalInputLabel";
import ModalTextArea from "../atoms/ModalTextArea";
import { makeStyles } from "../../styles/theme";
import { base } from "../../styles/base";

interface ModalLabeledTextAreaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const LabeledModalTextArea = ({
  label,
  value,
  onChange,
}: ModalLabeledTextAreaProps) => {
  const { cx, classes } = useStyles();

  return (
    <div className={cx(classes.labeledModalTextArea)}>
      <ModalInputLabel
        className={cx(classes.textAreaModalInputLabel)}
        label={label}
      />
      <ModalTextArea value={value} onChange={onChange} />
    </div>
  );
};

const useStyles = makeStyles()(() => ({
  textAreaModalInputLabel: {
    minWidth: base(2),
  },
  labeledModalTextArea: {
    display: "flex",
    flexDirection: "row",
    gap: base(0.3),
  },
}));

export default LabeledModalTextArea;
