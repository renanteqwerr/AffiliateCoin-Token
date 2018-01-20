var AffiliateCoinToken = artifacts.require("../AffiliateCoinToken.sol");
// var ClaimableCrowdSale = artifacts.require("../ClaimableCrowdsale.sol");

module.exports = function(deployer, network, accounts) {
  if (network === 'ropsten') {
    const totalSupply = web3.toWei("1000000000", "Ether"); // on Billion total supply
    const bankAddress = web3.eth.accounts[1];
    const beneficiaryAddress = web3.eth.accounts[2];
    // const tokenRate = 7000; // 1 ETH = 7000 AFL  Public Sale
    // const minBuyableAmount = web3.toWei("0.3", "Ether");
    // const maxTokensAmount = web3.toWei("350000", "Ether");
    // const endDate = 1515987843000;

    deployer.deploy(AffiliateCoinToken,totalSupply).then(function () {
       return deployer.deploy(AffiliateCoinToken, totalSupply)
    });
    };
};
