import Head from "next/head";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Footer from "../components/footer";
import Header from "../components/header";
import { Provider } from "react-redux";
import { store } from "../redux/store";

/** Font Awesome */
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Head>
        <title>Kiuti Cases</title>
        <meta
          name="description"
          content="Kiuti Cases - Los estuches más kiut para tu iPhone"
        />
      </Head>
      <Header />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <Footer />
    </>
  );
}

export default MyApp;
