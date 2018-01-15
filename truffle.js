module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*" // Match any network id
    },
    "ropsten": {
      network_id: 3,
      host: "localhost",
      port: 8545,
      gas: 6000000,
      from: "0x1497945569c9e4612e77ad0b286900ef3684d3a6"
    }
  },
};
