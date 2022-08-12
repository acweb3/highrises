import fetch from "node-fetch";
import * as dotenv from "dotenv";

dotenv.config();

export const config = {
	OPENSEA_API_KEY: process.env.OPENSEA_API_KEY,
	CHRIS_ADDRESS: process.env.CHRIS_ADDRESS,
};

const pause = () => {
	return new Promise((res) => {
		setTimeout(() => {
			res();
		}, 1500);
	});
};

/**
 * Really primitive way of checking screenshot for opensea assets
 */
(async () => {
	const fetchAsset = async (assetContract, tokenId) => {
		const res = await fetch(
			`https://api.opensea.io/api/v1/asset/${assetContract}/${tokenId}?include_orders=false`,
			{
				headers: {
					"X-API-KEY": config.OPENSEA_API_KEY,
				},
			}
		);
		const json = await res.json();
		console.log({
			asset: json.name,
			owner: json.top_ownerships?.[0].owner.address,
		});
		return json.top_ownerships?.[0].owner.address;
	};

	const fetchAssets = async (prevAddresses = [], cursor = "") => {
		const res = await fetch(
			`https://api.opensea.io/api/v1/assets?order_direction=asc&collection_editor=${config.CHRIS_ADDRESS}&cursor=${cursor}`,
			{
				headers: {
					"X-API-KEY": config.OPENSEA_API_KEY,
				},
			}
		);

		const json = await res.json();
		await pause();

		let addresses = [];
		for (let i = 0; i < json.assets.length; i++) {
			const owner = await fetchAsset(
				json.assets[i].asset_contract.address,
				json.assets[i].token_id
			);
			addresses.push(owner);
			await pause();
		}

		console.log({ next: json.next });

		return json.next
			? fetchAssets([...prevAddresses, ...addresses], json.next)
			: [...prevAddresses, ...addresses];
	};

	const assetHolders = await fetchAssets();
	console.log("\n\nXXXX");
	console.log(JSON.stringify(assetHolders, null, 4));
})();
