import { makeStyles } from "../styles/theme";
import { base } from "../styles/base";
import { LayoutFiller } from "../domain/KeyboardLayout";

export interface FillerProps {
  layoutFiller: LayoutFiller;
}

const Filler = ({ layoutFiller }: FillerProps): JSX.Element => {
  const { classes, cx } = useStyles({
    stretch: layoutFiller.grow,
  });
  return <div className={cx(classes.key)} />;
};

const useStyles = makeStyles<{
  size: boolean;
  stretch?: boolean;
}>()((theme, { grow }) => ({
  key: {
    height: base(1),
    width: base(1),
    flexGrow: grow,
  },
}));

export default Filler;
