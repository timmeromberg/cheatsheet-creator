import React, { MutableRefObject } from "react";
import Button, { ButtonSize } from "./Button";
import exportHtmlAsImage from "../../application/exportHtmlAsImage";

export interface DownloadCheatsheetButtonProps {
  downloadAsImageRef: MutableRefObject<null>;
}

const DownloadCheatsheetButton = ({
  downloadAsImageRef,
}: DownloadCheatsheetButtonProps): JSX.Element => {
  return (
    <Button
      size={ButtonSize.BIG}
      onClick={() => exportHtmlAsImage(downloadAsImageRef)}
      label={"Download image"}
    />
  );
};

export default DownloadCheatsheetButton;
