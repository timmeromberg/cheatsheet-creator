import { makeStyles } from "../../styles/theme";
import { KeyboardLayout } from "../../domain/KeyboardLayout";
import { Cheatsheet } from "../../domain/Cheatsheet";
import { ColorHex } from "../../styles/colors";
import KeyboardColumn from "../molecules/KeyboardColumn";

interface KeyboardProps {
  keyboardLayout: KeyboardLayout;
  cheatsheet: Cheatsheet;
  saveCheatsheet: (cheatsheet: Cheatsheet) => void;
}

const Keyboard = ({
  keyboardLayout,
  cheatsheet,
  saveCheatsheet,
}: KeyboardProps): JSX.Element => {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.keyboard)}>
      {keyboardLayout.layoutColumns.map((layoutColumn, index) => (
        <KeyboardColumn
          key={index}
          cheatsheet={cheatsheet}
          layoutColumn={layoutColumn}
          saveCheatsheet={saveCheatsheet}
        />
      ))}
    </div>
  );
};

const useStyles = makeStyles()(() => ({
  keyboard: {
    backgroundColor: ColorHex.WHITE,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

export default Keyboard;
