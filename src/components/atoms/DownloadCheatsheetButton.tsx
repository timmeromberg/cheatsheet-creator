import React from "react";
import Button, { ButtonSize } from "./Button";
import exportHtmlAsImage from "../../application/downloadHtmlAsImage";

export interface DownloadCheatsheetButtonProps {
  downloadId: string;
}

const DownloadCheatsheetButton = ({
  downloadId,
}: DownloadCheatsheetButtonProps): JSX.Element => {
  return (
    <Button
      size={ButtonSize.BIG}
      onClick={() => exportHtmlAsImage(downloadId)}
      label={"Download image"}
    />
  );
};

export default DownloadCheatsheetButton;
