import { createEmotionSsrAdvancedApproach } from "tss-react/next/pagesDir";
import GlobalStylesComponent from "../components/GlobalStylesComponent";
import { ModalProvider } from "../hooks/ModalProvider";
import { Modals } from "../components/Modals";
import { NextPage } from "next";
import ErrorBoundary from "../ErrorBoundary";

const { augmentDocumentWithEmotionCache, withAppEmotionCache } =
  createEmotionSsrAdvancedApproach({ key: "css" });

export { augmentDocumentWithEmotionCache };

interface CustomAppProps {
  Component: NextPage;
}

const CustomApp = ({ Component }: CustomAppProps) => {
  return <ErrorBoundary>1</ErrorBoundary>;
};

export default withAppEmotionCache(CustomApp);
