import { createMakeAndWithStyles } from "tss-react";

function useTheme() {
  return {
    primaryColor: "#32CD32",
  };
}

export const getStyles = () => {
  const { makeStyles, withStyles, useStyles } = createMakeAndWithStyles({
    useTheme,
  });
  return makeStyles;
};

export const { makeStyles, withStyles, useStyles } = createMakeAndWithStyles({
  useTheme,
});
