import { makeStyles } from "../../styles/theme";
import { LayoutColumn } from "../../domain/KeyboardLayout";
import KeyboardRow from "./KeyboardRow";
import { Cheatsheet } from "../../domain/Cheatsheet";
import { ColorHex } from "../../styles/colors";

interface KeyboardColumnProps {
  layoutColumn: LayoutColumn;
  cheatsheet: Cheatsheet;
  saveCheatsheet: (cheatsheet: Cheatsheet) => void;
}

const KeyboardColumn = ({
  layoutColumn,
  cheatsheet,
  saveCheatsheet,
}: KeyboardColumnProps): JSX.Element => {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.keyboardColumn)}>
      {layoutColumn.layoutRows.map((layoutRow, index) => (
        <KeyboardRow
          key={index}
          cheatsheet={cheatsheet}
          layoutRow={layoutRow}
          saveCheatsheet={saveCheatsheet}
        />
      ))}
    </div>
  );
};

const useStyles = makeStyles<>()(() => ({
  keyboardColumn: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
}));

export default KeyboardColumn;
