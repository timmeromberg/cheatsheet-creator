import { makeStyles } from "../../styles/theme";
import Key from "../atoms/Key";
import { isLayoutKey, LayoutKey, LayoutRow } from "../../domain/KeyboardLayout";
import Filler from "../atoms/Filler";
import { Cheatsheet } from "../../domain/Cheatsheet";

interface KeyboardRowProps {
  layoutRow: LayoutRow;
  cheatsheet: Cheatsheet;
  saveCheatsheet: (cheatsheet: Cheatsheet) => void;
}

const KeyboardRow = ({
  layoutRow,
  cheatsheet,
  saveCheatsheet,
}: KeyboardRowProps): JSX.Element => {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.keyboardRow)}>
      {layoutRow.layoutKeys.map((layoutItem, index) =>
        isLayoutKey(layoutItem) ? (
          <Key
            key={index}
            keyShortcuts={cheatsheet.keyShortcuts.find(
              (shortcut) => shortcut.id === (layoutItem as LayoutKey).id
            )}
            layoutKey={layoutItem}
            cheatsheet={cheatsheet}
            saveCheatsheet={saveCheatsheet}
          />
        ) : (
          <Filler key={index} layoutFiller={layoutItem} />
        )
      )}
    </div>
  );
};

const useStyles = makeStyles()(() => ({
  keyboardRow: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
  },
}));

export default KeyboardRow;
