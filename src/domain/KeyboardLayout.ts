export interface KeyboardLayout {
  layoutColumns: LayoutColumn[];
}

export interface LayoutColumn {
  layoutRows: LayoutRow[];
}

export interface LayoutRow {
  layoutKeys: (LayoutFiller | LayoutKey)[];
}

export enum LayoutKeyWidth {
  NORMAL = "NORMAL",
  DOUBLE = "DOUBLE",
}

export enum LayoutKeyHeight {
  NORMAL = "NORMAL",
  DOUBLE = "DOUBLE",
}

export interface LayoutKey {
  id: string;
  label: string;
  grow?: number;
  width?: LayoutKeyWidth;
  height?: LayoutKeyHeight;
}

export interface LayoutFiller {
  size?: number;
}

export function isLayoutKey(
  object: LayoutKey | LayoutFiller
): object is LayoutKey {
  return "label" in object;
}
