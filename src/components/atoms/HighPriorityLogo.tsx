import { makeStyles } from "../../styles/theme";
import { base } from "../../styles/base";
import { ColorHex } from "../../styles/colors";
import { HIGH_PRIORITY_URL, Link } from "./Link";

interface HighPriorityLogoProps {
  color: ColorHex.WHITE | ColorHex.BLACK;
}

const HighPriorityLogo = ({ color }: HighPriorityLogoProps) => {
  const { classes, cx } = useStyles({ color: color });

  const src =
    color === ColorHex.WHITE
      ? "/images/HP_amber2.png"
      : "/images/HP_black2.png";

  return (
    <Link url={HIGH_PRIORITY_URL}>
      <img
        className={cx(classes.highPriorityLogo)}
        alt="High Priority Logo"
        src={src}
      />
    </Link>
  );
};

const useStyles = makeStyles<{ color: ColorHex }>()(() => ({
  highPriorityLogo: {
    maxHeight: base(2),
    padding: base(0.1),
  },
}));

export default HighPriorityLogo;
