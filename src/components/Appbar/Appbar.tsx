import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import { IconButton, useTheme } from "@mui/material";


const Search = styled("div")(({ theme }) => ({
	position: "relative",
	display: "flex",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.text.primary, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.text.primary, 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: "50%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	flex: 1,
	margin: 6,
	marginLeft: 20,
	width: "100%",
}));

export default function Appbar() {
	const theme = useTheme();

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" color="transparent">
				<Toolbar sx={{justifyContent: "space-between"}}>
					<Typography
						variant="h5"
						fontWeight="bold"
						noWrap
						component="div"
						color="secondary"
						sx={{ display: { xs: "none", sm: "block" } }}
					>
						Pickbook
					</Typography>
					<Search>
						<StyledInputBase
							placeholder="Search…"
							inputProps={{ "aria-label": "search" }}
						/>
						<IconButton type="button" sx={{ p: "10px" }} aria-label="search" disableRipple={true}>
							<SearchIcon />
						</IconButton>
					</Search>
					<Box sx={{ display: "flex", justifyContent: "space-between", width: "350px" }}>
						<Box display={"flex"} margin="auto">
							<Typography>Explore</Typography>
							<ArrowDownward />
						</Box>
						<Box margin="auto">
							<Typography>Support me</Typography>
						</Box>
						<Box sx={{":hover": {cursor: "pointer"}, backgroundColor: theme.palette.secondary.main, padding: 1, ml: 0.5, borderRadius: 2}} >
							<Typography color={"white"}>GitHub</Typography>
						</Box>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
}


/*< Paper
			component = "form"
			sx = {{ p: "2px 4px", display: "flex", alignItems: "center", width: "100%" }
			}
		>
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder="Search Google Maps"
				inputProps={{ "aria-label": "search google maps" }}
			/>
			<IconButton type="button" sx={{ p: "10px" }} aria-label="search">
				<SearchIcon />
			</IconButton>
		</Paper >*/