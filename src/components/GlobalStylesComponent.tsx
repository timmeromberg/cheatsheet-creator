import { GlobalStyles } from "tss-react";
import { ColorHex } from "../styles/colors";
import { base, baselinePixels, htmlFontSizePixels } from "../styles/base";
import queries from "../styles/queries";
import { body, h1, h2, h3, h4 } from "../styles/fontType";

interface GlobalStylesComponentProps {
  children: JSX.Element;
}

const GlobalStylesComponent = ({ children }: GlobalStylesComponentProps) => {
  return (
    <>
      <GlobalStyles
        styles={{
          "body, p, h1, h2, h3, h4": {
            margin: 0,
          },
          "*": {
            boxSizing: "border-box",
          },
          ":root": {
            colorScheme: "light only",
          },
          body: {
            fontFamily: "Lato, sans-serif",
            lineHeight: base(0.5),
          },
          html: {
            margin: 0,
            backgroundColor: ColorHex.DARK_BLUE,
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
        }}
      />
      {children}
    </>
  );
};

export default GlobalStylesComponent;
