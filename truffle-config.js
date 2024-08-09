const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');

const mnemonic = process.env.MNEMONIC;
const infuraKey = process.env.INFURA_KEY;
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
