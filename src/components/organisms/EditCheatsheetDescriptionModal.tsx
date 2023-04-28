import ToolsModal from "../templates/ToolsModal";
import { ModalKey, useModalContext } from "../../hooks/ModalProvider";
import EditCheatsheetDescriptionForm from "./EditCheatsheetDescriptionForm";
import { CheatsheetDescription } from "../../domain/Cheatsheet";

const EditCheatsheetDescriptionModal = (): JSX.Element => {
  const key = ModalKey.EDIT_CHEATSHEET_DESCRIPTION_MODAL;
  const { closeModal, getModalState } = useModalContext();
  const modalState = getModalState(key);

  return (
    <ToolsModal modalKey={key}>
      <EditCheatsheetDescriptionForm
        data={modalState.data as CheatsheetDescription}
        onCancel={() => closeModal(key)}
        onSave={
          modalState.onSave as (description: CheatsheetDescription) => void
        }
      />
    </ToolsModal>
  );
};

export default EditCheatsheetDescriptionModal;
