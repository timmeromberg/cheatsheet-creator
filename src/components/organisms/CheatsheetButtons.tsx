import { makeStyles } from "../../styles/theme";
import { base } from "../../styles/base";
import { ColorHex } from "../../styles/colors";
import DownloadCheatsheetButton from "../atoms/DownloadCheatsheetButton";
import SaveCheatsheetDataButton from "../atoms/SaveCheatsheetDataButton";
import { Cheatsheet } from "../../domain/Cheatsheet";
import LoadCheatsheetDataButton from "../atoms/LoadCheatsheetDataButton";
import ResetCheatsheetDataButton from "../atoms/ResetCheatsheetDataButton";
import { m } from "../../styles/queries";

export const BUTTONS_HORIZONTAL_PADDING = 2.5;
export const BUTTONS_HORIZONTAL_PADDING_M = 0.5;

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
    justifyContent: "space-between",
    width: "100%",
    gap: base(4),
    alignItems: "center",
    paddingTop: base(0.6),
    paddingBottom: base(0.35),
    paddingLeft: base(BUTTONS_HORIZONTAL_PADDING),
    paddingRight: base(BUTTONS_HORIZONTAL_PADDING),
    [m]: {
      paddingLeft: base(BUTTONS_HORIZONTAL_PADDING_M),
      paddingRight: base(BUTTONS_HORIZONTAL_PADDING_M),
    },
    backgroundColor: ColorHex.DARK_BLUE,
  },
  cheatsheetSaveLoadButtons: {
    display: "flex",
    flexDirection: "row",
    gap: base(0.5),
  },
}));

export default CheatsheetButtons;
