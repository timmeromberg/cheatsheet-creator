import { makeStyles } from "../../styles/theme";
import { ColorHex } from "../../styles/colors";
import { base } from "../../styles/base";
import { FontWeight } from "../../styles/fontType";

interface LoadPresetButtonProps {
  title: string | null;
  onClick?: () => void;
}

const LoadPresetButton = ({
  title,
  onClick,
}: LoadPresetButtonProps): JSX.Element => {
  const { cx, classes } = useStyles({ active: title != null });

  return (
    <button
      onClick={() => {
        onClick ? onClick() : "";
      }}
      className={cx(classes.loadPresetButton)}
    >
      {title}
    </button>
  );
};

const useStyles = makeStyles<{
  active: boolean;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
}>()((_, { active }) => ({
  loadPresetButton: {
    backgroundColor: ColorHex.LIGHT_BLUE,
    color: ColorHex.WHITE,
    border: 0,
    fontSize: base(0.5),
    fontFamily: "Lato, sans-serif",
    fontWeight: FontWeight.LIGHT,
    textAlign: "left",
    height: base(0.65),
    "&:hover": {
      backgroundColor: active ? ColorHex.AMBER : ColorHex.LIGHT_BLUE,
    },
    cursor: active ? "pointer" : undefined,
  },
}));

export default LoadPresetButton;
