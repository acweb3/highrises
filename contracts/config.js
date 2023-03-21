require("dotenv").config();

const config = {
	etherscanAPIKey: process.env.ETHERSCAN_API_KEY,
	ipfsURL: process.env.IPFS_URL,
	collageIpfsURL: process.env.COLLAGE_IPFS_URL,
	mainnetAlchemyURL: process.env.MAINNET_ALCHEMY_URL,
	mainnetPrivateKey: process.env.MAINNET_PRIVATE_KEY,
	sepoliaAlchemyURL: process.env.SEPOLIA_ALCHEMY_URL,
	sepoliaPrivateKey: process.env.SEPOLIA_PRIVATE_KEY,
};

module.exports = {
	config,
};
