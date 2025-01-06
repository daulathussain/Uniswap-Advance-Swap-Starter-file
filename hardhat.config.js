require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.19",
  networks: {
    hardhat: {
      forking: {
        url: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
        blockNumber: 18990000,
      },
      mining: {
        auto: true,
        interval: 0,
      },
      chainId: 1,
      allowUnlimitedContractSize: true,
      accounts: {
        accountsBalance: "10000000000000000000000", // 10000 ETH
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};
