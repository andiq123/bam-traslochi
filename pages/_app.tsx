import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { insertVisitor } from "../lib/firebaseApiWrapper";
import Script from "next/script";
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    try {
      //if development mode, don't insert visitor
      if (process.env.NODE_ENV === "development") return;

      insertVisitor();
    } catch (error) {}
  }, []);

  return (
    <Layout>
      <ToastContainer />
      <Component {...pageProps} />
      {/* <!-- Google tag (gtag.js) - Google Analytics --> */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-239327884-1"
      ></Script>
      <Script id="google-script">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-239327884-1');`}
      </Script>
    </Layout>
  );
}

export default MyApp;
