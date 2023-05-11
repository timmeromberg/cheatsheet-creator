import { makeStyles } from "../../styles/theme";
import { base } from "../../styles/base";
import { ColorHex } from "../../styles/colors";
import { FontWeight } from "../../styles/fontType";

interface ModalInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ModalFileInput = ({ onChange }: ModalInputProps) => {
  const { cx, classes } = useStyles();

  return (
    <input
      type="file"
      accept=".json"
      className={cx(classes.modalFileInput)}
      onChange={onChange}
    />
  );
};

const useStyles = makeStyles()(() => ({
  modalFileInput: {
    width: "100%",
    backgroundColor: ColorHex.LIGHT_BLUE,
    color: ColorHex.WHITE,
    border: 0,
    fontSize: base(0.5),
    fontFamily: "Lato, sans-serif",
    fontWeight: FontWeight.LIGHT,
  },
}));

export default ModalFileInput;
