const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const infuraKey = "8ef77dd64b3440b880d0572df5857bc4";
const mnemonic = "various plate lecture ocean odor hat load require episode lens struggle defy";

module.exports = {
  networks: {
    polygon: {
      provider: () => new HDWalletProvider(mnemonic, `https://polygon-mainnet.infura.io/v3/${infuraKey}`),
      network_id: 137,
      gas: 5500000,
      gasPrice: 10000000000,
    }
  },
  compilers: {
    solc: {
      version: "0.8.0"
    }
  }
};
