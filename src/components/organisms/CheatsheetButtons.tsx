import React from "react";
import { makeStyles } from "../../styles/theme";
import { base } from "../../styles/base";
import { ColorHex } from "../../styles/colors";
import DownloadCheatsheetButton from "../atoms/DownloadCheatsheetButton";
import SaveCheatsheetDataButton from "../atoms/SaveCheatsheetDataButton";
import { Cheatsheet } from "../../domain/Cheatsheet";
import LoadCheatsheetDataButton from "../atoms/LoadCheatsheetDataButton";
import ResetCheatsheetDataButton from "../atoms/ResetCheatsheetDataButton";

interface CheatsheetButtonsProps {
  downloadId: string;
  cheatsheet: Cheatsheet;
  onSaveCheatsheet: (cheatsheet: Cheatsheet) => void;
}

const CheatsheetButtons = ({
  downloadId,
  cheatsheet,
  onSaveCheatsheet,
}: CheatsheetButtonsProps) => {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.cheatsheetButtons)}>
      <DownloadCheatsheetButton downloadId={downloadId} />
      <div className={cx(classes.cheatsheetSaveLoadButtons)}>
        <SaveCheatsheetDataButton cheatsheet={cheatsheet} />
        <LoadCheatsheetDataButton onSave={onSaveCheatsheet} />
        <ResetCheatsheetDataButton onSave={onSaveCheatsheet} />
      </div>
    </div>
  );
};

const useStyles = makeStyles()(() => ({
  cheatsheetButtons: {
    display: "flex",
    flexDirection: "row",
    gap: base(5),
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: base(1),
    paddingBottom: base(0.35),
    backgroundColor: ColorHex.DARK_BLUE,
  },
  cheatsheetSaveLoadButtons: {
    display: "flex",
    flexDirection: "row",
    gap: base(0.5),
  },
}));

export default CheatsheetButtons;
