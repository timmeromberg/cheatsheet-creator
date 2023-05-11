import { makeStyles } from "../../styles/theme";

export const HIGH_PRIORITY_URL = "https://highpriority.com/";
export const DOUBLE_CLICK_URL = "https://doubleclick.software/";
export const FEEDBACK_MAIL_URL =
  "mailto:feedback@highpriority.com?subject=Shortcut Cheatsheet Creator";

interface LinkProps {
  url: string;
  children: JSX.Element;
  className?: string;
}

export const Link = ({ url, children, className }: LinkProps) => {
  const { cx, classes } = useStyles();

  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <span onClick={handleClick} className={cx(classes.link, className)}>
      {children}
    </span>
  );
};

const useStyles = makeStyles()(() => ({
  link: {
    cursor: "pointer",
  },
}));
