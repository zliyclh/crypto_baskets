/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("@nomiclabs/hardhat-waffle");
 require("dotenv").config();
 
 // Possible network values
 const TEST_NETWORK = "TEST_NETWORK"
 const LOCAL_NETWORK = "LOCAL_NETWORK"
 
 // By default network is set to local, change it to TEST_NETWORK to make a switch
 const NETWORK = TEST_NETWORK
 
 const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
 const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY;
 
 let networks = {};
 if (NETWORK == TEST_NETWORK) {
    networks = {
      rinkeby: {
        url: `https://rinkeby.infura.io/v3/${ALCHEMY_API_KEY}`,
        accounts: [`0x${WALLET_PRIVATE_KEY}`]
      }
   }
 }
 
 module.exports = {
   solidity: "0.8.0",
   networks: networks
 };
 