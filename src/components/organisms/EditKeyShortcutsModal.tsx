import { useState } from "react";
import { KeyShortcut, KeyShortcuts } from "../../domain/Cheatsheet";
import Button, { ButtonSize } from "../atoms/Button";
import ModalButtons from "../molecules/ModalButtons";
import ModalForm from "../molecules/ModalForm";
import ToolsModal from "../templates/ToolsModal";
import { makeStyles } from "../../styles/theme";
import { base } from "../../styles/base";
import { ModalKey, useModalContext } from "../../hooks/ModalProvider";
import { FontWeight } from "../../styles/fontType";
import KeyShortcutModalInput, {
  ModalLabeledInputSize,
} from "../molecules/KeyShortcutModalInput.tsx";

export interface EditShortcutModalData {
  label: string;
  keyShortcuts: KeyShortcuts;
}

const EditKeyShortcutsModal = (): JSX.Element => {
  const key = ModalKey.EDIT_SHORTCUTS_MODAL;
  const { closeModal, getModalState } = useModalContext();
  const modalState = getModalState(key);
  const data = modalState.data as EditShortcutModalData;
  const keyShortcuts = data.keyShortcuts;
  const label = data.label;
  const onSave = modalState.onSave as (
    id: string,
    keyOnly: KeyShortcut,
    shift: KeyShortcut,
    shiftCtrl: KeyShortcut,
    ctrl: KeyShortcut,
    ctrlAlt: KeyShortcut,
    alt: KeyShortcut,
    altShift: KeyShortcut
  ) => void;

  const [keyOnly, setKeyOnly] = useState(keyShortcuts.keyOnly);
  const [shift, setShift] = useState(keyShortcuts.shift);
  const [shiftCtrl, setShiftCtrl] = useState(keyShortcuts.shiftCtrl);
  const [ctrl, setCtrl] = useState(keyShortcuts.ctrl);
  const [ctrlAlt, setCtrlAlt] = useState(keyShortcuts.ctrlAlt);
  const [alt, setAlt] = useState(keyShortcuts.alt);
  const [altShift, setAltShift] = useState(keyShortcuts.altShift);

  const { cx, classes } = useStyles();

  return (
    <ToolsModal modalKey={ModalKey.EDIT_SHORTCUTS_MODAL}>
      <ModalForm className={cx(classes.editShortcutsModal)}>
        <KeyShortcutModalInput
          label={label}
          keyShortcut={keyOnly}
          onChangeKeyShortcut={setKeyOnly}
          maxLength={43 - keyShortcuts.id.length}
          size={ModalLabeledInputSize.DOUBLE}
        />

        <div className={cx(classes.editShortcutsModalGrouping)}>
          <KeyShortcutModalInput
            label={"Ctrl"}
            keyShortcut={ctrl}
            onChangeKeyShortcut={setCtrl}
            maxLength={42}
          />
          <KeyShortcutModalInput
            labelClassName={cx(classes.editShortcutsModalLabelThin)}
            label={"Ctrl + Shift"}
            keyShortcut={shiftCtrl}
            onChangeKeyShortcut={setShiftCtrl}
            maxLength={42}
          />
          <KeyShortcutModalInput
            labelClassName={cx(classes.editShortcutsModalLabelThin)}
            label={"Ctrl + Alt"}
            keyShortcut={ctrlAlt}
            onChangeKeyShortcut={setCtrlAlt}
            maxLength={42}
          />
        </div>

        <div className={cx(classes.editShortcutsModalGrouping)}>
          <KeyShortcutModalInput
            label={"Shift"}
            keyShortcut={shift}
            onChangeKeyShortcut={setShift}
            maxLength={42}
          />
          <KeyShortcutModalInput
            labelClassName={cx(classes.editShortcutsModalLabelThin)}
            label={"Shift + Alt"}
            keyShortcut={altShift}
            onChangeKeyShortcut={setAltShift}
            maxLength={42}
          />
        </div>

        <div className={cx(classes.editShortcutsModalGrouping)}>
          <KeyShortcutModalInput
            label={"Alt"}
            keyShortcut={alt}
            onChangeKeyShortcut={setAlt}
            maxLength={42}
          />
        </div>
      </ModalForm>

      <ModalButtons>
        <Button
          size={ButtonSize.NORMAL}
          label={"Save"}
          onClick={() =>
            onSave(
              keyShortcuts.id,
              keyOnly,
              shift,
              shiftCtrl,
              ctrl,
              ctrlAlt,
              alt,
              altShift
            )
          }
        />
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
  editShortcutsModal: {
    paddingTop: base(1),
    paddingRight: base(1),
  },
  editShortcutsModalGrouping: {
    display: "flex",
    flexDirection: "column",
    gap: base(0.2),
  },
  editShortcutsModalLabelThin: {
    fontWeight: FontWeight.LIGHT + " " + "!important",
  },
}));

export default EditKeyShortcutsModal;
