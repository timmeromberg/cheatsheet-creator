import Keyboard from "../components/organisms/Keyboard";
import { Cheatsheet } from "../domain/Cheatsheet";
import { makeStyles } from "../styles/theme";
import { base } from "../styles/base";
import { useEffect, useState } from "react";
import { KeyboardLayout } from "../domain/KeyboardLayout";
import LocalDataStorage from "../api/LocalDataStorage";
import ApiLayer from "../api/ApiLayer";
import { ColorHex } from "../styles/colors";
import ToolsHeader from "../components/organisms/ToolsHeader";
import CheatsheetButtons from "../components/organisms/CheatsheetButtons";
import BrandCollaboration from "../components/molecules/BrandCollaboration";
import CheatsheetDescriptionComponent from "../components/atoms/CheatsheetDescriptionComponent";
import { ModalKey, useModalContext } from "../hooks/ModalProvider";

export const AMOUNT_OF_KEY_SPACE = 23;

const CheatsheetPage = () => {
  const [keyboardLayout, setKeyboardLayout] = useState<KeyboardLayout>();
  const [cheatsheet, setCheatsheet] = useState<Cheatsheet>();

  const { openModal } = useModalContext();

  const downloadId = "cheatsheet";

  useEffect(() => {
    async function fetchData() {
      const apiLayer = new ApiLayer();
      const keyboardLayout = apiLayer.fetchKeyboardLayout();
      setKeyboardLayout(keyboardLayout);

      const localDataStorage = new LocalDataStorage();
      const cheatsheet = await localDataStorage.fetchCheatsheet();
      console.log(cheatsheet?.keyShortcuts.length == 0);
      setCheatsheet(cheatsheet);

      if (cheatsheet?.keyShortcuts.length == 0) {
        openModal(ModalKey.LOAD_CHEATSHEET_MODAL, null, saveCheatsheet);
      }
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
          <ToolsHeader title={"Shortcut Cheatsheet Creator"} />

          <div id={downloadId} className={cx(classes.cheatsheetKeyboard)}>
            <Keyboard
              keyboardLayout={keyboardLayout}
              cheatsheet={cheatsheet}
              saveCheatsheet={saveCheatsheet}
            />

            <div
              className={cx(classes.cheatsheetDescriptionBrandCollaboration)}
            >
              <CheatsheetDescriptionComponent
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

  cheatsheetDescriptionBrandCollaboration: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: base(2),
  },
}));

export default CheatsheetPage;
