const { config } = require("../config");
const { soloSeed } = require("../seed");

const [premintAddresses, premintTokenIds] = soloSeed;

async function main() {
	const Test = await hre.ethers.getContractFactory("Highrises");
	const deploymentData = Test.interface.encodeDeploy([
		config.ipfsURL,
		premintAddresses,
		premintTokenIds,
	]);
	const estimatedGas = await ethers.provider.estimateGas({
		data: deploymentData,
	});

	console.log({
		estimatedGas,
	});

	const test = await Test.deploy(
		config.ipfsURL,
		premintAddresses,
		premintTokenIds
	);

	await test.deployed();

	console.log("test deployed to:", test.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
