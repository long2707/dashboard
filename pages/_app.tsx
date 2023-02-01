import store from "@/apps/store";
import WrapperLayout from "@/components/Layout/WrapperLayout";
import { AppProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

import "react-lazy-load-image-component/src/effects/blur.css";
import "nprogress/nprogress.css";
const MyApp: React.FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <WrapperLayout>
          <Component {...pageProps} />
        </WrapperLayout>
      </Provider>
    </SessionProvider>
  );
};

export default MyApp;
