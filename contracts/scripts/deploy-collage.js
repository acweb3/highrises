const { config } = require("../config");

async function main() {
	const HighriseCollage = await hre.ethers.getContractFactory(
		"HighriseCollage"
	);
	const deploymentData = HighriseCollage.interface.encodeDeploy([
		config.collageIpfsURL,
	]);
	const estimatedGas = await ethers.provider.estimateGas({
		data: deploymentData,
	});

	const highrisesCollage = await HighriseCollage.deploy(
		config.collageIpfsURL
	);

	await highrisesCollage.deployed();

	console.log("HighriseCollage deployed to:", highrisesCollage.address);
	console.log("estimated gas:", estimatedGas);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
