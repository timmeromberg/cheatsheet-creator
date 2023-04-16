import { makeStyles } from "../styles/theme";
import { LayoutColumn } from "../domain/KeyboardLayout";
import KeyboardRow from "./KeyboardRow";
import { Cheatsheet, KeyShortcuts } from "../domain/Cheatsheet";
import { ColorHex } from "../styles/colors";
import { base } from "../styles/base";

interface KeyboardColumnProps {
  openEditShortcutModal: (keyShortcuts: KeyShortcuts) => any;
  layoutColumn: LayoutColumn;
  keyboardShortcuts: Cheatsheet;
}

const KeyboardColumn = ({
  openEditShortcutModal,
  layoutColumn,
  keyboardShortcuts,
}: KeyboardColumnProps): JSX.Element => {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.keyboardColumn)}>
      {layoutColumn.layoutRows.map((layoutRow, index) => (
        <KeyboardRow
          key={index}
          openEditShortcutModal={openEditShortcutModal}
          keyboardShortcuts={keyboardShortcuts}
          layoutRow={layoutRow}
        />
      ))}
    </div>
  );
};

const useStyles = makeStyles<>()(() => ({
  keyboardColumn: {
    backgroundColor: ColorHex.MIDNIGHT_BLUE,
    display: "flex",
    flexDirection: "column",
  },
}));

export default KeyboardColumn;
