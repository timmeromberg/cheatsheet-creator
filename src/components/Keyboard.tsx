import { makeStyles } from "../styles/theme";
import { KeyboardLayout } from "../domain/KeyboardLayout";
import { Cheatsheet, KeyShortcuts } from "../domain/Cheatsheet";
import { ColorHex } from "../styles/colors";
import { base } from "../styles/base";
import KeyboardColumn from "./KeyboardColumn";

interface KeyboardProps {
  openEditShortcutModal: (label: string, keyShortcuts: KeyShortcuts) => any;
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
      {keyboardLayout.layoutColumns.map((layoutColumn, index) => (
        <KeyboardColumn
          key={index}
          openEditShortcutModal={openEditShortcutModal}
          keyboardShortcuts={keyboardShortcuts}
          layoutColumn={layoutColumn}
        />
      ))}
    </div>
  );
};

const useStyles = makeStyles<>()(() => ({
  keyboard: {
    padding: base(0.1),
    backgroundColor: ColorHex.MIDNIGHT_BLUE,
    display: "flex",
    flexDirection: "row",
    gap: base(1),
  },
}));

export default Keyboard;
