// ** Global Styles
import "@/styles/globals.css";

// ** AppProps Type
import type { AppProps } from "next/app";

// ** Import custom components
import Layout from "@/components/Layout";
import { Provider } from "react-redux";
import { store } from "@/components/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
