import { makeStyles } from "../styles/theme";
import Key from "./Key";
import { isLayoutKey, LayoutKey, LayoutRow } from "../domain/KeyboardLayout";
import Filler from "./Filler";
import { Cheatsheet, KeyShortcuts } from "../domain/Cheatsheet";

interface KeyboardRowProps {
  openEditShortcutModal: (label: string, keyShortcuts: KeyShortcuts) => any;
  layoutRow: LayoutRow;
  keyboardShortcuts: Cheatsheet;
}

const KeyboardRow = ({
  openEditShortcutModal,
  layoutRow,
  keyboardShortcuts,
}: KeyboardRowProps): JSX.Element => {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.keyboardRow)}>
      {layoutRow.layoutKeys.map((layoutItem, index) =>
        isLayoutKey(layoutItem) ? (
          <Key
            key={index}
            openEditShortcutModal={openEditShortcutModal}
            keyShortcuts={keyboardShortcuts.keyShortcuts.find(
              (shortcut) => shortcut.id === (layoutItem as LayoutKey).id
            )}
            layoutKey={layoutItem}
          />
        ) : (
          <Filler key={index} layoutFiller={layoutItem} />
        )
      )}
    </div>
  );
};

const useStyles = makeStyles<>()(() => ({
  keyboardRow: {
    display: "flex",
    flexDirection: "row",
  },
}));

export default KeyboardRow;
