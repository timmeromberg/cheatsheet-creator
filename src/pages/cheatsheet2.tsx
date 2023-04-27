import { makeStyles } from "../styles/theme";
import React from "react";
import { NextPage } from "next";
import { ColorHex } from "../styles/colors";
import { base } from "../styles/base";

const Cheatsheet2Page: NextPage = () => {
  const { cx, classes } = useStyles();

  return (
    <div className={cx(classes.keyboard)}>
      <div className={cx(classes.keyboardColumn)}>
        <div className={cx(classes.growKey)}>
          <div className={cx(classes.keyContent)}>0G</div>
        </div>
        <div className={cx(classes.key)}>
          <div className={cx(classes.keyContent)}>1</div>
        </div>
        <div className={cx(classes.key)}>
          <div className={cx(classes.keyContent)}>2</div>
        </div>
        <div className={cx(classes.key)}>
          <div className={cx(classes.keyContent)}>3</div>
        </div>
        <div className={cx(classes.key)}>
          <div className={cx(classes.keyContent)}>4</div>
        </div>
        <div className={cx(classes.growKey)}>
          <div className={cx(classes.keyContent)}>5G</div>
        </div>
      </div>

      <div className={cx(classes.keyboardColumn)}>
        <div className={cx(classes.key)}>
          <div className={cx(classes.keyContent)}>A</div>
        </div>
        <div className={cx(classes.key)}>
          <div className={cx(classes.keyContent)}>B</div>
        </div>
        <div className={cx(classes.growKey)}>
          <div className={cx(classes.keyContent)}>CG</div>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles()(() => ({
  keyboard: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: ColorHex.WHITE,
    gap: base(1),
  },
  keyboardColumn: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
  },
  key: {
    border: "solid black",
    backgroundColor: ColorHex.WHITE,
    width: 100 / 15 + "vw",
    height: 100 / 15 + "vw",
  },
  growKey: {
    border: "solid black",
    backgroundColor: ColorHex.WHITE,
    flexGrow: 1,
  },
  keyContent: {},
}));

export default Cheatsheet2Page;
