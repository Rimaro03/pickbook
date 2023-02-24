import type { NextApiRequest, NextApiResponse } from "next";
import request from "request";

type Data = {
    name: string
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {

	// requesting access token from refresh token
	const CLIENT_ID = "29c13b2b857746f586185e2edf326f60";
	const CLIENT_SECRET = "d60fbaea65e346669818025fd637f4a7";
	const refresh_token = req.query.refresh_token;
	const authOptions = {
		url: "https://accounts.spotify.com/api/token",
		headers: { "Authorization": "Basic " + (new Buffer(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64")) },
		form: {
			grant_type: "refresh_token",
			refresh_token: refresh_token
		},
		json: true
	};
      
	request.post(authOptions, function(error, response, body) {
		if (!error && response.statusCode === 200) {
			const access_token = body.access_token;
			res.send({
				"access_token": access_token
			});
		}
		res.send("ERROR");
	});
}