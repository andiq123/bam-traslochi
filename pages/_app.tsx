import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { insertVisitor } from "../lib/firebaseApiWrapper";
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    try {
      insertVisitor();
    } catch (error) {}
  }, []);

  return (
    <Layout>
      <ToastContainer />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
