import { createContext, useContext, useState } from "react";

export enum ModalKey {
  EDIT_CHEATSHEET_DESCRIPTION_MODAL = "EDIT_CHEATSHEET_DESCRIPTION_MODAL",
  EDIT_SHORTCUTS_MODAL = "EDIT_SHORTCUTS_MODAL",
  LOAD_CHEATSHEET_MODAL = "LOAD_CHEATSHEET_MODAL",
}

export interface ModalState {
  isOpen: boolean;
  data?: unknown;
  onSave?: unknown;
}

type ModalStates = Record<ModalKey, ModalState>;

interface ModalContextValue {
  getModalState: (key: ModalKey) => ModalState;
  openModal: (key: ModalKey, data?: unknown, onSave?: unknown) => void;
  closeModal: (key: ModalKey) => void;
}

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

interface ModalProviderProps {
  children: JSX.Element[];
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const initialModalStates: ModalStates = {
    [ModalKey.EDIT_CHEATSHEET_DESCRIPTION_MODAL]: { isOpen: false },
    [ModalKey.EDIT_SHORTCUTS_MODAL]: { isOpen: false },
    [ModalKey.LOAD_CHEATSHEET_MODAL]: { isOpen: false },
  };

  const [modalStates, setModalStates] = useState<ModalStates>(initialModalStates);

  const getModalState = (key: ModalKey) => modalStates[key];

  const openModal = (key: ModalKey, data?: unknown, onSave?: unknown) => {
    setModalStates((prevState) => ({
      ...prevState,
      [key]: { isOpen: true, data, onSave },
    }));
  };

  const closeModal = (key: ModalKey) => {
    setModalStates((prevState) => ({
      ...prevState,
      [key]: { isOpen: false },
    }));
  };

  return (
    <ModalContext.Provider value={{ getModalState, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
};
