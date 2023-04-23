import { makeStyles } from "../../styles/theme";
import { ColorHex } from "../../styles/colors";
import { base } from "../../styles/base";
import { LayoutKey } from "../../domain/KeyboardLayout";
import {
  Cheatsheet,
  createEmptyKeyShortcuts,
  KeyShortcuts,
} from "../../domain/Cheatsheet";
import KeyShortcut, { KeyShortcutLabel } from "./KeyShortcut";
import React from "react";
import { ModalKey, useModalContext } from "../../hooks/ModalProvider";

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

  const data = {
    label: layoutKey.label,
    keyShortcuts: keyShortcuts
      ? keyShortcuts
      : createEmptyKeyShortcuts(layoutKey.id),
  };

  return (
    <div
      onClick={() => openModal(key, data, onSaveKeyShortcuts)}
      className={cx(classes.key)}
    >
      <KeyShortcut
        label={layoutKey.label}
        value={keyShortcuts?.keyOnly ? keyShortcuts.keyOnly : ""}
      />
      {keyShortcuts && (
        <div className={cx(classes.keyShortcuts)}>
          {hasTwoKeyShortcut && (
            <KeyShortcut
              label={KeyShortcutLabel.SHIFT}
              value={keyShortcuts.shift}
            />
          )}

          {keyShortcuts.shiftCtrl && (
            <KeyShortcut
              label={KeyShortcutLabel.SHIFT_CTRL}
              value={keyShortcuts.shiftCtrl}
            />
          )}

          {hasTwoKeyShortcut && (
            <KeyShortcut
              label={KeyShortcutLabel.CTRL}
              value={keyShortcuts.ctrl}
            />
          )}

          {keyShortcuts.ctrlAlt && (
            <KeyShortcut
              label={KeyShortcutLabel.CTRL_ALT}
              value={keyShortcuts.ctrlAlt}
            />
          )}

          {hasTwoKeyShortcut && (
            <KeyShortcut
              label={KeyShortcutLabel.ALT}
              value={keyShortcuts.alt}
            />
          )}

          {keyShortcuts.altShift && (
            <KeyShortcut
              label={KeyShortcutLabel.ALT_SHIFT}
              value={keyShortcuts.altShift}
            />
          )}
        </div>
      )}
    </div>
  );
};

const useStyles = makeStyles<{
  grow?: boolean;
}>()((theme, { grow, size }) => ({
  key: {
    paddingTop: "5px",
    paddingLeft: "1px",
    height: base(2),
    width: base(size ? size : 2),
    flexGrow: grow,
    backgroundColor: ColorHex.WHITE,
    border: "2px solid " + ColorHex.GUNMETAL,
    borderRadius: "6px",
    margin: base(0.03),
    boxShadow: "rgba(0, 0, 0, 0.15) 0px -3px 3px 0px inset",
    "&:hover": {
      backgroundColor: ColorHex.AMBER,
      color: ColorHex.WHITE + " !important",
    },
  },
  keyShortcuts: {
    display: "flex",
    flexDirection: "column",
  },
}));

export default Key;
