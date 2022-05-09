const { config } = require("../config");

// hytha "0xb79C26FAFaaFEB2835FF175d025Db1b9DEEEDF5E" -> 55
// mark "0x57F85eFaD59c5DEab19479F2970C9D333a18045f" -> 20
// aboltc "0x35FB16Db88Bd1A37EFe58E4A936456c15065f713" -> 25

async function main() {
	const HighrisePaymentSplitter = await hre.ethers.getContractFactory(
		"HighrisePaymentSplitter"
	);
	const deploymentData = HighrisePaymentSplitter.interface.encodeDeploy([
		[
			"0xb79C26FAFaaFEB2835FF175d025Db1b9DEEEDF5E",
			"0x57F85eFaD59c5DEab19479F2970C9D333a18045f",
			"0x35FB16Db88Bd1A37EFe58E4A936456c15065f713",
		],
		[55, 20, 25],
	]);
	const estimatedGas = await ethers.provider.estimateGas({
		data: deploymentData,
	});

	const highrisePaymentSplitter = await HighrisePaymentSplitter.deploy(
		[
			"0xb79C26FAFaaFEB2835FF175d025Db1b9DEEEDF5E",
			"0x57F85eFaD59c5DEab19479F2970C9D333a18045f",
			"0x35FB16Db88Bd1A37EFe58E4A936456c15065f713",
		],
		[55, 20, 25]
	);

	await highrisePaymentSplitter.deployed();

	console.log(
		"HighrisePaymentSplitter deployed to:",
		highrisePaymentSplitter.address
	);
	console.log("estimated gas:", estimatedGas);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
