import { makeStyles } from "../../styles/theme";

export const HIGH_PRIORITY_URL = "https://highpriority.com/";
export const DOUBLE_CLICK_URL = "https://doubleclick.software/";

interface LinkProps {
  url: string;
  children: JSX.Element;
}

export const Link = ({ url, children }: LinkProps) => {
  const { cx, classes } = useStyles();

  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <span onClick={handleClick} className={cx(classes.link)}>
      {children}
    </span>
  );
};

const useStyles = makeStyles()(() => ({
  link: {
    cursor: "pointer",
  },
}));
