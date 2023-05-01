import { makeStyles } from "../../styles/theme";
import { ColorHex } from "../../styles/colors";
import { LayoutKey } from "../../domain/KeyboardLayout";
import {
  Cheatsheet,
  createEmptyKeyShortcuts,
  KeyShortcuts,
} from "../../domain/Cheatsheet";
import KeyShortcut, { FontSizeType, KeyShortcutLabel } from "./KeyShortcut";
import React from "react";
import { ModalKey, useModalContext } from "../../hooks/ModalProvider";
import { AMOUNT_OF_KEY_SPACE } from "../../pages/CheatsheetPage";

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

  const { classes, cx } = useStyles({
    grow: layoutKey.grow,
    size: layoutKey.size,
  });

  const key = ModalKey.EDIT_SHORTCUTS_MODAL;

  const onSaveKeyShortcuts = (
    id: string,
    keyOnly: string,
    shift: string,
    shiftCtrl: string,
    ctrl: string,
    ctrlAlt: string,
    alt: string,
    altShift: string
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

  const hasTwoKeyShortcut =
    keyShortcuts?.shift || keyShortcuts?.alt || keyShortcuts?.ctrl;

  const determineActiveAmountOfShortcutKeys = (): number => {
    let active = 1; // always counting key only as active
    if (hasTwoKeyShortcut) active = active + 3;
    if (keyShortcuts?.altShift) active++;
    if (keyShortcuts?.ctrlAlt) active++;
    if (keyShortcuts?.shiftCtrl) active++;
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
    <div
      onClick={() => openModal(key, data, onSaveKeyShortcuts)}
      className={cx(classes.key, "key")}
    >
      <KeyShortcut
        label={layoutKey.label}
        value={keyShortcuts?.keyOnly ? keyShortcuts.keyOnly : ""}
        size={fontSizeType}
      />
      {keyShortcuts && (
        <div className={cx(classes.keyShortcuts)}>
          {hasTwoKeyShortcut && (
            <KeyShortcut
              label={KeyShortcutLabel.SHIFT}
              value={keyShortcuts.shift}
              size={fontSizeType}
            />
          )}

          {keyShortcuts.shiftCtrl && (
            <KeyShortcut
              label={KeyShortcutLabel.SHIFT_CTRL}
              value={keyShortcuts.shiftCtrl}
              size={fontSizeType}
            />
          )}

          {hasTwoKeyShortcut && (
            <KeyShortcut
              label={KeyShortcutLabel.CTRL}
              value={keyShortcuts.ctrl}
              size={fontSizeType}
            />
          )}

          {keyShortcuts.ctrlAlt && (
            <KeyShortcut
              label={KeyShortcutLabel.CTRL_ALT}
              value={keyShortcuts.ctrlAlt}
              size={fontSizeType}
            />
          )}

          {hasTwoKeyShortcut && (
            <KeyShortcut
              label={KeyShortcutLabel.ALT}
              value={keyShortcuts.alt}
              size={fontSizeType}
            />
          )}

          {keyShortcuts.altShift && (
            <KeyShortcut
              label={KeyShortcutLabel.ALT_SHIFT}
              value={keyShortcuts.altShift}
              size={fontSizeType}
            />
          )}
        </div>
      )}
    </div>
  );
};

const useStyles = makeStyles<{
  grow?: number;
  size?: number;
}>()((theme, { grow, size }) => ({
  key: {
    paddingTop: "0.05vw",
    paddingLeft: "0.01vw",
    flexGrow: grow,
    width: 100 / (AMOUNT_OF_KEY_SPACE / (size ? 2 : 1)) + "vw",
    height: 100 / AMOUNT_OF_KEY_SPACE + "vw",

    backgroundColor: ColorHex.WHITE,
    border: "0.12vw solid " + ColorHex.GUNMETAL,
    borderRadius: "0.3vw",
    marginTop: "0.06vw",
    marginBottom: "0.06vw",
    marginLeft: "0.12vw",

    boxShadow: "rgba(0, 0, 0, 0.15) 0px -0.22vw 0.22vw 0px inset",
    cursor: "pointer",
    "&:hover:not(:focus)": {
      backgroundColor: ColorHex.AMBER,
      color: ColorHex.WHITE + " !important",
      transform: "scale(1.3)",
      zIndex: 0,
    },
  },
  keyShortcuts: {
    display: "flex",
    flexDirection: "column",
  },
}));

export default Key;
