import { makeStyles } from "../../styles/theme";
import { ColorHex } from "../../styles/colors";
import { FontWeight } from "../../styles/fontType";
import {
  DOUBLE_CLICK_URL,
  FEEDBACK_MAIL_URL,
  HIGH_PRIORITY_URL,
  Link,
} from "./Link";
import { base } from "../../styles/base";

interface ToolTitleWithBrandsProps {
  title: string;
}

const ToolTitleWithBrands = ({ title }: ToolTitleWithBrandsProps) => {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.toolTitleWithBrands)}>
      <h4 className={cx(classes.toolTitleWithBrandsTitle)}>{title}</h4>
      <span className={cx(classes.toolTitleWithBrandsBrands)}>
        <span className={cx(classes.toolTitleBetweenText)}>by </span>
        <Link url={HIGH_PRIORITY_URL}>
          <span className={cx(classes.toolTitleWithBrandsBrand)}>
            High Priority
          </span>
        </Link>
        <span className={cx(classes.toolTitleBetweenText)}> & </span>
        <Link url={DOUBLE_CLICK_URL}>
          <span className={cx(classes.toolTitleWithBrandsBrand)}>
            doubleclick.software
          </span>
        </Link>
      </span>
      <Link
        className={cx(classes.toolTitleWithBrandsFeedback)}
        url={FEEDBACK_MAIL_URL}
      >
        <span>Send us feedback</span>
      </Link>
    </div>
  );
};

const useStyles = makeStyles()(() => ({
  toolTitleWithBrands: {
    display: "flex",
    flexDirection: "column",
  },
  toolTitleWithBrandsTitle: {
    color: ColorHex.WHITE,
  },
  toolTitleWithBrandsBrands: {
    fontWeight: FontWeight.LIGHT,
    textAlign: "right",
    color: ColorHex.WHITE,
    marginLeft: "auto",
  },
  toolTitleBetweenText: {
    textAlign: "right",
    color: ColorHex.LIGHT_GRAY,
    marginLeft: "auto",
  },
  toolTitleWithBrandsBrand: {
    color: ColorHex.AMBER,
    "&:hover": {
      color: ColorHex.WHITE + " !important",
    },
  },
  toolTitleWithBrandsFeedback: {
    color: ColorHex.LIGHT_GRAY,
    fontWeight: FontWeight.LIGHT,
    fontSize: base(0.4),
    paddingTop: base(0.22),
    "&:hover": {
      color: ColorHex.WHITE + " !important",
    },
  },
}));

export default ToolTitleWithBrands;
