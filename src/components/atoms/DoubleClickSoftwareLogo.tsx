import { makeStyles } from "../../styles/theme";
import { ColorHex } from "../../styles/colors";
import { DOUBLE_CLICK_URL, Link } from "./Link";

interface DoubleClickSoftwareLogoProps {
  color: ColorHex.BLACK | ColorHex.WHITE;
}

const DoubleClickSoftwareLogo = ({ color }: DoubleClickSoftwareLogoProps) => {
  const { classes, cx } = useStyles({ color: color });

  return (
    <Link url={DOUBLE_CLICK_URL}>
      <div className={cx(classes.doubleClickSoftwareLogo)}>
        <h3>{"<dc>"}</h3>
        <div>doubleclick.software</div>
      </div>
    </Link>
  );
};

const useStyles = makeStyles<{ color: ColorHex }>()((_, { color }) => ({
  doubleClickSoftwareLogo: {
    display: "flex",
    flexDirection: "column",
    color: color,
    alignItems: "center",
  },
}));

export default DoubleClickSoftwareLogo;
