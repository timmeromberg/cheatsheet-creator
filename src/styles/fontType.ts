import { base } from "./base";
import { m, mobileL } from "./queries";

export const bodyFontSize = base(0.62);

const Lato = {
  fontFamily: "Lato, sans-serif",
  fontWeight: 700,
  fontStyle: "normal",
};

export const h1 = {
  ...Lato,
  fontSize: base(2.9),
  lineHeight: base(3.3),
  [m]: {
    fontSize: base(2.4),
    lineHeight: base(2.9),
  },
  [mobileL]: {
    fontSize: base(2),
    lineHeight: base(2.5),
  },
};

export const h2 = {
  ...Lato,
  fontSize: base(1.3),
  lineHeight: base(2.4),
};

export const h3 = {
  ...Lato,
  fontSize: base(1.1),
  lineHeight: base(1.2),
  fontWeight: 700,
};

export const h4 = {
  ...Lato,
  fontSize: base(0.7),
  lineHeight: base(0.9),
  fontWeight: 500,
  [m]: {
    fontSize: base(0.7),
    lineHeight: base(1.0),
  },
};

export const body = {
  fontSize: bodyFontSize,
  lineHeight: base(1),
};
