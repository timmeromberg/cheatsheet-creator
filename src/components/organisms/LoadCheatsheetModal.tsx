import React from "react";
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

  const presetFiles = import.meta.glob("./../../../public/assets/presets/*.*");

  const presetColumnLength = 7;

  const handlePresetClick = async (importPresetFunction: unknown) => {
    try {
      const module = await importPresetFunction();
      const content = module.default;
      onSave(content);
      closeModal(key);
    } catch (error) {
      console.error("Error loading preset:", error);
    }
  };

  const generateButtons = () => {
    return Object.entries(presetFiles).map(
      ([filePath, importPresetFunction]) => {
        // Extract the file name without the extension
        const fileName =
          filePath.split("/").pop()?.split(".").slice(0, -1).join("") || "";
        return (
          <LoadPresetButton
            key={fileName}
            title={fileName}
            // Pass the function to import the content of the preset file
            onClick={() => handlePresetClick(importPresetFunction)}
          />
        );
      }
    );
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

  const buttons = generateButtons();

  return (
    <ToolsModal modalKey={key}>
      <ModalForm>
        <h2 className={cx(classes.loadCheatsheetModalTitle)}>Select Preset</h2>
        <div className={cx(classes.loadCheatSheetModalButtons)}>
          <div className={cx(classes.loadCheatSheetModalButtonsColumn)}>
            {buttons.slice(0, presetColumnLength)}
          </div>
          <div className={cx(classes.loadCheatSheetModalButtonsColumn)}>
            {buttons.slice(presetColumnLength, presetColumnLength * 2)}
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
