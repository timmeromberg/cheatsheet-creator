export interface KeyboardLayout {
  layoutRows: LayoutRow[];
}

export interface LayoutRow {
  layoutKeys: (LayoutFiller | LayoutKey)[];
}

export interface LayoutKey {
  label: string;
  grow?: number;
}

export interface LayoutFiller {
  grow?: number;
}

export function isLayoutKey(object: any): object is LayoutKey {
  return "label" in object;
}
