import { makeStyles } from "../../styles/theme";
import { ColorHex } from "../../styles/colors";
import { base } from "../../styles/base";
import { FontWeight } from "../../styles/fontType";

export interface KeyShortcutProps {
  label: KeyShortcutLabel | string;
  value: string;
}

export enum KeyShortcutLabel {
  SHIFT = "S:",
  CTRL = "C:",
  ALT = "A:",
  SHIFT_CTRL = "S+A:",
  CTRL_ALT = "C+A:",
  ALT_SHIFT = "A+S:",
}

enum FontSizeType {
  BIG = "BIG",
  SMALL = "SMALL",
}

const getLabelColor = (label: KeyShortcutLabel | string): ColorHex => {
  switch (label) {
    case KeyShortcutLabel.SHIFT:
      return ColorHex.MAROON;
    case KeyShortcutLabel.CTRL:
      return ColorHex.LIME_GREEN;
    case KeyShortcutLabel.ALT:
      return ColorHex.NAVY_BLUE;
    case KeyShortcutLabel.SHIFT_CTRL:
      return ColorHex.DIM_GRAY;
    case KeyShortcutLabel.CTRL_ALT:
      return ColorHex.DIM_GRAY;
    case KeyShortcutLabel.ALT_SHIFT:
      return ColorHex.DIM_GRAY;
    default:
      return ColorHex.DARK_GRAY;
  }
};

function isValueEnum(value: any): value is KeyShortcutLabel {
  return Object.values(KeyShortcutLabel).includes(value);
}

const KeyShortcut = ({ label, value }: KeyShortcutProps): JSX.Element => {
  const isNotKeyOnly = isValueEnum(label);

  const { classes, cx } = useStyles({
    color: getLabelColor(label),
    fontSizeType: isNotKeyOnly ? FontSizeType.SMALL : FontSizeType.BIG,
  });

  return (
    <div className={cx(classes.keyShortcut)}>
      <span className={cx(classes.keyShortcutLabel)}>{label}</span>
      <span className={cx(classes.keyShortcutValue)}>{value}</span>
    </div>
  );
};

const useStyles = makeStyles<{
  color: ColorHex;
  fontSizeType: FontSizeType;
}>()((theme, { color, fontSizeType }) => {
  return {
    keyShortcut: {
      lineHeight: "0.16vw",
      overflowWrap: "break-all",
      letterSpacing: "-0.03vw",
      color: color,
    },
    keyShortcutLabel: {
      fontSize: fontSizeType === FontSizeType.SMALL ? "0.55vw" : "1vw",
      fontWeight: FontWeight.BOLD,
    },
    keyShortcutValue: {
      fontSize: "0.5vw",
      fontWeight: FontWeight.LIGHT,
    },
  };
});

export default KeyShortcut;
