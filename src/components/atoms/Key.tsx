import { makeStyles } from "../../styles/theme";
import { ColorHex } from "../../styles/colors";
import {
  LayoutKey,
  LayoutKeyHeight,
  LayoutKeyWidth,
} from "../../domain/KeyboardLayout";
import {
  Cheatsheet,
  createEmptyKeyShortcut,
  createEmptyKeyShortcuts,
  KeyShortcuts,
} from "../../domain/Cheatsheet";
import KeyShortcut, { FontSizeType, KeyShortcutLabel } from "./KeyShortcut";
import { ModalKey, useModalContext } from "../../hooks/ModalProvider";
import { AMOUNT_OF_KEY_SPACE } from "../../pages/CheatsheetPage";
import { KeyShortcut as KeyShortcutObject } from "../../domain/Cheatsheet.ts";

export interface KeyProps {
  layoutKey: LayoutKey;
  keyShortcuts?: KeyShortcuts;
  cheatsheet: Cheatsheet;
  saveCheatsheet: (cheatsheet: Cheatsheet) => void;
}

const Key = ({
  layoutKey,
  keyShortcuts,
  cheatsheet,
  saveCheatsheet,
}: KeyProps): JSX.Element => {
  const { openModal, closeModal } = useModalContext();

  const width = layoutKey.width ? layoutKey.width : LayoutKeyWidth.NORMAL;
  const height = layoutKey.height ? layoutKey.height : LayoutKeyHeight.NORMAL;

  const { classes, cx } = useStyles({
    grow: layoutKey.grow,
    width: width,
    height: height,
  });

  const key = ModalKey.EDIT_SHORTCUTS_MODAL;

  const onSaveKeyShortcuts = (
    id: string,
    keyOnly: KeyShortcutObject,
    shift: KeyShortcutObject,
    shiftCtrl: KeyShortcutObject,
    ctrl: KeyShortcutObject,
    ctrlAlt: KeyShortcutObject,
    alt: KeyShortcutObject,
    altShift: KeyShortcutObject
  ) => {
    const updatedKeyShortcut: KeyShortcuts = {
      id: id,
      keyOnly: keyOnly,
      shift: shift,
      shiftCtrl: shiftCtrl,
      ctrl: ctrl,
      ctrlAlt: ctrlAlt,
      alt: alt,
      altShift: altShift,
    };

    // Find the index of the KeyShortcuts object to update
    const index = cheatsheet.keyShortcuts.findIndex(
      (shortcut) => shortcut.id === keyShortcuts?.id
    );
    const keyShortcutsList = [...cheatsheet.keyShortcuts];

    if (index >= 0) {
      keyShortcutsList[index] = { ...updatedKeyShortcut };
    } else {
      keyShortcutsList.push({ ...updatedKeyShortcut });
    }

    const newCheatsheet: Cheatsheet = {
      keyShortcuts: keyShortcutsList,
      description: cheatsheet.description,
    };

    closeModal(key);
    saveCheatsheet(newCheatsheet);
  };

  // const hasTwoKeyShortcut =
  //   keyShortcuts?.shift || keyShortcuts?.alt || keyShortcuts?.ctrl;

  const determineActiveAmountOfShortcutKeys = (): number => {
    let active = 1; // always counting key only as active
    //if (hasTwoKeyShortcut) active = active + 1;
    if (keyShortcuts?.alt.value) active++;
    if (keyShortcuts?.shift.value) active++;
    if (keyShortcuts?.ctrl.value) active++;
    if (keyShortcuts?.altShift.value) active++;
    if (keyShortcuts?.ctrlAlt.value) active++;
    if (keyShortcuts?.shiftCtrl.value) active++;
    return active;
  };

  const fontSizeType =
    determineActiveAmountOfShortcutKeys() <= 4
      ? FontSizeType.BIG
      : FontSizeType.NORMAL;

  const data = {
    label: layoutKey.label,
    keyShortcuts: keyShortcuts
      ? keyShortcuts
      : createEmptyKeyShortcuts(layoutKey.id),
  };

  return (
    <div tabIndex={0} className={cx(classes.keyContainer)}>
      <div
        tabIndex={0}
        onClick={() => openModal(key, data, onSaveKeyShortcuts)}
        className={cx(classes.key, "key")}
      >
        <KeyShortcut
          label={layoutKey.label}
          keyShortcut={
            keyShortcuts?.keyOnly.value
              ? keyShortcuts.keyOnly
              : createEmptyKeyShortcut()
          }
          size={fontSizeType}
        />
        {keyShortcuts && (
          <div className={cx(classes.keyShortcuts)}>
            {keyShortcuts.shift.value && (
              <KeyShortcut
                label={KeyShortcutLabel.SHIFT}
                keyShortcut={keyShortcuts.shift}
                size={fontSizeType}
              />
            )}

            {keyShortcuts.shiftCtrl.value && (
              <KeyShortcut
                label={KeyShortcutLabel.SHIFT_CTRL}
                keyShortcut={keyShortcuts.shiftCtrl}
                size={fontSizeType}
              />
            )}

            {keyShortcuts.ctrl.value && (
              <KeyShortcut
                label={KeyShortcutLabel.CTRL}
                keyShortcut={keyShortcuts.ctrl}
                size={fontSizeType}
              />
            )}

            {keyShortcuts.ctrlAlt.value && (
              <KeyShortcut
                label={KeyShortcutLabel.CTRL_ALT}
                keyShortcut={keyShortcuts.ctrlAlt}
                size={fontSizeType}
              />
            )}

            {keyShortcuts.alt.value && (
              <KeyShortcut
                label={KeyShortcutLabel.ALT}
                keyShortcut={keyShortcuts.alt}
                size={fontSizeType}
              />
            )}

            {keyShortcuts.altShift.value && (
              <KeyShortcut
                label={KeyShortcutLabel.ALT_SHIFT}
                keyShortcut={keyShortcuts.altShift}
                size={fontSizeType}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const useStyles = makeStyles<{
  grow?: number;
  width: LayoutKeyWidth;
  height: LayoutKeyHeight;
}>()((_, { grow, width, height }) => ({
  keyContainer: {
    flexGrow: grow,
    width:
      100 / (AMOUNT_OF_KEY_SPACE / (width === LayoutKeyWidth.DOUBLE ? 2 : 1)) +
      "vw",
    "&:hover:not(:focus)": {
      zIndex: 1,
    },
  },
  key: {
    paddingTop: "0.05vw",
    paddingLeft: "0.01vw",
    flexGrow: grow,
    height:
      100 /
        (AMOUNT_OF_KEY_SPACE / (height === LayoutKeyHeight.DOUBLE ? 2.03 : 1)) +
      "vw",
    backgroundColor: ColorHex.WHITE,
    border: "0.12vw solid " + ColorHex.GUNMETAL,
    borderRadius: "0.3vw",
    marginTop: "0.06vw",
    marginBottom: "0.06vw",
    marginLeft: "0.12vw",
    position: height === LayoutKeyHeight.DOUBLE ? "absolute" : undefined,
    // This is kind of hacky, it will only work in certain cases.
    // Currently, it works, but it might not for other future layouts.
    width:
      height === LayoutKeyHeight.DOUBLE
        ? 100 /
            (AMOUNT_OF_KEY_SPACE /
              (width === LayoutKeyWidth.DOUBLE ? 1.94 : 0.97)) +
          "vw"
        : undefined,

    boxShadow: "rgba(0, 0, 0, 0.15) 0px -0.22vw 0.22vw 0px inset",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: ColorHex.AMBER,
      color: ColorHex.WHITE + " !important",
      transform: "scale(1.3)",
    },
  },
  keyShortcuts: {
    display: "flex",
    flexDirection: "column",
  },
}));

export default Key;
