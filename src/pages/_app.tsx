import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import theme from "src/styles/theme";
import { CssBaseline } from "@mui/material";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
