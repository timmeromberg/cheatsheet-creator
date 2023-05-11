import Button, { ButtonSize } from "./Button";
import { Cheatsheet } from "../../domain/Cheatsheet";
import { ModalKey, useModalContext } from "../../hooks/ModalProvider";

interface LoadCheatsheetDataButtonProps {
  onSave: (cheatsheet: Cheatsheet) => void;
}

const LoadCheatsheetDataButton = ({
  onSave,
}: LoadCheatsheetDataButtonProps): JSX.Element => {
  const { openModal } = useModalContext();

  return (
    <Button
      size={ButtonSize.BIG}
      onClick={() => openModal(ModalKey.LOAD_CHEATSHEET_MODAL, null, onSave)}
      label={"Load cheatsheet"}
    />
  );
};

export default LoadCheatsheetDataButton;
