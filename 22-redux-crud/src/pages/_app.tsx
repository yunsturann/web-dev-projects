// ** Global Styles
import "@/styles/globals.css";

// ** AppProps Type
import type { AppProps } from "next/app";

// ** Import custom components
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
