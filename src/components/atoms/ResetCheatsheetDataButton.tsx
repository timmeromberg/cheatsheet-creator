import Button, { ButtonSize, ButtonType } from "./Button";
import { Cheatsheet } from "../../domain/Cheatsheet";
import { ModalKey, useModalContext } from "../../hooks/ModalProvider";

interface ResetCheatsheetDataButtonProps {
  onSave: (cheatsheet: Cheatsheet) => void;
}

const ResetCheatsheetDataButton = ({
  onSave,
}: ResetCheatsheetDataButtonProps): JSX.Element => {
  const { openModal } = useModalContext();

  return (
    <Button
      size={ButtonSize.BIG}
      onClick={() => openModal(ModalKey.RESET_CHEATSHEET_MODAL, null, onSave)}
      label={"Reset"}
      type={ButtonType.WARNING}
    />
  );
};

export default ResetCheatsheetDataButton;
