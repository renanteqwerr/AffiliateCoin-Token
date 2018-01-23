var AffiliateCoinToken = artifacts.require("./AffiliateCoinToken.sol");

module.exports = function(deployer, network, accounts) {
  if (network === 'cli') {
    const totalSupply = web3.toWei("1000000000", "Ether"); // on Billion total supply
    const bankAddress = web3.eth.accounts[1];
    const beneficiaryAddress = web3.eth.accounts[2];
        deployer.deploy(AffiliateCoinToken,totalSupply).then(result => {
        })
    };
};
