import React from "react";
import Modal from "react-modal";
import { makeStyles } from "../../styles/theme";
import { base } from "../../styles/base";
import { ColorHex, hexToRgba } from "../../styles/colors";

interface ToolsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children: JSX.Element[];
}

const ToolsModal = ({
  isOpen,
  onRequestClose,
  children,
}: ToolsModalProps): JSX.Element => {
  const { classes, cx } = useStyles();

  return (
    <Modal
      className={cx(classes.toolsModal)}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={cx(classes.toolsModalOverlay)}
    >
      {children}
    </Modal>
  );
};

const useStyles = makeStyles<{
  grow?: boolean;
}>()(() => ({
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
}));

export default ToolsModal;
