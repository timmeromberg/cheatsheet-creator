import React, { useEffect, useState } from "react";
import Button, { ButtonSize } from "../atoms/Button";
import ModalButtons from "../molecules/ModalButtons";
import ToolsModal from "../templates/ToolsModal";
import { ModalKey, useModalContext } from "../../hooks/ModalProvider";
import { Cheatsheet } from "../../domain/Cheatsheet";
import ModalForm from "../molecules/ModalForm";
import { makeStyles } from "../../styles/theme";
import { ColorHex } from "../../styles/colors";
import ModalFileInput from "../atoms/ModalFileInput";
import { base } from "../../styles/base";
import LoadPresetButton from "../molecules/LoadPresetButton";

const EditKeyShortcutsModal = (): JSX.Element => {
  const key = ModalKey.LOAD_CHEATSHEET_MODAL;
  const { closeModal, getModalState } = useModalContext();
  const modalState = getModalState(key);
  const onSave = modalState.onSave as (cheatsheet: Cheatsheet) => void;
  const { cx, classes } = useStyles();
  const [presets, setPresets] = useState<string[]>([]);

  const presetColumnLength = 7;

  const port = window.location.port;

  const assetsPath =
    (port != "5175" ? "/cheatsheet/" : "") + "/assets/presets/";

  useEffect(() => {
    const fetchPresets = async () => {
      try {
        const response = await fetch(assetsPath + "/files.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const files: string[] = await response.json();
        setPresets(files);
      } catch (error) {
        console.error("Error fetching presets:", error);
      }
    };

    fetchPresets().then(() => {
      return "";
    });
  }, []);

  const handlePresetClick = async (presetName: string) => {
    try {
      const response = await fetch(assetsPath + `/${presetName}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const cheatsheet = await response.json();
      // Presumably you would do something with the cheatsheet here
      console.log("Loaded Cheatsheet:", cheatsheet);
      onSave(cheatsheet);
      closeModal(key);
    } catch (error) {
      console.error("Error loading preset:", error);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        try {
          const cheatsheet = JSON.parse(result) as Cheatsheet;
          onSave(cheatsheet);
          closeModal(key);
        } catch (error) {
          console.error("Error parsing JSON", error);
          alert(
            "Error parsing JSON. Please ensure the file contains valid JSON."
          );
        }
      };
      reader.readAsText(file);
    }
  };

  const presetButtons = presets.map((presetName, index) => (
    <LoadPresetButton
      key={index}
      title={presetName.replace(".json", "")}
      onClick={() => handlePresetClick(presetName)}
    />
  ));

  return (
    <ToolsModal modalKey={key}>
      <ModalForm>
        <h2 className={cx(classes.loadCheatsheetModalTitle)}>Select Preset</h2>
        <div className={cx(classes.loadCheatSheetModalButtons)}>
          <div className={cx(classes.loadCheatSheetModalButtonsColumn)}>
            {presetButtons.slice(0, presetColumnLength)}
          </div>
          <div className={cx(classes.loadCheatSheetModalButtonsColumn)}>
            {presetButtons.slice(presetColumnLength, presetColumnLength * 2)}
          </div>
        </div>

        <h2 className={cx(classes.loadCheatsheetModalTitle)}>Upload Preset</h2>
        <ModalFileInput onChange={handleFileUpload} />
      </ModalForm>
      <ModalButtons>
        <Button
          size={ButtonSize.NORMAL}
          label={"Cancel"}
          onClick={() => closeModal(key)}
        />
      </ModalButtons>
    </ToolsModal>
  );
};

const useStyles = makeStyles()(() => ({
  loadCheatsheetModalTitle: {
    color: ColorHex.WHITE,
    zIndex: "10",
  },
  loadCheatSheetModalButtons: {
    display: "flex",
    flexDirection: "row",
    gap: base(0.1),
  },
  loadCheatSheetModalButtonsColumn: {
    display: "flex",
    flexDirection: "column",
    gap: base(0.1),
    width: "100%",
  },
}));

export default EditKeyShortcutsModal;
