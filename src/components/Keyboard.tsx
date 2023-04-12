import { makeStyles } from "../styles/theme";
import { KeyboardLayout } from "../domain/KeyboardLayout";
import KeyboardRow from "./KeyboardRow";
import { Cheatsheet, KeyShortcuts } from "../domain/Cheatsheet";
import { ColorHex } from "../styles/colors";
import { base } from "../styles/base";

interface KeyboardProps {
  openEditShortcutModal: (keyShortcuts: KeyShortcuts) => any;
  keyboardLayout: KeyboardLayout;
  keyboardShortcuts: Cheatsheet;
}

const Keyboard = ({
  openEditShortcutModal,
  keyboardLayout,
  keyboardShortcuts,
}: KeyboardProps): JSX.Element => {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.keyboard)}>
      {keyboardLayout.layoutRows.map((layoutRow, index) => (
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

const useStyles = makeStyles<>()((theme) => ({
  keyboard: {
    padding: base(0.1),
    backgroundColor: ColorHex.MIDNIGHT_BLUE,
    display: "flex",
    flexDirection: "column",
  },
}));

export default Keyboard;
