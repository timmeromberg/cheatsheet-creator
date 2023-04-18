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
import EditKeyShortcutsModal from "../organisms/EditKeyShortcutsModal";
import React, { useState } from "react";

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
  const [isEditKeyShortCutsModalOpen, setIsEditKeyShortCutsModalOpen] =
    useState(false);

  const { classes, cx } = useStyles({
    grow: layoutKey.grow,
    size: layoutKey.size,
  });

  const hasTwoKeyShortcut =
    keyShortcuts?.shift || keyShortcuts?.alt || keyShortcuts?.ctrl;

  return (
    <div
      onClick={() => setIsEditKeyShortCutsModalOpen(true)}
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

      {isEditKeyShortCutsModalOpen && (
        <EditKeyShortcutsModal
          isOpen={isEditKeyShortCutsModalOpen}
          onRequestClose={() => setIsEditKeyShortCutsModalOpen(false)}
          cheatsheet={cheatsheet}
          keyShortcuts={
            keyShortcuts ? keyShortcuts : createEmptyKeyShortcuts(layoutKey.id)
          }
          label={layoutKey.label}
          saveCheatsheet={saveCheatsheet}
        />
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
