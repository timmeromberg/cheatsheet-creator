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
  keyOnly: KeyShortcut;
  shift: KeyShortcut;
  shiftCtrl: KeyShortcut;
  ctrl: KeyShortcut;
  ctrlAlt: KeyShortcut;
  alt: KeyShortcut;
  altShift: KeyShortcut;
}

export interface KeyShortcut {
  value: string;
  isBold: boolean;
  isSmall: boolean;
}

export const createEmptyKeyShortcuts = (id: string): KeyShortcuts => {
  return {
    id: id,
    keyOnly: createEmptyKeyShortcut(),
    shift: createEmptyKeyShortcut(),
    shiftCtrl: createEmptyKeyShortcut(),
    ctrl: createEmptyKeyShortcut(),
    ctrlAlt: createEmptyKeyShortcut(),
    alt: createEmptyKeyShortcut(),
    altShift: createEmptyKeyShortcut(),
  };
};

export const createEmptyKeyShortcut = (): KeyShortcut => {
  return {
    value: "",
    isBold: false,
    isSmall: false,
  };
};

export const createEmptyCheatsheet = (): Cheatsheet => {
  return {
    keyShortcuts: [],
    description: {
      shift: "",
      ctrl: "",
      alt: "",
      notes: "",
    },
  };
};
