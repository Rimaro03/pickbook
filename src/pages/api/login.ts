import type { NextApiRequest, NextApiResponse } from "next";
import { stringify } from "querystring";
import { serialize } from "cookie";
/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */

const CLIENT_ID = "29c13b2b857746f586185e2edf326f60";
const REDIRECT_URI = "http://localhost:3000/api/callback";
const STATE_KEY = "spotify_auth_state";

const generateRandomString = (length: number) => {
	let text = "";
	const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for (let i = 0; i < length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
};

type Data = {
	name: string
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const state = generateRandomString(10);
	const scopes = ["user-read-private user-read-email", "user-read-playback-state"];
	res.setHeader("Set-Cookie", serialize(STATE_KEY, state, {path: "/"}));
	res.redirect("https://accounts.spotify.com/authorize?" +
		stringify({
			response_type: "code",
			client_id: CLIENT_ID,
			scope: scopes,
			redirect_uri: REDIRECT_URI,
			state: state
		}));
}