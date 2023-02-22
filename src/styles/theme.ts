import { createTheme, ThemeOptions } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import "@fontsource/plus-jakarta-sans";

declare module "@mui/material/styles" {
    interface Theme {
      status: {
        danger: string;
      };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
      status?: {
        danger?: string;
      };
    }
}

export const themeOptions: ThemeOptions = {
	palette: {
		mode: "dark",
		primary: {
			main: "#fff",
		},
		secondary: {
			main: "#A459D1",
		},
		error: {
			main: "#d32f2f",
		},
		warning: {
			main: "#ed6c02",
		},
		info: {
			main: "#0288d1",
		},
		success: {
			main: "#2e7d32",
		},
	},
	typography: {
		fontFamily: "Plus Jakarta Sans",
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					boxShadow: "none",
					backgroundColor: "-moz-initial",
				},
			}
		}
	}
};

const theme = createTheme(themeOptions);

export default theme;