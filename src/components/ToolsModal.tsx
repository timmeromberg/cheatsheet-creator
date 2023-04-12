import React from "react";
import Modal from "react-modal";
import { makeStyles } from "../styles/theme";
import { base } from "../styles/base";
import { ColorHex, hexToRgba } from "../styles/colors";

interface ToolsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  header: string;
  children: JSX.Element[];
}

const ToolsModal = ({
  isOpen,
  onRequestClose,
  header,
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
      <h3>{header}</h3>
      {children}
    </Modal>
  );
};

const useStyles = makeStyles<{
  grow?: boolean;
}>()(() => ({
  toolsModal: {
    height: base(16),
    width: base(14),
    backgroundColor: ColorHex.DARK_BLUE,
    color: ColorHex.GRAY,
    border: "solid 2px " + ColorHex.AMBER,
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
    backgroundColor: hexToRgba(ColorHex.MIDNIGHT_BLUE, 0.95),
    inset: "0px",
  },
}));

export default ToolsModal;
