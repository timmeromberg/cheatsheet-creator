import React from "react";
import { makeStyles } from "../../styles/theme";
import { ColorHex } from "../../styles/colors";
import { FontWeight } from "../../styles/fontType";

interface CollaborationIndicatorProps {
  color: ColorHex.BLACK | ColorHex.WHITE;
}

const CollaborationIndicator = ({ color }: CollaborationIndicatorProps) => {
  const { classes, cx } = useStyles({ color: color });
  return <h4 className={cx(classes.collaborationIndicator)}>X</h4>;
};

const useStyles = makeStyles<{
  color: ColorHex;
}>()((_, { color }) => {
  return {
    collaborationIndicator: {
      color: color,
      fontWeight: FontWeight.LIGHT,
    },
  };
});

export default CollaborationIndicator;
