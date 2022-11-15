import Head from "next/head";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Footer from "../components/footer";
import Header from "../components/header";
import { Provider } from "react-redux";
import { store } from "../redux/store";

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
        <link rel="icon" href="/kiuti-logo.jpg" />
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
