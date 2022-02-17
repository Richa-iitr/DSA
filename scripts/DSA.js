const  DSA  = require("dsa-connect");
const hre = require("hardhat");
const address = "0x721C0E481Ae5763b425aCb1b04ba98baF480D83B";

async function main(){
  const dsa = new DSA({
    web3: web3,
    mode: "node",
    privateKey: process.env.PRIVATE_KEY
  });
  
  await network.provider.send("hardhat_setBalance", [
    address,
    "0x1000",
  ]);
  
  await dsa.build({
    gasPrice: web3.utils.toWei('1000000', 'gwei'),
    authority: address,
    version: 2
  });
  
  let accounts = await dsa.getAccounts(address);
  console.log(accounts);

  // let dsaID = accounts[0].id;
  // dsa.setInstance(dsaID);
  // let spells = dsa.Spell();

  // spells.add({
  //   connector: "COMPOUND-A",
  //   method: "deposit",
  //   args: [
  //     "ETH-A",
  //     "1000",
  //     0,
  //     0
  //   ]
  // })
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });



















































// const  DSA  = require("dsa-connect");

// const hre = require("hardhat");
// const Web3 = require("web3");
// const { API_URL } = process.env;

// const web3 = new Web3(new Web3.providers.HttpProvider("https://eth-mainnet.alchemyapi.io/v2/oZ0ogaANt4gJcDA_ZtBN2_JM6CMF0r-s"));

// const chainId = web3.eth.chainId();
// const cId = 1;
// const dsa = new DSA(web3, chainId);

// async function buildWallet() {
//   dsa.build().then(txHash => {
//     console.log(`https://etherscan.io/tx/${txHash}`)
//   })
// }
// async function main() {
//   await buildWallet();
//   const spells = dsa.Spell();
//   let amount = 1000000000000000000;

//   spells.add({
//     connector: "COMPOUND-A",
//     method: "deposit",
//     args: ["ETH-A", "1000000000000000", 0, 0]
//   })
//   let tHash = await spells.cast();
//   console.log(tHash);
// }
// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });
