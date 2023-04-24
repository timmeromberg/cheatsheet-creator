import React from "react";
import Button, { ButtonSize } from "../atoms/Button";
import ModalButtons from "../molecules/ModalButtons";
import ToolsModal from "../templates/ToolsModal";
import { ModalKey, useModalContext } from "../../hooks/ModalProvider";
import { Cheatsheet } from "../../domain/Cheatsheet";
import ModalForm from "../molecules/ModalForm";
import { makeStyles } from "../../styles/theme";
import { ColorHex } from "../../styles/colors";
import ModalFileInput from "../atoms/ModalFileInput";

const EditKeyShortcutsModal = (): JSX.Element => {
  const key = ModalKey.LOAD_CHEATSHEET_MODAL;
  const { closeModal, getModalState } = useModalContext();
  const modalState = getModalState(key);
  const onSave = modalState.onSave as (cheatsheet: Cheatsheet) => void;
  const { cx, classes } = useStyles();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        try {
          const cheatsheet = JSON.parse(result) as Cheatsheet;
          onSave(cheatsheet);
          closeModal(key);
        } catch (error) {
          console.error("Error parsing JSON", error);
          alert(
            "Error parsing JSON. Please ensure the file contains valid JSON."
          );
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <ToolsModal
      isOpen={modalState.isOpen}
      onRequestClose={closeModal}
      modalKey={key}
    >
      <ModalForm>
        <h2 className={cx(classes.loadCheatsheetModalTitle)}>Upload file:</h2>
        <ModalFileInput onChange={handleFileUpload} />
      </ModalForm>

      <ModalButtons>
        <Button
          size={ButtonSize.NORMAL}
          label={"Cancel"}
          onClick={() => closeModal(key)}
        />
      </ModalButtons>
    </ToolsModal>
  );
};

const useStyles = makeStyles<>()(() => ({
  loadCheatsheetModalTitle: {
    color: ColorHex.WHITE,
  },
}));

export default EditKeyShortcutsModal;
