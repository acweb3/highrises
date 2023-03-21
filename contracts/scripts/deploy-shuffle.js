const TOKENS = [93, 92, 91, 90, 88, 87, 86, 85];
const HYTHA_ADDRESS = "0xb79C26FAFaaFEB2835FF175d025Db1b9DEEEDF5E";
const HIGHRISES_ADDRESS = "0x516D85f0c80D2C4809736AcA3f3F95cE8545b5d2";

async function main() {
	const HighriseShuffle = await hre.ethers.getContractFactory(
		"HighriseShuffle"
	);
	const highriseShuffleToken = await HighriseShuffle.deploy(
		TOKENS,
		HYTHA_ADDRESS,
		HIGHRISES_ADDRESS
	);

	await highriseShuffleToken.deployed();
	console.log({ address: highriseShuffleToken.address });
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
