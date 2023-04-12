import { base, baselinePixels, htmlFontSizePixels } from "./base";
import { ColorHex } from "./colors";
import { body, h1, h2, h3, h4 } from "./fontType";
import queries from "./queries";

const globalStyles = {
  "body, p, h1, h2, h3, h4": {
    margin: 0,
  },
  "*": {
    boxSizing: "border-box",
  },
  ":root": {
    colorScheme: "light only",
  },
  html: {
    margin: 0,
    backgroundColor: ColorHex.BLACK,
    lineHeight: `${baselinePixels}px`,
    fontSize: `${htmlFontSizePixels}px`,
    [queries.xxl]: {
      fontSize: htmlFontSizePixels,
    },
    [queries.xl]: {
      fontSize: htmlFontSizePixels,
    },
    [queries.l]: {
      fontSize: htmlFontSizePixels * 0.85,
    },
    [queries.m]: {
      fontSize: htmlFontSizePixels * 0.8,
    },
    [queries.s]: {
      fontSize: htmlFontSizePixels * 0.8,
    },
    [queries.xs]: {
      fontSize: htmlFontSizePixels * 0.8,
    },
  },
  h1,
  h2,
  h3,
  h4,
  p: {
    ...body,
  },
  ol: {
    padding: `0 0 0 ${base()}`,
    margin: `0 0 ${base()}, 0}`,
  },
  ul: {
    padding: `0 0 0 ${base()}`,
    margin: `0 0 ${base()}, 0}`,
  },
  li: {
    ...body,
  },
};

export default globalStyles;
