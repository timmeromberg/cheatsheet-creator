import { makeStyles } from "../styles/theme";
import { base } from "../styles/base";
import { LayoutFiller } from "../domain/KeyboardLayout";

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
    height: base(size > 1 ? 2 : 1),
    width: base(size ? size : 1),
    flexGrow: grow,
  },
}));

export default Filler;
