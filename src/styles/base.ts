export const htmlFontSizePixels = 20;

export const baselinePixels = 40;

export const base = (multiplier = 1): string =>
  `${(baselinePixels / htmlFontSizePixels) * multiplier}rem`;

export const pixels = (rem: string): number =>
  +rem.replace("rem", "") * htmlFontSizePixels;
