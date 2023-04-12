import React from "react";
import { makeStyles } from "../styles/theme";
import { base } from "../styles/base";

interface EditShortcutModalInputProps {
  label: string;
  value: string | undefined;
  setValue: (value: string) => void;
  maxLength: number;
}

const EditShortcutModalInput = ({
  label,
  value,
  setValue,
  maxLength,
}: EditShortcutModalInputProps): JSX.Element => {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.editShortcutModalInput)}>
      <span className={cx(classes.editShortcutModalInputLabel)}>{label}</span>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        maxLength={maxLength}
      />
    </div>
  );
};

const useStyles = makeStyles()(() => ({
  editShortcutModalInput: {
    display: "flex",
    flexDirection: "row",
    gap: base(1),
  },
  editShortcutModalInputLabel: {
    width: base(3),
  },
}));

export default EditShortcutModalInput;
