import { makeStyles } from "../../styles/theme";
import { LayoutFiller } from "../../domain/KeyboardLayout";
import { AMOUNT_OF_KEY_SPACE } from "../../pages/CheatsheetPage";

export interface FillerProps {
  layoutFiller: LayoutFiller;
}

const Filler = ({ layoutFiller }: FillerProps): JSX.Element => {
  const { classes, cx } = useStyles({
    size: layoutFiller.size,
  });
  return <div className={cx(classes.key)} />;
};

const useStyles = makeStyles<{
  size?: number;
}>()((_, { size }) => ({
  key: {
    height: 100 / (AMOUNT_OF_KEY_SPACE * (size ? size : 1)) + "vw",
    flexGrow: 1,
  },
}));

export default Filler;
