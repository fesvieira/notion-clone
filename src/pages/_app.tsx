import { AppContainer, GlobalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContainer className={inter.className}>
      <GlobalStyles />
      <Component {...pageProps} />
    </AppContainer>
  );
}
