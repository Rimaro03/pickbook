import type { NextApiRequest, NextApiResponse } from "next";
import { stringify } from "querystring";
import request from "request";

type Data = {
    name: string
}
const stateKey = "spotify_auth_state";
const CLIENT_ID = "29c13b2b857746f586185e2edf326f60";
const CLIENT_SECRET = "d60fbaea65e346669818025fd637f4a7";
const REDIRECT_URI = "http://localhost:3000/api/callback";

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {

	const code = req.query.code || null;
	const state = req.query.state || null;
	const storedState = req.cookies ? req.cookies[stateKey] : null;

	if (state === null || state !== storedState) {
		res.redirect("/#" +
            stringify({ error: "state_mismatch" }));
	} else {
		const authOptions = {
			url: "https://accounts.spotify.com/api/token",
			form: {
				code: code,
				redirect_uri: REDIRECT_URI,
				grant_type: "authorization_code"
			},
			headers: {
				"Authorization": "Basic " + (new Buffer(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"))
			},
			json: true
		};
		request.post(authOptions, function (error, response, body) {
			if (!error && response.statusCode === 200) {

				console.log(body);
				const access_token = body.access_token,
					refresh_token = body.refresh_token;

				const options = {
					url: "https://api.spotify.com/v1/me",
					headers: { "Authorization": "Bearer " + access_token },
					json: true
				};

				// use the access token to access the Spotify Web API
				request.get(options, function (error, response, body) {
					console.log(body);
				});

				// we can also pass the token to the browser to make requests from there
				res.redirect("/#" +
                    stringify({ access_token: access_token, refresh_token: refresh_token }));
			} else {
				res.redirect("/#" +
                    stringify({ error: "invalid_token" }));
			}
		});
	}
}