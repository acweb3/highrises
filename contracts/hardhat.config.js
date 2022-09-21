/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-abi-exporter");

const { config } = require("./config");

module.exports = {
	solidity: "0.8.7",

	abiExporter: {
		runOnCompile: true,
		clear: true,
		flat: false,
		spacing: 2,
		pretty: true,
	},

	networks: {
		mainnet: {
			url: config.mainnetAlchemyURL,
			accounts: [config.mainnetPrivateKey],
		},

		rinkeby: {
			url: config.rinkebyAlchemyURL,
			accounts: [config.rinkebyPrivateKey],
		},
	},

	etherscan: {
		apiKey: config.etherscanAPIKey,
	},
};
