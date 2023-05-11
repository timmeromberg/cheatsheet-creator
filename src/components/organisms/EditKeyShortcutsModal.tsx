import { useState } from "react";
import { KeyShortcuts } from "../../domain/Cheatsheet";
import ModalLabeledInput, {
  ModalLabeledInputSize,
} from "../molecules/ModalLabeledInput";
import Button, { ButtonSize } from "../atoms/Button";
import ModalButtons from "../molecules/ModalButtons";
import ModalForm from "../molecules/ModalForm";
import ToolsModal from "../templates/ToolsModal";
import { makeStyles } from "../../styles/theme";
import { base } from "../../styles/base";
import { ModalKey, useModalContext } from "../../hooks/ModalProvider";
import { FontWeight } from "../../styles/fontType";

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
    keyOnly: string,
    shift: string,
    shiftCtrl: string,
    ctrl: string,
    ctrlAlt: string,
    alt: string,
    altShift: string
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
        <ModalLabeledInput
          label={label}
          value={keyOnly}
          onChange={setKeyOnly}
          maxLength={43 - keyShortcuts.id.length}
          size={ModalLabeledInputSize.DOUBLE}
        />

        <div className={cx(classes.editShortcutsModalGrouping)}>
          <ModalLabeledInput
            label={"Shift"}
            value={shift}
            onChange={setShift}
            maxLength={42}
          />
          <ModalLabeledInput
            labelClassName={cx(classes.editShortcutsModalLabelThin)}
            label={"Shift + Ctrl"}
            value={shiftCtrl}
            onChange={setShiftCtrl}
            maxLength={42}
          />
        </div>

        <div className={cx(classes.editShortcutsModalGrouping)}>
          <ModalLabeledInput
            label={"Ctrl"}
            value={ctrl}
            onChange={setCtrl}
            maxLength={42}
          />
          <ModalLabeledInput
            labelClassName={cx(classes.editShortcutsModalLabelThin)}
            label={"Ctrl + Alt"}
            value={ctrlAlt}
            onChange={setCtrlAlt}
            maxLength={42}
          />
        </div>

        <div className={cx(classes.editShortcutsModalGrouping)}>
          <ModalLabeledInput
            label={"Alt"}
            value={alt}
            onChange={setAlt}
            maxLength={42}
          />
          <ModalLabeledInput
            labelClassName={cx(classes.editShortcutsModalLabelThin)}
            label={"Alt + Shift"}
            value={altShift}
            onChange={setAltShift}
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
