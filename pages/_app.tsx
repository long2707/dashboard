import store from "@/apps/store";
import WrapperLayout from "@/components/Layout/WrapperLayout";
import { AppProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <WrapperLayout>
        <Component {...pageProps} />
      </WrapperLayout>
    </Provider>
  );
};

export default MyApp;
