import { makeStyles } from "../../styles/theme";
import { ColorHex } from "../../styles/colors";
import { FontWeight } from "../../styles/fontType";
import NewLinedSpan from "./NewLinedSpan";

export interface KeyShortcutProps {
  label: KeyShortcutLabel | string;
  value: string;
  size: FontSizeType;
}

export enum KeyShortcutLabel {
  SHIFT = "S:",
  CTRL = "C:",
  ALT = "A:",
  SHIFT_CTRL = "S+A:",
  CTRL_ALT = "C+A:",
  ALT_SHIFT = "A+S:",
}

export enum FontSizeType {
  BIG = "BIG",
  NORMAL = "NORMAL",
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

function isValueEnum(value: string): value is KeyShortcutLabel {
  return (Object.values(KeyShortcutLabel) as Array<string>).includes(value);
}

const KeyShortcut = ({ label, value, size }: KeyShortcutProps): JSX.Element => {
  const isKeyOnlyShortcut = !isValueEnum(label);

  const { classes, cx } = useStyles({
    color: getLabelColor(label),
    isKeyOnlyShortcut: isKeyOnlyShortcut,
    size: size ? size : FontSizeType.NORMAL,
  });

  return (
    <div className={cx(classes.keyShortcut)}>
      <span className={cx(classes.keyShortcutLabel)}>{label}</span>
      <NewLinedSpan className={cx(classes.keyShortcutValue)} value={value} />
    </div>
  );
};

const determineFontSize = (
  isKeyOnlyShortcut: boolean,
  size: FontSizeType,
  isLabel: boolean
): string => {
  if (isLabel && isKeyOnlyShortcut && size === FontSizeType.BIG) {
    return "1vw";
  } else if (isLabel && isKeyOnlyShortcut && size === FontSizeType.NORMAL) {
    return "1vw";
  } else if (isLabel && !isKeyOnlyShortcut && size === FontSizeType.BIG) {
    return "0.9vw";
  } else if (isLabel && !isKeyOnlyShortcut && size === FontSizeType.NORMAL) {
    return "0.62vw";
  } else if (!isLabel && size === FontSizeType.BIG) {
    return "0.75vw";
  } else if (!isLabel && size === FontSizeType.NORMAL) {
    return "0.55vw";
  } else {
    return "0.33vw";
  }
};

const useStyles = makeStyles<{
  color: ColorHex;
  isKeyOnlyShortcut: boolean;
  size: FontSizeType;
}>()((_, { color, isKeyOnlyShortcut, size }) => {
  return {
    keyShortcut: {
      //overflowWrap: 'break-all',
      display: "flex",
      flexDirection: "row",
      lineHeight: "0.8",
      letterSpacing: "-0.03vw",
      color: color,
    },
    keyShortcutLabel: {
      fontSize: determineFontSize(isKeyOnlyShortcut, size, true),
      fontWeight: FontWeight.BOLD,
    },
    keyShortcutValue: {
      fontSize: determineFontSize(isKeyOnlyShortcut, size, false),
      marginTop: "0.01vw",
      fontWeight: FontWeight.LIGHT,
    },
  };
});

export default KeyShortcut;
