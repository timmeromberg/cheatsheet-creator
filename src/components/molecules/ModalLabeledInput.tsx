import React from "react";
import { makeStyles } from "../../styles/theme";
import { base } from "../../styles/base";
import ModalInputLabel from "../atoms/ModalInputLabel";
import ModalTextInput from "../atoms/ModalTextInput";
import ModalTextArea from "../atoms/ModalTextArea";

export enum ModalLabeledInputSize {
  NORMAL = "NORMAL",
  DOUBLE = "DOUBLE",
}

interface EditShortcutModalInputProps {
  label: string;
  value: string | undefined;
  onChange: (value: string) => void;
  maxLength: number;
  className?: string;
  labelClassName?: string;
  size?: ModalLabeledInputSize;
}

const ModalLabeledInput = ({
  label,
  value,
  onChange,
  className,
  labelClassName,
  size,
}: EditShortcutModalInputProps): JSX.Element => {
  const { classes, cx } = useStyles({ size });

  return (
    <div className={cx(className, classes.modalLabeledInput)}>
      <ModalInputLabel
        className={cx(labelClassName, classes.modalLabeledInputLabel)}
        label={label}
      />
      {size === ModalLabeledInputSize.DOUBLE ? (
        <ModalTextArea value={value ? value : ""} onChange={onChange} />
      ) : (
        <ModalTextInput value={value ? value : ""} onChange={onChange} />
      )}
    </div>
  );
};

const useStyles = makeStyles<{ size?: ModalLabeledInputSize }>()(
  (_, { size }) => {
    const isDoubleSize = size === ModalLabeledInputSize.DOUBLE;
    return {
      modalLabeledInput: {
        display: "flex",
        flexDirection: "row",
        gap: base(0.3),
        alignItems: "center",
      },
      modalLabeledInputLabel: {
        fontSize: isDoubleSize ? base(1.9) : undefined,
        paddingBottom: isDoubleSize ? base(0.2) : undefined,
        minWidth: base(4),
      },
    };
  }
);

export default ModalLabeledInput;
