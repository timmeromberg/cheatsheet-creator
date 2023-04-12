import React, { useState } from "react";
import Button from "./Button";
import ToolsModal from "./ToolsModal";
import ModalForm from "./ModalForm";
import ModalButtons from "./ModalButtons";

interface EditShortcutModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onSave: (description: string) => void;
  data: string;
}

const EditShortcutModal = ({
  isOpen,
  onRequestClose,
  onSave,
  data,
}: EditShortcutModalProps): JSX.Element => {
  const [description, setDescription] = useState(data);

  return (
    <ToolsModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      header={"Editing description"}
    >
      <ModalForm>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="6"
          cols="50"
        />
      </ModalForm>

      <ModalButtons>
        <Button label={"Save"} onClick={() => onSave(description)} />
        <Button label={"Cancel"} onClick={onRequestClose} />
      </ModalButtons>
    </ToolsModal>
  );
};

export default EditShortcutModal;
