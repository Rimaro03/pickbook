import { AppbarMenuProps } from "@/interfaces/Props";
import { Collections, InsertPhoto, Settings, SupervisedUserCircle } from "@mui/icons-material";
import { Divider, ListItemIcon, Menu, MenuItem } from "@mui/material";
import React from "react";

export default function AppbarMenu({anchorEl, setAnchorEl}: AppbarMenuProps) {
	const open = Boolean(anchorEl);
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<Menu
			anchorEl={anchorEl}
			id="account-menu"
			open={open}
			onClose={handleClose}
			onClick={handleClose}
			PaperProps={{
				onMouseLeave: handleClose,
				elevation: 0,
				sx: {
					overflow: "visible",
					filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
					mt: 1.5,
					"& .MuiAvatar-root": {
						width: 32,
						height: 32,
						ml: -0.5,
						mr: 1,
					},
					"&:before": {
						content: "\"\"",
						display: "block",
						position: "absolute",
						top: 0,
						right: 14,
						width: 10,
						height: 10,
						bgcolor: "background.paper",
						transform: "translateY(-50%) rotate(45deg)",
						zIndex: 0,
					},
				},
			}}
			transformOrigin={{ horizontal: "right", vertical: "top" }}
			anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
		>
			<MenuItem onClick={handleClose}>
				<ListItemIcon>
					<InsertPhoto /> 
				</ListItemIcon>
				Photos
			</MenuItem>
			<MenuItem onClick={handleClose}>
				<ListItemIcon>
					<Collections /> 
				</ListItemIcon>
				Collections
			</MenuItem>
			<MenuItem onClick={handleClose}>
				<ListItemIcon>
					<SupervisedUserCircle /> 
				</ListItemIcon>
				Users
			</MenuItem>
			<Divider />
			<MenuItem onClick={handleClose}>
				<ListItemIcon>
					<Settings fontSize="small" />
				</ListItemIcon>
          Unsplash API
			</MenuItem>
		</Menu>
	);
}