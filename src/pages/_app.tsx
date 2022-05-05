import "../styles/global.css";
import "../styles/styles.scss";
import "../styles/job/job-detail.css";
import "../styles/job/job-list.css";

import { NextPage } from "next";
import { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "stores/store";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Head>
        <title>ポーターズ</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
