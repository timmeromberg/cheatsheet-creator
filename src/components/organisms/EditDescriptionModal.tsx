import React, { useState } from "react";
import Button, { ButtonSize } from "../atoms/Button";
import ToolsModal from "../templates/ToolsModal";
import ModalForm from "../molecules/ModalForm";
import ModalButtons from "../molecules/ModalButtons";
import { CheatsheetDescription } from "../../domain/Cheatsheet";
import ModalLabeledTextArea from "../molecules/ModalLabeledTextArea";
import { makeStyles } from "../../styles/theme";
import { base } from "../../styles/base";

interface EditShortcutModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onSave: (description: CheatsheetDescription) => void;
  data: CheatsheetDescription;
}

const EditShortcutModal = ({
  isOpen,
  onRequestClose,
  onSave,
  data,
}: EditShortcutModalProps): JSX.Element => {
  const { cx, classes } = useStyles();

  const [shift, setShift] = useState(data.shift);
  const [ctrl, setCtrl] = useState(data.ctrl);
  const [alt, setAlt] = useState(data.alt);
  const [notes, setNotes] = useState(data.notes);

  return (
    <ToolsModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      header={"Editing description"}
    >
      <ModalForm className={cx(classes.editDescriptionModalForm)}>
        <ModalLabeledTextArea
          label={"Shift"}
          value={shift}
          onChange={setShift}
        />
        <ModalLabeledTextArea
          label={"Control"}
          value={ctrl}
          onChange={setCtrl}
        />
        <ModalLabeledTextArea label={"Alt"} value={alt} onChange={setAlt} />
        <ModalLabeledTextArea
          label={"Notes"}
          value={notes}
          onChange={setNotes}
        />
      </ModalForm>

      <ModalButtons>
        <Button
          size={ButtonSize.NORMAL}
          label={"Save"}
          onClick={() =>
            onSave({ shift: shift, ctrl: ctrl, alt: alt, notes: notes })
          }
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
  editDescriptionModalForm: {
    marginTop: base(2),
  },
}));

export default EditShortcutModal;
