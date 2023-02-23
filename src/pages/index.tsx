import { Container } from "@mui/system";
import React from "react";
import Appbar from "@/components/Appbar/Appbar";

export default function Home() {
	return (
		<Container disableGutters={true} sx={{margin: ""}}>
			<Appbar />
			<Container>
				<h4>Body title</h4>
			</Container>
		</Container>
	);
}
