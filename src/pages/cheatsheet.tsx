import Keyboard from "../components/organisms/Keyboard";
import { Cheatsheet, KeyShortcuts } from "../domain/Cheatsheet";
import { makeStyles } from "../styles/theme";
import { base } from "../styles/base";
import EditKeyShortcutsModal, {
  EditShortcutModalData,
} from "../components/organisms/EditKeyShortcutsModal";
import React, { useEffect, useRef, useState } from "react";
import { KeyboardLayout } from "../domain/KeyboardLayout";
import { NextPage } from "next";
import LocalDataStorage from "../api/LocalDataStorage";
import ApiLayer from "../api/ApiLayer";
import { ColorHex } from "../styles/colors";
import ToolHeader from "../components/organisms/ToolHeader";
import CheatsheetButtons from "../components/organisms/CheatsheetButtons";
import BrandCollaboration from "../components/molecules/BrandCollaboration";
import CheatsheetDescription from "../components/atoms/CheatsheetDescription";

const CheatsheetPage: NextPage = () => {
  const [keyboardLayout, setKeyboardLayout] = useState<KeyboardLayout>();
  const [cheatsheet, setCheatsheet] = useState<Cheatsheet>();
  const componentRef = useRef(null);

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

          <div ref={componentRef} className={cx(classes.cheatsheetKeyboard)}>
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

          <CheatsheetButtons downloadAsImageRef={componentRef} />
        </div>
      )}
    </>
  );
};

const useStyles = makeStyles<>()(() => ({
  cheatsheet: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  cheatsheetKeyboard: {
    width: base(47),
    padding: base(1),
    marginLeft: "auto",
    marginRight: "auto",
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
  },
  cheatsheetDescription: {
    color: ColorHex.LIGHT_GRAY,
    whiteSpace: "pre-wrap",
  },
}));

export default CheatsheetPage;
