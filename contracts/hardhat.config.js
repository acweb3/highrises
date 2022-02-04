/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const { config } = require("./config");

module.exports = {
	solidity: "0.8.7",

	networks: {
		// mainnet: {
		// 	url: config.mainnetAlchemyURL,
		// 	accounts: [config.mainnetPrivateKey],
		// },

		// ropsten: { 
		// 	url: config.ropstenAlchemyURL,
		// 	accounts: [config.ropstenPrivateKey],
		// },

		rinkeby: {
			url: config.rinkebyAlchemyURL,
			accounts: [config.rinkebyPrivateKey],
		},
	},

	etherscan: {
		apiKey: config.etherscanAPIKey,
	},
};
