import { AppbarMenuProps } from '@/interfaces/Props';
import { Collections, InsertPhoto, Settings, SupervisedUserCircle } from '@mui/icons-material';
import { Divider, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

export default function AppbarMenu({anchorEl, setAnchorEl}: AppbarMenuProps) {
	const open = Boolean(anchorEl);
	const router = useRouter();

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleUnsplashApis = () => {
		handleClose();
		router.push('https://unsplash.com/');
	};

	const handlePhotos = () => {
		handleClose();
		router.push('/photos');
	};

	const handleCollections = () => {
		handleClose();
		router.push('/collections');
	};

	const handleUsers = () => {
		handleClose();
		router.push('/users');
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
				elevation: 1,
				sx: {
					overflow: 'visible',
					filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
					mt: 1.5,
					'& .MuiAvatar-root': {
						width: 32,
						height: 32,
						ml: -0.5,
						mr: 1,
					},
					'&:before': {
						content: '""',
						display: 'block',
						position: 'absolute',
						top: 0,
						right: 14,
						width: 10,
						height: 10,
						bgcolor: 'background.paper',
						transform: 'translateY(-50%) rotate(45deg)',
						zIndex: 0,
					},
				},
			}}
			transformOrigin={{ horizontal: 'right', vertical: 'top' }}
			anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
		>
			<MenuItem onClick={handlePhotos}>
				<ListItemIcon>
					<InsertPhoto /> 
				</ListItemIcon>
				<ListItemText primary={'Photos'} />
			</MenuItem>
			<MenuItem onClick={handleCollections}>
				<ListItemIcon>
					<Collections /> 
				</ListItemIcon>
				<ListItemText primary={'Collections'} />
			</MenuItem>
			<MenuItem onClick={handleUsers}>
				<ListItemIcon>
					<SupervisedUserCircle /> 
				</ListItemIcon>
				<ListItemText primary={'Users'} />
			</MenuItem>
			<Divider />
			<MenuItem onClick={handleUnsplashApis}>
				<ListItemIcon>
					<Settings fontSize="small" />
				</ListItemIcon>
				<ListItemText primary={'Unsplash APIs'} />
			</MenuItem>
		</Menu>
	);
}