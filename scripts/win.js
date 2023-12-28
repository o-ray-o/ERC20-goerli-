// add the game address here and update the contract name if necessary
const tokenAddr = "0xb3997077B25781D955Deb38E2DDF3e678F935476";
const tokenContractName = "POMOv1";

const bucketContractName = "Bucket";
const bucketContractAddr = "0x873289a1aD6Cf024B927bd13bd183B264d274c68";

const walletAddr = "0xA663C2150582f4695B4eD09bb0BCb58B2154864a";

async function main() {
  // attach to the game
  const token = await hre.ethers.getContractAt(tokenContractName, tokenAddr);
  const bucket = await hre.ethers.getContractAt(
    bucketContractName,
    bucketContractAddr
  );

  // do whatever you need to do to win the game here:
  const tx = await token.approve(bucketContractAddr, 10);
  await tx.wait();
  const tx2 = await bucket.drop(tokenAddr, 10);
  const receipt = await tx2.wait();

  console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
