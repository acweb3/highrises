import fetch from "node-fetch";
import * as dotenv from "dotenv";

dotenv.config();

const pause = () => {
	return new Promise((res) => {
		setTimeout(() => {
			res();
		}, 3000);
	});
};

export const config = {
	OPENSEA_API_KEY: process.env.OPENSEA_API_KEY,
};

(async () => {
	for (let i = 0; i < 35; i++) {
		const res = await fetch(
			`https://api.opensea.io/api/v1/asset/0x516d85f0c80d2c4809736aca3f3f95ce8545b5d2/${i}/?force_update=true`,
			{
				headers: {
					"X-API-KEY": config.OPENSEA_API_KEY,
				},
			}
		);
		console.log(res);
		await pause();
	}
})();
