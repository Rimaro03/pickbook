import React, { useState } from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Brightness4, Brightness4Rounded, Brightness7, Collections, GitHub, InsertPhoto, SupervisedUserCircle } from '@mui/icons-material';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { AppbarDrawerProps } from '@/interfaces/Props';
import { ColorModeContext } from '@/pages/_app';
import { useRouter } from 'next/router';

const drawerBleeding = 56;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const Root = styled('div')(({ theme }) => ({
	height: '100%',
	backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
	width: 30,
	height: 6,
	backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
	borderRadius: 3,
	position: 'absolute',
	top: 8,
	left: 'calc(50% - 15px)',
}));

export default function SwipeableEdgeDrawer({drawerOpen, setDrawerOpen}: AppbarDrawerProps, props: Props) {
	const { window } = props;

	const toggleDrawer = (newOpen: boolean) => () => {
		setDrawerOpen(newOpen);
	};

	// This is used only for the example
	const container = window !== undefined ? () => window().document.body : undefined;

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

	return (
		<Root>
			<CssBaseline />
			<Global
				styles={{
					'.MuiDrawer-root > .MuiPaper-root': {
						height: `calc(50% - ${drawerBleeding}px)`,
						overflow: 'visible',
					},
				}}
			/>
			<SwipeableDrawer
				container={container}
				anchor="bottom"
				open={drawerOpen}
				onClose={toggleDrawer(false)}
				onOpen={toggleDrawer(true)}
				swipeAreaWidth={drawerBleeding}
				disableSwipeToOpen={false}
				ModalProps={{
					keepMounted: true,
				}}
			>
				<StyledBox
					sx={{
						position: 'absolute',
						top: -drawerBleeding,
						borderTopLeftRadius: 8,
						borderTopRightRadius: 8,
						visibility: 'visible',
						right: 0,
						left: 0,
					}}
				>
					<Puller />
					<Typography sx={{ p: 2, color: 'text.secondary' }}>51 results</Typography>
				</StyledBox>
				<StyledBox
					sx={{
						px: 2,
						pb: 2,
						height: '100%',
						overflow: 'auto',
					}}
				>
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
				</StyledBox>
			</SwipeableDrawer>
		</Root>
	);
}