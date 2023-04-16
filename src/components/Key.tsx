import { makeStyles } from "../styles/theme";
import { ColorHex } from "../styles/colors";
import { base } from "../styles/base";
import { LayoutKey } from "../domain/KeyboardLayout";
import { createEmptyKeyShortcuts, KeyShortcuts } from "../domain/Cheatsheet";

export interface KeyProps {
  openEditShortcutModal: (label: string, keyShortcuts: KeyShortcuts) => never;
  layoutKey: LayoutKey;
  keyShortcuts?: KeyShortcuts;
}

const Key = ({
  openEditShortcutModal,
  layoutKey,
  keyShortcuts,
}: KeyProps): JSX.Element => {
  const { classes, cx } = useStyles({
    grow: layoutKey.grow,
    size: layoutKey.size,
  });

  return (
    <div
      onClick={() =>
        openEditShortcutModal(
          layoutKey.label,
          keyShortcuts ? keyShortcuts : createEmptyKeyShortcuts(layoutKey.id)
        )
      }
      className={cx(classes.key)}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className={cx(classes.keyLabel)}>{layoutKey.label}</div>
        {keyShortcuts && (
          <div className={cx(classes.keyShortcutKeyOnly, classes.keyShortcut)}>
            {keyShortcuts.keyOnly}
          </div>
        )}
      </div>
      {keyShortcuts && (
        <div className={cx(classes.keyShortcuts)}>
          {keyShortcuts.shift && (
            <div className={cx(classes.keyShortcutShift, classes.keyShortcut)}>
              S: {keyShortcuts.shift}
            </div>
          )}
          {keyShortcuts.ctrl && (
            <div className={cx(classes.keyShortcutCtrl, classes.keyShortcut)}>
              C: {keyShortcuts.ctrl}
            </div>
          )}
          {keyShortcuts.ctrlShift && (
            <div
              className={cx(classes.keyShortcutCtrlShift, classes.keyShortcut)}
            >
              C+S: {keyShortcuts.ctrlShift}
            </div>
          )}
          {keyShortcuts.alt && (
            <div className={cx(classes.keyShortcutAlt, classes.keyShortcut)}>
              A: {keyShortcuts.alt}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const useStyles = makeStyles<{
  grow?: boolean;
}>()((theme, { grow, size }) => ({
  key: {
    height: base(2),
    width: base(size ? size : 2),
    flexGrow: grow,
    backgroundColor: ColorHex.DARK_BLUE,
    color: ColorHex.GRAY,
    border: "2px solid " + ColorHex.MIDNIGHT_BLUE,
    "&:hover": {
      backgroundColor: ColorHex.AMBER,
      color: ColorHex.WHITE,
    },
  },
  keyLabel: {
    fontWeight: "bold",
  },
  keyShortcuts: {
    display: "flex",
    flexDirection: "column",
  },
  keyShortcut: {
    fontSize: base(0.25),
    lineHeight: base(0.22),
    overflowWrap: "break-all",
  },
  keyShortcutKeyOnly: {
    paddingTop: base(0.05),
    color: ColorHex.WHITE,
  },
  keyShortcutShift: {
    color: ColorHex.WHITE,
  },
  keyShortcutCtrl: {
    color: ColorHex.WHITE,
  },
  keyShortcutCtrlShift: {
    color: ColorHex.WHITE,
  },
  keyShortcutAlt: {
    color: ColorHex.WHITE,
  },
}));

export default Key;
