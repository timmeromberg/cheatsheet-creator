import Keyboard from "../components/organisms/Keyboard";
import { Cheatsheet } from "../domain/Cheatsheet";
import { makeStyles } from "../styles/theme";
import { base } from "../styles/base";
import React, { useEffect, useState } from "react";
import { KeyboardLayout } from "../domain/KeyboardLayout";
import { NextPage } from "next";
import LocalDataStorage from "../api/LocalDataStorage";
import ApiLayer from "../api/ApiLayer";
import { ColorHex } from "../styles/colors";
import ToolHeader from "../components/organisms/ToolHeader";
import CheatsheetButtons from "../components/organisms/CheatsheetButtons";
import BrandCollaboration from "../components/molecules/BrandCollaboration";
import CheatsheetDescription from "../components/atoms/CheatsheetDescription";

export const AMOUNT_OF_KEY_SPACE = 24;

const CheatsheetPage: NextPage = () => {
  const [keyboardLayout, setKeyboardLayout] = useState<KeyboardLayout>();
  const [cheatsheet, setCheatsheet] = useState<Cheatsheet>();
  const downloadId = "cheatsheet";

  useEffect(() => {
    async function fetchData() {
      const apiLayer = new ApiLayer();
      const keyboardLayout = apiLayer.fetchKeyboardLayout();
      setKeyboardLayout(keyboardLayout);

      const localDataStorage = new LocalDataStorage();
      const cheatsheet = await localDataStorage.fetchCheatsheet();
      setCheatsheet(cheatsheet);
    }
    fetchData().catch((error) => {
      console.error("Error fetching data:", error);
    });
  }, []);

  const saveCheatsheet = (cheatsheet: Cheatsheet) => {
    const localDataStorage = new LocalDataStorage();
    localDataStorage
      .saveCheatsheet(cheatsheet)
      .catch((error) => {
        console.error("Error saving data:", error);
        throw error;
      })
      .then(() => {
        setCheatsheet(cheatsheet);
      });
  };

  const { classes, cx } = useStyles();

  return (
    <>
      {keyboardLayout && cheatsheet && (
        <div className={cx(classes.cheatsheet)}>
          <ToolHeader title={"Shortcut Cheatsheet Creator"} />

          <div id={downloadId} className={cx(classes.cheatsheetKeyboard)}>
            <Keyboard
              keyboardLayout={keyboardLayout}
              cheatsheet={cheatsheet}
              saveCheatsheet={saveCheatsheet}
            />

            <div
              className={cx(classes.cheatsheetDescriptionBrandCollaboration)}
            >
              <CheatsheetDescription
                cheatsheet={cheatsheet}
                saveCheatsheet={saveCheatsheet}
              />
              <BrandCollaboration color={ColorHex.BLACK} />
            </div>
          </div>

          <CheatsheetButtons
            cheatsheet={cheatsheet}
            downloadId={downloadId}
            onSaveCheatsheet={saveCheatsheet}
          />
        </div>
      )}
    </>
  );
};

const useStyles = makeStyles()(() => ({
  cheatsheet: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  cheatsheetKeyboard: {
    width: "100%",
    paddingLeft: base(0.5),
    paddingRight: base(0.5),
    paddingTop: base(1),
    paddingBottom: base(0.5),
    backgroundColor: ColorHex.WHITE,
  },
  cheatsheetButtonsLogo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: base(0.5),
    paddingLeft: base(0.5),
    border: "5px solid " + ColorHex.MIDNIGHT_BLUE,
  },
  cheatsheetLogo: {
    maxHeight: base(3),
    padding: base(0.5),
  },
  cheatsheetButtons: {
    padding: base(0.5),
  },
  cheatsheetDescriptionBrandCollaboration: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: base(2),
  },
  cheatsheetDescription: {
    color: ColorHex.LIGHT_GRAY,
    whiteSpace: "pre-wrap",
  },
}));

export default CheatsheetPage;
