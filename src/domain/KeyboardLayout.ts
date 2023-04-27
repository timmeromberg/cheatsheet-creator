export interface KeyboardLayout {
  layoutColumns: LayoutColumn[];
}

export interface LayoutColumn {
  layoutRows: LayoutRow[];
}

export interface LayoutRow {
  layoutKeys: (LayoutFiller | LayoutKey)[];
}

export interface LayoutKey {
  id: string;
  label: string;
  grow?: number;
  size?: number;
}

export interface LayoutFiller {
  size?: number;
}

export function isLayoutKey(
  object: LayoutKey | LayoutFiller
): object is LayoutKey {
  return "label" in object;
}
