import React, { MutableRefObject } from "react";
import Button, { ButtonSize } from "./Button";
import exportHtmlAsImage from "../../application/exportHtmlAsImage";

export interface DownloadCheatsheetButtonProps {
  downloadAsImageRef: MutableRefObject<null>;
}

const DownloadCheatsheetButton = ({
  ref,
}: DownloadCheatsheetButtonProps): JSX.Element => {
  return (
    <Button
      size={ButtonSize.BIG}
      onClick={() => exportHtmlAsImage(ref)}
      label={"Download image"}
    />
  );
};

export default DownloadCheatsheetButton;
