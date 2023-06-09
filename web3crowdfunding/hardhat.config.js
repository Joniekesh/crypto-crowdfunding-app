/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: {
		version: "0.8.9",
		defaultNetwork: "goerli",
		networks: {
			hardHart: {},
			goerli: {
				url: "https://rpc.ankr.com/eth_goerli",
				accounts: [`0x${process.env.METAMASK_PRIVATE_KEY}`],
			},
		},
		settings: {
			optimizer: {
				enabled: true,
				runs: 200,
			},
		},
	},
};
