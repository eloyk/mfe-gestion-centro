import store from "@/data/store";
import AppFrame from "@/layouts/AppFrame/AppFrame";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head'
import React from "react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>NextApp</title>
          <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        </Head>
        <AppFrame Component={Component} pageProps={pageProps}/>
      </React.StrictMode>
    </Provider>
  )
}
