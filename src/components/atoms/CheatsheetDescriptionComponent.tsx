import { Cheatsheet, CheatsheetDescription } from "../../domain/Cheatsheet";
import { makeStyles } from "../../styles/theme";
import { ColorHex } from "../../styles/colors";
import { FontWeight } from "../../styles/fontType";
import { base } from "../../styles/base";
import { ModalKey, useModalContext } from "../../hooks/ModalProvider";

interface CheatsheetDescriptionProps {
  cheatsheet: Cheatsheet;
  saveCheatsheet: (cheatsheet: Cheatsheet) => void;
}

const CheatsheetDescriptionComponent = ({
  cheatsheet,
  saveCheatsheet,
}: CheatsheetDescriptionProps) => {
  const { classes, cx } = useStyles();
  const { openModal, closeModal } = useModalContext();

  const onSaveDescription = (description: CheatsheetDescription) => {
    if (!cheatsheet) return;

    const newCheatsheet: Cheatsheet = {
      keyShortcuts: [...cheatsheet.keyShortcuts],
      description: description,
    };
    saveCheatsheet(newCheatsheet);
    closeModal(ModalKey.EDIT_CHEATSHEET_DESCRIPTION_MODAL);
  };

  const description = cheatsheet.description;
  return (
    <>
      <div
        onClick={() =>
          openModal(
            ModalKey.EDIT_CHEATSHEET_DESCRIPTION_MODAL,
            cheatsheet.description,
            onSaveDescription
          )
        }
        className={cx(classes.cheatsheetDescription)}
      >
        <p>
          <span className={cx(classes.cheatsheetDescriptionLabel)}>
            Shift:{" "}
          </span>
          {description.shift ? description.shift : ""}
        </p>
        <p>
          <span className={cx(classes.cheatsheetDescriptionLabel)}>
            Control:{" "}
          </span>
          {description.ctrl ? description.ctrl : ""}
        </p>
        <p>
          <span className={cx(classes.cheatsheetDescriptionLabel)}>Alt: </span>
          {description.alt ? description.alt : ""}
        </p>
        <p>
          <span className={cx(classes.cheatsheetDescriptionLabel)}>
            Notes:{" "}
          </span>
          {description.notes ? description.notes : ""}
        </p>
      </div>
    </>
  );
};

const useStyles = makeStyles()(() => ({
  cheatsheetDescription: {
    color: ColorHex.DARK_GRAY,
    fontWeight: FontWeight.LIGHT,
    paddingTop: base(0.3),
    lineHeight: base(0.7),
  },
  cheatsheetDescriptionLabel: {
    color: ColorHex.DARK_GRAY,
    fontWeight: FontWeight.BOLD,
  },
}));

export default CheatsheetDescriptionComponent;
