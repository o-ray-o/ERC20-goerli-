// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  // const [deployer] = await ethers.getSigners();

  // console.log("Account Ether Balance:", deployer.getBalance());

  // console.log("Deploying contracts with the account:", deployer.address);

  const Token = await hre.ethers.deployContract("POMOv1");

  const token = await Token.waitForDeployment();

  console.log("Token Contract:", token);

  console.log("Token address:", token.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
