var AffiliateCoinToken = artifacts.require("./AffiliateCoinToken.sol");

module.exports = function(deployer, network, accounts) {
  if (network === 'cli') {
    const totalSupply = web3.toWei("1000000000", "Ether"); // one Billion total supply
    deployer.deploy(AffiliateCoinToken,totalSupply).then(result => {

    })
    };
};


