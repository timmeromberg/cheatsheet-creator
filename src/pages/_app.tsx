import { createEmotionSsrAdvancedApproach } from "tss-react/next/pagesDir";
import GlobalStylesComponent from "../components/GlobalStylesComponent";

const { augmentDocumentWithEmotionCache, withAppEmotionCache } =
  createEmotionSsrAdvancedApproach({ key: "css" });

export { augmentDocumentWithEmotionCache };

const CustomApp = ({ Component, pageProps }) => {
  return (
    <GlobalStylesComponent>
      <Component {...pageProps} />
    </GlobalStylesComponent>
  );
};

export default withAppEmotionCache(CustomApp);
