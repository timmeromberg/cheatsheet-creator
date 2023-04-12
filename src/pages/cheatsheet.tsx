import Keyboard from "../components/Keyboard";
import { Cheatsheet, KeyShortcuts } from "../domain/Cheatsheet";
import { makeStyles } from "../styles/theme";
import { base } from "../styles/base";
import EditKeyShortcutsModal from "../components/EditKeyShortcutsModal";
import React, { useEffect, useRef, useState } from "react";
import exportHtmlAsImage from "../application/exportHtmlAsImage";
import { KeyboardLayout } from "../domain/KeyboardLayout";
import { NextPage } from "next";
import LocalDataStorage from "../api/LocalDataStorage";
import ApiLayer from "../api/ApiLayer";
import { ColorHex } from "../styles/colors";
import EditDescriptionModal from "../components/EditDescriptionModal";
import Button from "../components/Button";

const CheatsheetPage: NextPage = () => {
  const [keyboardLayout, setKeyboardLayout] = useState<KeyboardLayout>();
  const [cheatsheet, setCheatsheet] = useState<Cheatsheet>();
  const componentRef = useRef(null);
  const [isEditKeyShortCutsModalOpen, setIsEditKeyShortCutsModalOpen] =
    useState(false);
  const [editKeyShortcutsModalData, setEditKeyShortcutsModalData] =
    useState<KeyShortcuts>(null);

  const [isEditDescriptionModalOpen, setIsEditDescriptionModalOpen] =
    useState(false);

  useEffect(() => {
    async function fetchData() {
      const localDataStorage = new LocalDataStorage();
      const apiLayer = new ApiLayer();
      const cheatsheet = await localDataStorage.fetchCheatsheet();
      const keyboardLayout = apiLayer.fetchKeyboardLayout();
      setCheatsheet(cheatsheet);
      setKeyboardLayout(keyboardLayout);
    }

    fetchData().catch((error) => {
      console.error("Error fetching data:", error);
    });
  }, []);

  const handleOpenEditShortcutModal = (keyShortcuts: KeyShortcuts) => {
    setIsEditKeyShortCutsModalOpen(true);
    setEditKeyShortcutsModalData(keyShortcuts); // Replace this with the data you want to pass to the modal
  };

  const onSaveKeyShortcuts = (updatedKeyShortcut: KeyShortcuts) => {
    if (!cheatsheet) return;

    // Find the index of the KeyShortcuts object to update
    const index = cheatsheet.keyShortcuts.findIndex(
      (shortcut) => shortcut.id === updatedKeyShortcut.id
    );
    const keyShortcutsList = [...cheatsheet.keyShortcuts];

    if (index >= 0) {
      keyShortcutsList[index] = { ...updatedKeyShortcut };
    } else {
      keyShortcutsList.push({ ...updatedKeyShortcut });
    }

    const newCheatsheet: Cheatsheet = {
      keyShortcuts: keyShortcutsList,
      description: cheatsheet.description,
    };

    saveCheatsheet(newCheatsheet);
    setIsEditKeyShortCutsModalOpen(false);
  };

  const onSaveDescription = (description: string) => {
    if (!cheatsheet) return;

    const newCheatsheet: Cheatsheet = {
      keyShortcuts: [...cheatsheet.keyShortcuts],
      description: description,
    };
    saveCheatsheet(newCheatsheet);
    setIsEditDescriptionModalOpen(false);
  };

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
          <h2 className={cx(classes.cheatsheetTitle)}>
            Keyboard Shortcut Cheatsheet Creator{" "}
          </h2>

          <div ref={componentRef} className={cx(classes.cheatsheetKeyboard)}>
            <Keyboard
              openEditShortcutModal={(keyShortcuts: KeyShortcuts) =>
                handleOpenEditShortcutModal(keyShortcuts)
              }
              keyboardLayout={keyboardLayout}
              keyboardShortcuts={cheatsheet}
            />

            <div className={cx(classes.cheatsheetButtonsLogo)}>
              <Button
                label={"Download as an Image"}
                onClick={() => exportHtmlAsImage(componentRef)}
              />

              <div onClick={() => setIsEditDescriptionModalOpen(true)}>
                <h4 className={cx(classes.cheatsheetDescription)}>
                  {cheatsheet.description}
                </h4>
              </div>

              <img
                className={cx(classes.cheatsheetLogo)}
                alt="High Priority Logo"
                src={
                  "/images/High-Priority-Game-Art-Logo-Name-Horz-AlphaWhite-2400x680-1-640x181.png"
                }
              />
            </div>
          </div>
        </div>
      )}
      {isEditKeyShortCutsModalOpen && (
        <EditKeyShortcutsModal
          isOpen={isEditKeyShortCutsModalOpen}
          onRequestClose={() => setIsEditKeyShortCutsModalOpen(false)}
          onSave={onSaveKeyShortcuts}
          data={editKeyShortcutsModalData}
        />
      )}

      {isEditDescriptionModalOpen && cheatsheet && (
        <EditDescriptionModal
          isOpen={isEditDescriptionModalOpen}
          onRequestClose={() => setIsEditDescriptionModalOpen(false)}
          onSave={onSaveDescription}
          data={cheatsheet.description}
        />
      )}
    </>
  );
};

const useStyles = makeStyles<>()(() => ({
  cheatsheet: {
    paddingTop: base(0.5),
    display: "flex",
    flexDirection: "column",
    gap: base(0.5),
    justifyContent: "center",
    alignItems: "center",
  },
  cheatsheetTitle: {
    color: ColorHex.AMBER,
  },
  cheatsheetKeyboard: {
    width: base(33),
    marginLeft: "auto",
    marginRight: "auto",
    padding: base(0.5),
    backgroundColor: ColorHex.DARK_BLUE,
    border: "3px solid " + ColorHex.AMBER,
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
  cheatsheetDescription: {
    color: ColorHex.GRAY,
    whiteSpace: "pre-wrap",
  },
}));

export default CheatsheetPage;
