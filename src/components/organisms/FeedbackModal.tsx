import Button, { ButtonSize } from "../atoms/Button";
import ModalButtons from "../molecules/ModalButtons";
import ToolsModal from "../templates/ToolsModal";
import { ModalKey, useModalContext } from "../../hooks/ModalProvider";
import ModalForm from "../molecules/ModalForm";
import { makeStyles } from "../../styles/theme";
import { ColorHex } from "../../styles/colors";
import { base } from "../../styles/base";
import { FEEDBACK_MAIL_URL } from "../atoms/Link";

const ResetCheatsheetModal = (): JSX.Element => {
  const key = ModalKey.FEEDBACK_MODAL;
  const { closeModal } = useModalContext();
  const { cx, classes } = useStyles();

  return (
    <ToolsModal modalKey={key}>
      <ModalForm>
        <h2 className={cx(classes.resetCheatsheetModalTitle)}>Give feedback</h2>
        <div className={cx(classes.resetCheatsheetModalDescription)}>
          <span>Thank you for using our shortcut cheatsheet creator!</span>
          <span>
            We are constantly striving to improve our tool and your feedback is
            invaluable to us.
          </span>
          <span>
            {" "}
            Could you please take a moment to share your experience and any
            suggestions you might have?
          </span>
        </div>
      </ModalForm>
      <ModalButtons>
        <Button
          size={ButtonSize.NORMAL}
          label={"Give feedback"}
          onClick={() => {
            window.location.href = FEEDBACK_MAIL_URL;
            closeModal(key);
          }}
        />
        <Button
          size={ButtonSize.NORMAL}
          label={"No,Thanks"}
          onClick={() => closeModal(key)}
        />
      </ModalButtons>
    </ToolsModal>
  );
};

const useStyles = makeStyles()(() => ({
  resetCheatsheetModalTitle: {
    color: ColorHex.WHITE,
    paddingLeft: base(1),
  },
  resetCheatsheetModalDescription: {
    lineHeight: "1.2",
    display: "flex",
    flexDirection: "column",
    gap: base(0.45),
    paddingLeft: base(1),
  },
}));

export default ResetCheatsheetModal;
