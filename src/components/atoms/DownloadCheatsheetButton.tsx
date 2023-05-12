import Button, { ButtonSize } from "./Button";
import exportHtmlAsImage from "../../application/downloadHtmlAsImage";
import { ModalKey, useModalContext } from "../../hooks/ModalProvider";

export interface DownloadCheatsheetButtonProps {
  downloadId: string;
}

const DownloadCheatsheetButton = ({
  downloadId,
}: DownloadCheatsheetButtonProps): JSX.Element => {
  const { openModal } = useModalContext();

  return (
    <Button
      size={ButtonSize.BIG}
      onClick={async () => {
        await exportHtmlAsImage(downloadId);
        openModal(ModalKey.FEEDBACK_MODAL);
      }}
      label={"Download image"}
    />
  );
};

export default DownloadCheatsheetButton;
