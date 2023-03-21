const { config } = require("../config");

// hytha "0xb79C26FAFaaFEB2835FF175d025Db1b9DEEEDF5E" -> 55
// mark "0x57F85eFaD59c5DEab19479F2970C9D333a18045f" -> 20
// aboltc "0x35FB16Db88Bd1A37EFe58E4A936456c15065f713" -> 25

async function main() {
	const HighrisePaymentSplitter = await hre.ethers.getContractFactory(
		"HighrisePaymentSplitter"
	);

	const estimatedGas = await ethers.provider.getFeeData(
		HighrisePaymentSplitter.getDeployTransaction(
			[
				"0xb79C26FAFaaFEB2835FF175d025Db1b9DEEEDF5E",
				"0x57F85eFaD59c5DEab19479F2970C9D333a18045f",
				"0x35FB16Db88Bd1A37EFe58E4A936456c15065f713",
			],
			[55, 20, 25]
		).data
	);

	console.log({ estimatedGas });
	console.log({
		readable: ethers.utils.formatUnits(estimatedGas.gasPrice, "ether"),
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
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
