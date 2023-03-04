import React, { useState } from 'react';
import { AppbarDrawerProps } from '@/interfaces/Props';
import { ColorModeContext } from '@/pages/_app';
import { Brightness4, Brightness7, Collections, GitHub, InsertPhoto, SupervisedUserCircle } from '@mui/icons-material';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function SideDrawer(props: AppbarDrawerProps){
	const colorMode = React.useContext(ColorModeContext);
	const [mode, setMode] = useState('dark');
	const router = useRouter();

	const handleThemeModeChange = () => {
		colorMode.toggleColorMode();
		mode == 'light' ? setMode('dark') : setMode('light');
	};

	const handleGithub = () => {
		router.push(new URL('https://www.github.com/Rimaro03/pickbook'));
	};

	const handlePhotos = () => {
		router.push('/photos');
	};

	const handleCollections = () => {
		router.push('/collections');
	};

	const handleUsers = () => {
		router.push('/users');
	};

	const list = () => (
		<Box
			sx={{ width: 250 }}
			role="presentation"
		>
			<Toolbar />
			<Divider />
			<List>
				<ListItem>
					<ListItemButton onClick={handlePhotos}>
						<ListItemIcon>
							<InsertPhoto /> 
						</ListItemIcon>
						<ListItemText primary={'Photos'} />
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton onClick={handleCollections}>
						<ListItemIcon>
							<Collections /> 
						</ListItemIcon>
						<ListItemText primary={'Collections'} />
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton onClick={handleUsers}>
						<ListItemIcon>
							<SupervisedUserCircle /> 
						</ListItemIcon>
						<ListItemText primary={'Users'} />
					</ListItemButton>
				</ListItem>
				<Divider />
				<ListItem>
					<ListItemButton onClick={handleThemeModeChange}>
						<ListItemIcon>
							{mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
						</ListItemIcon>
						<ListItemText primary={mode === 'dark' ? 'light' : 'dark'} />
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton onClick={handleGithub}>
						<ListItemIcon>
							<GitHub />
						</ListItemIcon>
						<ListItemText primary={'Github'} />
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);
  
	const anchor = 'left';
	return(
		<Drawer
			anchor={anchor}
			open={props.drawerOpen}
			onClose={()=>{props.setDrawerOpen(false);}}
		>
			{list()}
		</Drawer>
	);
}