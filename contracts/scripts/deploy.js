const { config } = require("../config");

async function main() {
	const Highrises = await hre.ethers.getContractFactory("Highrises");
	const deploymentData = Highrises.interface.encodeDeploy([config.ipfsURL]);
	const estimatedGas = await ethers.provider.estimateGas({
		data: deploymentData,
	});

	const highrises = await Highrises.deploy(config.ipfsURL);

	await highrises.deployed();

	console.log("test deployed to:", highrises.address);
	console.log("estimated gas:", estimatedGas);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
