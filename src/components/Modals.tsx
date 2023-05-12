import EditDescriptionModal from "./organisms/EditCheatsheetDescriptionModal";
import EditKeyShortcutsModal from "./organisms/EditKeyShortcutsModal";
import { ModalKey, useModalContext } from "../hooks/ModalProvider";
import LoadCheatsheetModal from "./organisms/LoadCheatsheetModal";
import ResetCheatsheetModal from "./organisms/ResetCheatsheetModal";
import FeedbackModal from "./organisms/FeedbackModal";

export const Modals = () => {
  const { getModalState } = useModalContext();
  return (
    <>
      {getModalState(ModalKey.EDIT_CHEATSHEET_DESCRIPTION_MODAL)?.isOpen && (
        <EditDescriptionModal />
      )}
      {getModalState(ModalKey.EDIT_SHORTCUTS_MODAL)?.isOpen && (
        <EditKeyShortcutsModal />
      )}
      {getModalState(ModalKey.LOAD_CHEATSHEET_MODAL)?.isOpen && (
        <LoadCheatsheetModal />
      )}
      {getModalState(ModalKey.RESET_CHEATSHEET_MODAL)?.isOpen && (
        <ResetCheatsheetModal />
      )}
      {getModalState(ModalKey.FEEDBACK_MODAL)?.isOpen && <FeedbackModal />}
    </>
  );
};
