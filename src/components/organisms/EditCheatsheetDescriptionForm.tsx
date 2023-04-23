import React, { useState } from "react";
import Button, { ButtonSize } from "../atoms/Button";
import ModalForm from "../molecules/ModalForm";
import ModalButtons from "../molecules/ModalButtons";
import ModalLabeledTextArea from "../molecules/ModalLabeledTextArea";
import { makeStyles } from "../../styles/theme";
import { base } from "../../styles/base";
import { CheatsheetDescription } from "../../domain/Cheatsheet";

interface EditCheatsheetDescriptionFormProps {
  data: CheatsheetDescription;
  onSave: (description: CheatsheetDescription) => void;
  onCancel: () => void;
}

const EditCheatsheetDescriptionForm = ({
  data,
  onSave,
  onCancel,
}: EditCheatsheetDescriptionFormProps): JSX.Element => {
  const { cx, classes } = useStyles();

  const [shift, setShift] = useState(data.shift);
  const [ctrl, setCtrl] = useState(data.ctrl);
  const [alt, setAlt] = useState(data.alt);
  const [notes, setNotes] = useState(data.notes);

  return (
    <>
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
          onClick={() => onCancel()}
        />
      </ModalButtons>
    </>
  );
};

const useStyles = makeStyles()(() => ({
  editDescriptionModalForm: {
    marginTop: base(2),
    paddingRight: base(1),
  },
}));

export default EditCheatsheetDescriptionForm;
