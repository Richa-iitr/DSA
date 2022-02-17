const  DSA  = require("dsa-connect");

const hre = require("hardhat");
const Web3 = require("web3");
const { API_URL } = process.env;

const web3 = new Web3(new Web3.providers.HttpProvider(API_URL));

const dsa = new DSA(web3);

// async function getTxnCount() {
//   const PUB_ADR = "0x721C0E481Ae5763b425aCb1b04ba98baF480D83B";
//   return await web3.eth.getTransactionCount(PUB_ADR.toLowerCase());
// }
async function buildWallet() {
  dsa.build().then(txHash => {
    console.log(`https://etherscan.io/tx/${txHash}`)
  })
}
async function main() {
  await buildWallet();
  await dsa.getAccounts("0x721C0E481Ae5763b425aCb1b04ba98baF480D83B").then((accts)=>{
    console.log(accts);
  });

  const spells = dsa.Spell();
  let amount = 1000000000000000000;

  spells.add({
    connector: "COMPOUND-A",
    method: "deposit",
    args: ["ETH-A", "1000000000000000", 0, 0]
  })
  let tHash = await spells.cast();
  console.log(tHash);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
