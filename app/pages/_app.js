// import '../styles/globals.css'
import React from "react";
import theme from "../sources/theme";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import Main from "../sources/layout/Main";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <CssBaseline />
        <Component {...pageProps} />
      </Main>
    </ThemeProvider>
  );
}

export default MyApp;
