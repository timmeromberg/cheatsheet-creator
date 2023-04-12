export interface Cheatsheet {
  keyShortcuts: KeyShortcuts[];
  description: string;
}

export interface KeyShortcuts {
  id: string;
  keyOnly: string;
  shift: string;
  ctrl: string;
  ctrlShift: string;
  alt: string;
}

export const createEmptyKeyShortcuts = (id: string): KeyShortcuts => {
  return {
    id: id,
    keyOnly: "",
    shift: "",
    ctrl: "",
    ctrlShift: "",
    alt: "",
  };
};
