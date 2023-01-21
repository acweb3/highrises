const { config } = require("../config");

async function main() {
	const HighriseReserve = await hre.ethers.getContractFactory(
		"HighriseReserve"
	);
	const deploymentData = HighriseReserve.interface.encodeDeploy([0, 20]);
	const estimatedGas = await ethers.provider.estimateGas({
		data: deploymentData,
	});

	const highriseReserve = await HighriseReserve.deploy(0, 20);

	await highriseReserve.deployed();
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
