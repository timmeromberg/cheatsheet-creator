import { makeStyles } from "../../styles/theme";
import { base } from "../../styles/base";
import ModalInputLabel from "../atoms/ModalInputLabel";
import ModalTextInput from "../atoms/ModalTextInput";
import ModalTextArea from "../atoms/ModalTextArea";
import ModalCheckboxInput from "../atoms/ModalCheckboxInput.tsx";
import { KeyShortcut } from "../../domain/Cheatsheet.ts";

export enum ModalLabeledInputSize {
  NORMAL = "NORMAL",
  DOUBLE = "DOUBLE",
}

interface KeyShortcutModalInputProps {
  label: string;
  keyShortcut: KeyShortcut;
  onChangeKeyShortcut: (value: KeyShortcut) => void;
  maxLength: number;
  className?: string;
  labelClassName?: string;
  size?: ModalLabeledInputSize;
}

const KeyShortcutModalInput = ({
  label,
  keyShortcut,
  onChangeKeyShortcut,
  className,
  labelClassName,
  size,
}: KeyShortcutModalInputProps): JSX.Element => {
  const { classes, cx } = useStyles({ size });

  const onChangeValue = (value: string) => {
    const updatedKeyShortcut = { ...keyShortcut, value };
    onChangeKeyShortcut(updatedKeyShortcut);
  };

  const onChangeIsBold = (isBold: boolean) => {
    const updatedKeyShortcut = { ...keyShortcut, isBold };
    onChangeKeyShortcut(updatedKeyShortcut);
  };

  const onChangeIsSmall = (isSmall: boolean) => {
    const updatedKeyShortcut = { ...keyShortcut, isSmall };
    onChangeKeyShortcut(updatedKeyShortcut);
  };

  return (
    <div className={cx(className, classes.modalLabeledInput)}>
      <ModalInputLabel
        className={cx(labelClassName, classes.modalLabeledInputLabel)}
        label={label}
      />
      {size === ModalLabeledInputSize.DOUBLE ? (
        <ModalTextArea
          value={keyShortcut?.value ? keyShortcut.value : ""}
          onChange={onChangeValue}
        />
      ) : (
        <ModalTextInput
          value={keyShortcut?.value ? keyShortcut.value : ""}
          onChange={onChangeValue}
        />
      )}

      <ModalCheckboxInput
        tooltipText={"Smaller size"}
        value={keyShortcut.isSmall}
        onChange={onChangeIsSmall}
        onImage={"/content/tools/keyboardcheatsheet/images/Toggle_Small_On.png"}
        offImage={
          "/content/tools/keyboardcheatsheet/images/Toggle_Small_Off.png"
        }
      />
      <ModalCheckboxInput
        tooltipText={"Bold"}
        value={keyShortcut.isBold}
        onChange={onChangeIsBold}
        onImage={"/content/tools/keyboardcheatsheet/images/Toggle_Bold_On.png"}
        offImage={
          "/content/tools/keyboardcheatsheet/images/Toggle_Bold_Off.png"
        }
      />
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

export default KeyShortcutModalInput;
