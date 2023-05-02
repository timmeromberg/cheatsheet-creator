import React, { useState, useEffect } from "react";
import { makeStyles } from "../styles/theme";
import { base, pixels } from "../styles/base";
import { m } from "../styles/queries";
import { ColorHex } from "../styles/colors";
import { ButtonSize, ButtonType } from "./atoms/Button";

interface WindowWidthCheckProps {
  minWidth: number;
  children: JSX.Element;
}

const WindowWidthCheck = ({ children, minWidth }: WindowWidthCheckProps) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { classes, cx } = useStyles();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth >= minWidth ? (
        children
      ) : (
        <div>
          <div className={cx(classes.windowWidthCheckTopTriangle)} />
          <div className={cx(classes.windowWidthCheck)}>
            This app is not suitable for small screens (such as mobile phones).
          </div>
          <div className={cx(classes.windowWidthCheckBottomTriangle)} />
        </div>
      )}
    </>
  );
};

const useStyles = makeStyles()((_) => ({
  windowWidthCheck: {
    color: ColorHex.WHITE,
    textAlign: "center",
    paddingTop: base(7),
    fontSize: base(0.7),
    lineHeight: base(1),
    index: 1,
  },
  windowWidthCheckTopTriangle: {
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderWidth: "0 " + pixels(base(10)) + "px " + pixels(base(2)) + "px 0",
    borderColor: "transparent " + ColorHex.AMBER + " transparent transparent",
    right: 0,
    top: 0,
    position: "absolute",
  },
  windowWidthCheckBottomTriangle: {
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderWidth: pixels(base(10)) + "px 0 0 " + pixels(base(2)) + "px",
    borderColor: "transparent transparent transparent " + ColorHex.AMBER,
    left: 0,
    bottom: 0,
    position: "absolute",
  },
}));

export default WindowWidthCheck;
