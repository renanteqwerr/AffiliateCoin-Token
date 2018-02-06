require('babel-register')
require('babel-polyfill')

module.exports = {
  networks: {
    "cli": {
      host: '127.0.0.1',
      port: 8545,
      network_id: 1111, // Match any network id
      from: "0x88007f0ee4f9b2d7f68c384af260c6f8fc3e2c98"
    },
    "development": {
      host: '127.0.0.1',
      port: 7545,
      network_id: 5777, // Match any network id
      gas: 4700036,
      gasPrice: 20000000000,
      from: "0x627306090abaB3A6e1400e9345bC60c78a8BEf57"
    },
    "ropsten": {
      network_id: 3,
      host: "localhost",
      port: 8545,
      gas: 4700036,
      gasPrice: 10000000000,
      from: "0x749d3dcefe46d71a4eb004774efd5dc2bd468d8b"
    },
    "ropstenparity": {
      network_id: 3,
      host: "127.0.0.1",
      port: 8545,
      gas: 4700036,
      gasPrice: 10000000000,
      from: "0x749d3dcefe46d71a4eb004774efd5dc2bd468d8b"
    },
    "mainnetparity": {
      network_id: 1,
      host: "127.0.0.1",
      port: 8545,
      gas: 4700036,
      gasPrice: 25000000000,
      from: "0x7db3cecaa8abb4a4dfac8c5d85c6138799978d99"
    }
  },
};
