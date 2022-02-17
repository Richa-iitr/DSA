const  DSA  = require("dsa-connect");
const hre = require("hardhat");
const address = "0x15C6b352c1F767Fa2d79625a40Ca4087Fab9a198";

async function main(){
  const dsa = new DSA({
    web3: web3,
    mode: "node",
    privateKey: process.env.PRIVATE_KEY
  });
  
  await network.provider.send("hardhat_setBalance", [
    address,
    "0x3684AB4DA866014240",
  ]);
  
  await dsa.build({
    gasPrice: web3.utils.toWei('1000000', 'gwei'),
    authority: address,
    version: 2
  });
  
  let accounts = await dsa.getAccounts(address);
  console.log(accounts);

  let dsaID = 34277;

  await network.provider.send("hardhat_setBalance", [
    "0x0D56D48Fe02fc50c708dd33D7DC6658cb2b23FcE",
    "0x3684AB4DA866014240",
  ]);

  await dsa.setInstance(dsaID);
  let spells = dsa.Spell();

  await spells.add({
    connector: "compound",
    method: "deposit",
    args: [
      "ETH-A",
      "1000000000",
      0,
      0
    ]
  });

  await spells.add({
    connector: "compound",
    method: "borrow",
    args: [
      "DAI-A",
      "10000",
      0,
      0
    ]
  });

  console.log("Instance:", dsa.instance);
  console.log("Spells:", dsa.encodeSpells(spells));

  console.log("Transcation Hash:",
    await dsa.cast({
      spells,
      gasPrice: web3.utils.toWei('1000000', 'gwei'),
      value: "1000000",
    })
  )
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
