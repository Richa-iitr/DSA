require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-web3");
require('dotenv').config({ path: './env' })


module.exports = {
  networks: {
    hardhat: {
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.API_URL}`,
        url: "https://eth-mainnet.alchemyapi.io/v2/oZ0ogaANt4gJcDA_ZtBN2_JM6CMF0r-s",
        blockNumber: 11095000,
      },
      chainId: 1
    }
  },
  solidity: {
    compilers: [
      {
        version: "0.8.4",
      },
      {
        version: "0.8.11",
        settings: {},
      },
    ],
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
};
