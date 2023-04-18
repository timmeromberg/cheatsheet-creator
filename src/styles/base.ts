export const htmlFontSizePixels = 22;

export const baselinePixels = 36;

export const base = (multiplier = 1): string =>
  `${(baselinePixels / htmlFontSizePixels) * multiplier}rem`;

export const pixels = (rem: string): number =>
  +rem.replace("rem", "") * htmlFontSizePixels;
