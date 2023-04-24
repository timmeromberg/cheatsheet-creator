import { makeStyles } from "../../styles/theme";
import { LayoutFiller } from "../../domain/KeyboardLayout";
import { AMOUNT_OF_KEY_SPACE } from "../../pages/cheatsheet";

export interface FillerProps {
  layoutFiller: LayoutFiller;
}

const Filler = ({ layoutFiller }: FillerProps): JSX.Element => {
  const { classes, cx } = useStyles({
    stretch: layoutFiller.grow,
    size: layoutFiller.size,
  });
  return <div className={cx(classes.key)} />;
};

const useStyles = makeStyles<{
  size: boolean;
  stretch?: boolean;
}>()((theme, { grow, size }) => ({
  key: {
    height: 100 / (AMOUNT_OF_KEY_SPACE * size) + "vw",
    flexGrow: 1,
  },
}));

export default Filler;
