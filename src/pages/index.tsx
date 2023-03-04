import { Container } from '@mui/system';
import React, { useState } from 'react';
import Appbar from '@/components/Appbar/Appbar';
import { Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Collections, GroupRounded, Image } from '@mui/icons-material';


export default function Home() {
	const [category, setCategory] = useState<string>('photos');

	const changeCategory = (newCategory: string) => {
		setCategory(newCategory);
	};

	const chipStyle = {
		p: 1,
		':hover': {cursor: 'pointer'}
	};

	return (
		<Container disableGutters={true} sx={{margin: ''}}>
			<Appbar />
			<Container sx={{mt: 4}}>
				<Typography variant={'h4'} fontWeight={'bold'}>HD Images</Typography>
				<Stack direction="row" spacing={1} mt={3}>
					<Chip icon={<Image />} onClick={()=>{changeCategory('photos');}} label="Photos" variant={category == 'photos' ? 'filled' : 'outlined'} sx={chipStyle} />
					<Chip icon={<Collections />} onClick={()=>{changeCategory('collections');}} label="Collections" variant={category == 'collections' ? 'filled' : 'outlined'} sx={chipStyle} />
					<Chip icon={<GroupRounded />} onClick={()=>{changeCategory('users');}} label="Users" variant={category == 'users' ? 'filled' : 'outlined'} sx={chipStyle} />
				</Stack>
			</Container>
		</Container>
	);
}
