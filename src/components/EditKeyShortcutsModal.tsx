import React, { useState } from "react";
import { KeyShortcuts } from "../domain/Cheatsheet";
import EditShortcutModalInput from "./EditShortcutModalInput";
import Button from "./Button";
import ModalButtons from "./ModalButtons";
import ModalForm from "./ModalForm";
import ToolsModal from "./ToolsModal";

interface EditShortcutModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onSave: (keyShortcuts: KeyShortcuts) => void;
  data: KeyShortcuts;
}

const EditKeyShortcutsModal = ({
  isOpen,
  onRequestClose,
  onSave,
  data,
}: EditShortcutModalProps): JSX.Element => {
  const [keyOnly, setKeyOnly] = useState(data.keyOnly);
  const [alt, setAlt] = useState(data.alt);
  const [ctrl, setCtrl] = useState(data.ctrl);
  const [ctrlShift, setCtrlShift] = useState(data.ctrlShift);
  const [shift, setShift] = useState(data.shift);

  return (
    <ToolsModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      header={"Editing shortcuts for " + data.id}
    >
      <ModalForm>
        <EditShortcutModalInput
          label={"Key only"}
          value={keyOnly}
          setValue={setKeyOnly}
          maxLength={43 - data.id.length}
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
              id: data.id,
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
