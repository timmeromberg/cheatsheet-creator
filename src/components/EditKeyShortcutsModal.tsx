import React, { useState } from "react";
import { KeyShortcuts } from "../domain/Cheatsheet";
import EditShortcutModalInput from "./EditShortcutModalInput";
import Button from "./Button";
import ModalButtons from "./ModalButtons";
import ModalForm from "./ModalForm";
import ToolsModal from "./ToolsModal";

export interface EditShortcutModalData {
  label: string;
  keyShortcuts: KeyShortcuts;
}

interface EditShortcutModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onSave: (keyShortcuts: KeyShortcuts) => void;
  data: EditShortcutModalData;
}

const EditKeyShortcutsModal = ({
  isOpen,
  onRequestClose,
  onSave,
  data,
}: EditShortcutModalProps): JSX.Element => {
  const [keyOnly, setKeyOnly] = useState(data.keyShortcuts.keyOnly);
  const [alt, setAlt] = useState(data.keyShortcuts.alt);
  const [ctrl, setCtrl] = useState(data.keyShortcuts.ctrl);
  const [ctrlShift, setCtrlShift] = useState(data.keyShortcuts.ctrlShift);
  const [shift, setShift] = useState(data.keyShortcuts.shift);

  return (
    <ToolsModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      header={"Editing shortcuts for " + data.label}
    >
      <ModalForm>
        <EditShortcutModalInput
          label={"Key only"}
          value={keyOnly}
          setValue={setKeyOnly}
          maxLength={43 - data.keyShortcuts.id.length}
        />
        <EditShortcutModalInput
          label={"Shift"}
          value={shift}
          setValue={setShift}
          maxLength={42}
        />
        <EditShortcutModalInput
          label={"Ctrl"}
          value={ctrl}
          setValue={setCtrl}
          maxLength={42}
        />
        <EditShortcutModalInput
          label={"Ctrl+Shift"}
          value={ctrlShift}
          setValue={setCtrlShift}
          maxLength={42}
        />
        <EditShortcutModalInput
          label={"Alt"}
          value={alt}
          setValue={setAlt}
          maxLength={42}
        />
      </ModalForm>

      <ModalButtons>
        <Button
          label={"Save"}
          onClick={() =>
            onSave({
              id: data.keyShortcuts.id,
              keyOnly: keyOnly,
              alt: alt,
              ctrl: ctrl,
              ctrlShift: ctrlShift,
              shift: shift,
            })
          }
        />
        <Button label={"Cancel"} onClick={onRequestClose} />
      </ModalButtons>
    </ToolsModal>
  );
};

export default EditKeyShortcutsModal;
