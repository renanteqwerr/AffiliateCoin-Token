var AffiliateCoinToken = artifacts.require("../AffiliateCoinToken.sol");
var ClaimableCrowdSale = artifacts.require("../ClaimableCrowdsale.sol");

module.exports = function(deployer, network, accounts) {
  if (network === 'development') {
    const totalSupply = web3.toWei("888888000", "Ether");
    const bankAddress = web3.eth.accounts[1];
    const beneficiaryAddress = web3.eth.accounts[2];
    const tokenRate = 7000; // 1 ETH = 7000 AFL
    const minBuyableAmount = web3.toWei("1", "Ether");
    const maxTokensAmount = web3.toWei("34666632", "Ether");
    const endDate = 1513296000;

    deployer.deploy(AffiliateCoinToken, totalSupply).then(function () {
      return deployer.deploy(AffiliateCoinToken, totalSupply)
    }).then(function () {
      return deployer.deploy(
        ClaimableCrowdSale,
        AffiliateCoinToken.address,
        bankAddress,
        beneficiaryAddress,
        tokenRate,
        minBuyableAmount,
        maxTokensAmount,
        endDate
      )
    });
  }
};
