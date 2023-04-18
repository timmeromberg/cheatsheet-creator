import React from "react";
import { makeStyles } from "../../styles/theme";
import { base } from "../../styles/base";
import ModalInputLabel from "../atoms/ModalInputLabel";
import ModalInput from "../atoms/ModalInput";

interface EditShortcutModalInputProps {
  label: string;
  value: string | undefined;
  onChange: (value: string) => void;
  maxLength: number;
  className?: string;
}

const ModalLabeledInput = ({
  label,
  value,
  onChange,
  className,
}: EditShortcutModalInputProps): JSX.Element => {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(className, classes.modalLabeledInput)}>
      <ModalInputLabel
        className={cx(classes.modalLabeledInputLabel)}
        label={label}
      />
      <ModalInput value={value ? value : ""} onChange={onChange} />
    </div>
  );
};

const useStyles = makeStyles()(() => ({
  modalLabeledInput: {
    display: "flex",
    flexDirection: "row",
    gap: base(0.3),
  },
  modalLabeledInputLabel: {
    minWidth: base(4),
  },
}));

export default ModalLabeledInput;
