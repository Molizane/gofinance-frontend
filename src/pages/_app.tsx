import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/globals";
import { darkTheme } from "@/src/styles/themes/dark";
import AppTemplate from "../components/AppTemplate";
import { AuthProvider } from "../providers/auth";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <AppTemplate>
          <Component {...pageProps} />
        </AppTemplate>
      </ThemeProvider>
    </AuthProvider>
  );
}
