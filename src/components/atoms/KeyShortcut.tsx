import { makeStyles } from "../../styles/theme";
import { ColorHex } from "../../styles/colors";
import { FontWeight } from "../../styles/fontType";
import NewLinedSpan from "./NewLinedSpan";
import { KeyShortcut as KeyShortcutObject } from "../../domain/Cheatsheet.ts";

export interface KeyShortcutProps {
  label: KeyShortcutLabel | string;
  keyShortcut: KeyShortcutObject;
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

const KeyShortcut = ({
  label,
  keyShortcut,
  size,
}: KeyShortcutProps): JSX.Element => {
  const isKeyOnlyShortcut = !isValueEnum(label);

  if (keyShortcut.isSmall) {
    console.log("isKeyOnlyShortcut", keyShortcut.isSmall);
  }

  const { classes, cx } = useStyles({
    color: getLabelColor(label),
    isKeyOnlyShortcut: isKeyOnlyShortcut,
    size: size ? size : FontSizeType.NORMAL,
    isBold: keyShortcut.isBold,
    isSmall: keyShortcut.isSmall,
  });

  return (
    <div className={cx(classes.keyShortcut)}>
      <span className={cx(classes.keyShortcutLabel)}>{label}</span>
      <NewLinedSpan
        className={cx(classes.keyShortcutValue)}
        value={keyShortcut.value}
      />
    </div>
  );
};

const determineFontSize = (size: FontSizeType): string => {
  if (size === FontSizeType.BIG) {
    return "0.75vw";
  } else if (size === FontSizeType.NORMAL) {
    return "0.55vw";
  } else {
    return "0.33vw";
  }
};

const determineLabelFontSize = (
  isKeyOnlyShortcut: boolean,
  size: FontSizeType
): string => {
  if (isKeyOnlyShortcut && size === FontSizeType.BIG) {
    return "1vw";
  } else if (isKeyOnlyShortcut && size === FontSizeType.NORMAL) {
    return "1vw";
  } else if (!isKeyOnlyShortcut && size === FontSizeType.BIG) {
    return "0.75vw";
  } else if (!isKeyOnlyShortcut && size === FontSizeType.NORMAL) {
    return "0.55vw";
  } else {
    return "0.33vw";
  }
};

const useStyles = makeStyles<{
  color: ColorHex;
  isKeyOnlyShortcut: boolean;
  isBold?: boolean;
  isSmall?: boolean;
  size: FontSizeType;
}>()((_, { color, isKeyOnlyShortcut, size, isBold, isSmall }) => {
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
      fontSize: determineLabelFontSize(
        isKeyOnlyShortcut,
        isSmall ? FontSizeType.NORMAL : size
      ),
      fontWeight: FontWeight.BOLD,
    },
    keyShortcutValue: {
      fontSize: determineFontSize(isSmall ? FontSizeType.NORMAL : size),
      marginTop: "0.01vw",
      fontWeight: isBold ? FontWeight.BOLD : FontWeight.LIGHT,
    },
  };
});

export default KeyShortcut;
