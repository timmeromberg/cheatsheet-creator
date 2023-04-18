import React, { useState } from "react";
import { Cheatsheet, KeyShortcuts } from "../../domain/Cheatsheet";
import ModalLabeledInput from "../molecules/ModalLabeledInput";
import Button, { ButtonSize } from "../atoms/Button";
import ModalButtons from "../molecules/ModalButtons";
import ModalForm from "../molecules/ModalForm";
import ToolsModal from "../templates/ToolsModal";
import { makeStyles } from "../../styles/theme";
import { base } from "../../styles/base";

export interface EditShortcutModalData {
  label: string;
  keyShortcuts: KeyShortcuts;
}

interface EditShortcutModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  saveCheatsheet: (cheatsheet: Cheatsheet) => void;
  label: string;
  keyShortcuts: KeyShortcuts;
  cheatsheet: Cheatsheet;
}

const EditKeyShortcutsModal = ({
  isOpen,
  onRequestClose,
  saveCheatsheet,
  label,
  keyShortcuts,
  cheatsheet,
}: EditShortcutModalProps): JSX.Element => {
  const [keyOnly, setKeyOnly] = useState(keyShortcuts.keyOnly);
  const [shift, setShift] = useState(keyShortcuts.shift);
  const [shiftCtrl, setShiftCtrl] = useState(keyShortcuts.shiftCtrl);
  const [ctrl, setCtrl] = useState(keyShortcuts.ctrl);
  const [ctrlAlt, setCtrlAlt] = useState(keyShortcuts.ctrlAlt);
  const [alt, setAlt] = useState(keyShortcuts.alt);
  const [altShift, setAltShift] = useState(keyShortcuts.altShift);
  const { cx, classes } = useStyles();

  const onSaveKeyShortcuts = () => {
    const updatedKeyShortcut: KeyShortcuts = {
      id: keyShortcuts.id,
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
      (shortcut) => shortcut.id === keyShortcuts.id
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

    onRequestClose();
    saveCheatsheet(newCheatsheet);
  };

  return (
    <ToolsModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <ModalForm className={cx(classes.editShortcutsModal)}>
        <ModalLabeledInput
          label={label}
          value={keyOnly}
          onChange={setKeyOnly}
          maxLength={43 - keyShortcuts.id.length}
        />

        <ModalLabeledInput
          label={"Shift"}
          value={shift}
          onChange={setShift}
          maxLength={42}
        />
        <ModalLabeledInput
          label={"Shift + Ctrl"}
          value={shiftCtrl}
          onChange={setShiftCtrl}
          maxLength={42}
        />

        <ModalLabeledInput
          label={"Ctrl"}
          value={ctrl}
          onChange={setCtrl}
          maxLength={42}
        />
        <ModalLabeledInput
          label={"Ctrl + Alt"}
          value={ctrlAlt}
          onChange={setCtrlAlt}
          maxLength={42}
        />

        <ModalLabeledInput
          label={"Alt"}
          value={alt}
          onChange={setAlt}
          maxLength={42}
        />
        <ModalLabeledInput
          label={"Alt + Shift"}
          value={altShift}
          onChange={setAltShift}
          maxLength={42}
        />
      </ModalForm>

      <ModalButtons>
        <Button
          size={ButtonSize.NORMAL}
          label={"Save"}
          onClick={() => onSaveKeyShortcuts()}
        />
        <Button
          size={ButtonSize.NORMAL}
          label={"Cancel"}
          onClick={onRequestClose}
        />
      </ModalButtons>
    </ToolsModal>
  );
};

const useStyles = makeStyles()(() => ({
  editShortcutsModal: {
    paddingTop: base(1),
  },
}));

export default EditKeyShortcutsModal;
