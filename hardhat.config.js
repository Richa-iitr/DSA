require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const { API_URL, KEY, PRIVATE_KEY } = process.env;

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
module.exports = {
  // defaultNetwork: "matic",
  networks: {
    hardhat: {
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${KEY}`,
        blockNumber: 11095000
      }
    },
    matic: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/6OXarysKYq0scJx1uP8RPXxW43Q_eMRj",
      accounts: [`0x${PRIVATE_KEY}`],
      gas: 2100000,
      gasPrice: 8000000000,
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
