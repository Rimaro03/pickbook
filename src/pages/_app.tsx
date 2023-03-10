import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline, PaletteMode } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const getThemeOptions = (mode: PaletteMode) => ({
	palette: {
		mode: mode,
		primary: {
			main: '#fff',
		},
		secondary: {
			main: '#A459D1',
		},
		error: {
			main: '#d32f2f',
		},
		warning: {
			main: '#ed6c02',
		},
		info: {
			main: '#0288d1',
		},
		success: {
			main: '#2e7d32',
		},
	},
	typography: {
		fontFamily: 'PlusJakartaSans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Cantarell,Helvetica Neue,Ubuntu,sans-serif',
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					boxShadow: 'none',
					backgroundColor: '-moz-initial',
				},
			}
		}
	}
});

export default function App({ Component, pageProps }: AppProps) {
	const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
			},
		}),
		[],
	);

	const newTheme = React.useMemo(
		() =>
			createTheme(getThemeOptions(mode)),
		[mode],
	);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={newTheme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}
