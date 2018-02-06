const AffiliateCoinToken = artifacts.require("./AffiliateCoinToken.sol");

module.exports = function(deployer, network, accounts) {
    const args = process.argv.slice()
    deployer.deploy(AffiliateCoinToken)
    console.log("AffiliateCoinToken deployed")
};


