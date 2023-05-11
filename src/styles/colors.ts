export enum ColorHex {
  AMBER = "#ffbf40",
  LIGHT_BLUE = "#2d304c",
  DARK_BLUE = "#23253b",
  MIDNIGHT_BLUE = "#1a1b2b",
  WHITE = "#FFFFFF",
  LIGHT_GRAY = "#999999",
  DARK_GRAY = "#666666",
  BLACK = "#000000",
  GUNMETAL = "#323232",
  MAROON = "#800000",
  LIME_GREEN = "#008000",
  NAVY_BLUE = "#000080",
  DIM_GRAY = "#666666",
  BRIGHT_RED = "#ff4060",
}

export function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
