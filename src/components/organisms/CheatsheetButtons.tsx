import React, { MutableRefObject } from "react";
import { makeStyles } from "../../styles/theme";
import { base } from "../../styles/base";
import { ColorHex } from "../../styles/colors";
import DownloadCheatsheetButton from "../atoms/DownloadCheatsheetButton";
import Button, { ButtonSize } from "../atoms/Button";

interface CheatsheetButtonsProps {
  downloadAsImageRef: MutableRefObject<null>;
}

const CheatsheetButtons = ({ downloadAsImageRef }: CheatsheetButtonsProps) => {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.cheatsheetButtons)}>
      <DownloadCheatsheetButton downloadAsImageRef={downloadAsImageRef} />
      <Button
        size={ButtonSize.BIG}
        label={"Load cheatsheet"}
        onClick={() => "Load layout not implemented yet."}
      />
      <Button
        size={ButtonSize.BIG}
        label={"Save cheatsheet"}
        onClick={() => "Save layout not implemented yet."}
      />
    </div>
  );
};

const useStyles = makeStyles<>()(() => ({
  cheatsheetButtons: {
    display: "flex",
    flexDirection: "row",
    gap: base(1),
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: base(1),
    paddingBottom: base(0.5),
    backgroundColor: ColorHex.DARK_BLUE,
  },
}));

export default CheatsheetButtons;
