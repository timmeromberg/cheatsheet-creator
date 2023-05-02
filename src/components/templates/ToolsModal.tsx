import React from "react";
import Modal from "react-modal";
import { makeStyles } from "../../styles/theme";
import { base, pixels } from "../../styles/base";
import { ColorHex, hexToRgba } from "../../styles/colors";
import { ModalKey, useModalContext } from "../../hooks/ModalProvider";

interface ToolsModalProps {
  modalKey: ModalKey;
  children: React.ReactNode;
}

const ToolsModal = ({ modalKey, children }: ToolsModalProps): JSX.Element => {
  const { classes, cx } = useStyles();
  const { getModalState, closeModal } = useModalContext();

  return (
    <Modal
      className={cx(classes.toolsModal)}
      isOpen={!!getModalState(modalKey)?.isOpen}
      onRequestClose={() => closeModal(modalKey)}
      overlayClassName={cx(classes.toolsModalOverlay)}
      ariaHideApp={false}
    >
      <div className={cx(classes.toolsModalTopTriangle)} />
      {children}
      <div className={cx(classes.toolsModalBottomTriangle)} />
    </Modal>
  );
};

const useStyles = makeStyles()(() => ({
  toolsModal: {
    height: base(16),
    width: base(16),
    backgroundColor: ColorHex.DARK_BLUE,
    color: ColorHex.LIGHT_GRAY,
    padding: base(1),
    display: "flex",
    flexDirection: "column",
    gap: base(1),
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
  },
  toolsModalOverlay: {
    position: "fixed",
    backgroundColor: hexToRgba(ColorHex.MIDNIGHT_BLUE, 0.85),
    inset: "0px",
  },
  toolsModalTopTriangle: {
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderWidth: "0 " + pixels(base(10)) + "px " + pixels(base(2)) + "px 0",
    borderColor: "transparent " + ColorHex.AMBER + " transparent transparent",
    right: 0,
    top: 0,
    position: "absolute",
  },
  toolsModalBottomTriangle: {
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderWidth: pixels(base(10)) + "px 0 0 " + pixels(base(2)) + "px",
    borderColor: "transparent transparent transparent " + ColorHex.AMBER,
    left: 0,
    bottom: 0,
    position: "absolute",
  },
}));

export default ToolsModal;
