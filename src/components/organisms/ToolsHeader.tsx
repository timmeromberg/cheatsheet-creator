import { makeStyles } from "../../styles/theme";
import { base } from "../../styles/base";
import BrandCollaboration from "../molecules/BrandCollaboration";
import ToolTitleWithBrands from "../atoms/ToolTitleWithBrands";
import { ColorHex } from "../../styles/colors";
import {
  BUTTONS_HORIZONTAL_PADDING,
  BUTTONS_HORIZONTAL_PADDING_M,
} from "./CheatsheetButtons";
import { m } from "../../styles/queries";

interface ToolsHeaderProps {
  title: string;
}

const ToolsHeader = ({ title }: ToolsHeaderProps) => {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.titleBar)}>
      <BrandCollaboration color={ColorHex.WHITE} />
      <ToolTitleWithBrands title={title} />
    </div>
  );
};

const useStyles = makeStyles()(() => ({
  titleBar: {
    paddingTop: base(0.2),
    paddingBottom: base(0.2),
    paddingLeft: base(BUTTONS_HORIZONTAL_PADDING - 0.45),
    paddingRight: base(BUTTONS_HORIZONTAL_PADDING),
    [m]: {
      paddingLeft: base(BUTTONS_HORIZONTAL_PADDING_M - 0.45),
      paddingRight: base(BUTTONS_HORIZONTAL_PADDING_M),
    },
    display: "flex",
    flexDirection: "row",
    gap: base(0.5),
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: ColorHex.DARK_BLUE,
  },
}));

export default ToolsHeader;
