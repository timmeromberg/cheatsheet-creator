export interface Cheatsheet {
  keyShortcuts: KeyShortcuts[];
  description: CheatsheetDescription;
}

export interface CheatsheetDescription {
  shift: string;
  ctrl: string;
  alt: string;
  notes: string;
}

export interface KeyShortcuts {
  id: string;
  keyOnly: string;
  shift: string;
  shiftCtrl: string;
  ctrl: string;
  ctrlAlt: string;
  alt: string;
  altShift: string;
}

export const createEmptyKeyShortcuts = (id: string): KeyShortcuts => {
  return {
    id: id,
    keyOnly: "",
    shift: "",
    shiftCtrl: "",
    ctrl: "",
    ctrlAlt: "",
    alt: "",
    altShift: "",
  };
};

export const createEmptyCheatsheet = (): Cheatsheet => {
  return {
    keyShortcuts: [],
    description: {
      shift: '',
      ctrl: '',
      alt: '',
      notes: ''
    }
  }
}
