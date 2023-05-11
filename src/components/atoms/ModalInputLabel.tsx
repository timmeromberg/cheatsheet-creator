import { makeStyles } from "../../styles/theme";
import { ColorHex } from "../../styles/colors";
import { base } from "../../styles/base";

interface ModalLabelProps {
  className?: string;
  label: string;
}

const ModalInputLabel = ({ label, className }: ModalLabelProps) => {
  const { cx, classes } = useStyles();

  return (
    <span className={cx(classes.modalInputLabel, className)}>{label}</span>
  );
};

export default ModalInputLabel;

const useStyles = makeStyles()(() => ({
  modalInputLabel: {
    color: ColorHex.WHITE,
    textAlign: "right",
    paddingTop: base(0.1),
    fontWeight: 700,
  },
}));
