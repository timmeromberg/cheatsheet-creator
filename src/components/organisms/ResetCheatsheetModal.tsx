import Button, { ButtonSize, ButtonType } from "../atoms/Button";
import ModalButtons from "../molecules/ModalButtons";
import ToolsModal from "../templates/ToolsModal";
import { ModalKey, useModalContext } from "../../hooks/ModalProvider";
import { Cheatsheet, createEmptyCheatsheet } from "../../domain/Cheatsheet";
import ModalForm from "../molecules/ModalForm";
import { makeStyles } from "../../styles/theme";
import { ColorHex } from "../../styles/colors";
import { base } from "../../styles/base";

const ResetCheatsheetModal = (): JSX.Element => {
  const key = ModalKey.RESET_CHEATSHEET_MODAL;
  const { closeModal, getModalState } = useModalContext();
  const modalState = getModalState(key);
  const onSave = modalState.onSave as (cheatsheet: Cheatsheet) => void;
  const { cx, classes } = useStyles();

  const resetCheatsheet = () => {
    const cheatsheet: Cheatsheet = createEmptyCheatsheet();
    onSave(cheatsheet);
    closeModal(key);
  };

  return (
    <ToolsModal modalKey={key}>
      <ModalForm>
        <h2 className={cx(classes.resetCheatsheetModalTitle)}>
          Reset Cheatsheet
        </h2>
        <div className={cx(classes.resetCheatsheetModalDescription)}>
          <span>
            WARNING: All your shortcuts will be deleted! This can not be undone!{" "}
          </span>
          <span>
            It might be wise to make a backup using the the Save cheatsheet
            button first.
          </span>
          <span>Are you still sure you want to reset your cheatsheet?</span>
        </div>
      </ModalForm>
      <ModalButtons>
        <Button
          size={ButtonSize.NORMAL}
          label={"Reset"}
          onClick={() => resetCheatsheet()}
          type={ButtonType.WARNING}
        />
        <Button
          size={ButtonSize.NORMAL}
          label={"Cancel"}
          onClick={() => closeModal(key)}
        />
      </ModalButtons>
    </ToolsModal>
  );
};

const useStyles = makeStyles()(() => ({
  resetCheatsheetModalTitle: {
    color: ColorHex.WHITE,
  },
  resetCheatsheetModalDescription: {
    lineHeight: "1.2",
    display: "flex",
    flexDirection: "column",
    gap: base(0.3),
  },
}));

export default ResetCheatsheetModal;
