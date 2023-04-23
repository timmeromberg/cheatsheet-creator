import { createEmotionSsrAdvancedApproach } from "tss-react/next/pagesDir";
import GlobalStylesComponent from "../components/GlobalStylesComponent";
import { ModalProvider } from "../hooks/ModalProvider";
import { Modals } from "../components/Modals";

const { augmentDocumentWithEmotionCache, withAppEmotionCache } =
  createEmotionSsrAdvancedApproach({ key: "css" });

export { augmentDocumentWithEmotionCache };

const CustomApp = ({ Component, pageProps }) => {
  return (
    <GlobalStylesComponent>
      <ModalProvider>
        <Component {...pageProps} />
        <Modals />
      </ModalProvider>
    </GlobalStylesComponent>
  );
};

export default withAppEmotionCache(CustomApp);
