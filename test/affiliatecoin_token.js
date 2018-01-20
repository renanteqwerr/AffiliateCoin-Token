const AffiliateCoinToken = artifacts.require("./AffiliateCoinToken.sol")

const expectedTotalSupply = web3.toWei("10000000", "Ether") // AFL
let token

contract('AffiliateCoinToken', function(accounts) {
  beforeEach(async () => {
    token = await AffiliateCoinToken.new(expectedTotalSupply).then(function(instance){
      return instance;
    });
  })

  it("should have correct total supply set", async () => {
    const actualTotalSupply = await token.totalSupply()
    console.log(actualTotalSupply.valueOf());
    assert.equal(actualTotalSupply.valueOf(), web3.toBigNumber(expectedTotalSupply), "Wrong total supply")
  })

  it("should give all of initial supply to token owner", async () => {
    const actualBalance = await token.balanceOf.call(accounts[0])

    assert.equal(actualBalance.valueOf(), web3.toBigNumber(expectedTotalSupply), "Owner has wrong balance")
  })

  it("should have correct token meta info", async () => {
    const expectedName = "AffiliateCoin Token"
    const expectedSymbol = "AFL"
    const expectedDecimals = 18

    const actualName = await token.name()
    const actualSymbol = await token.symbol()
    const actualDecimals = await token.decimals()

    assert.equal(actualName.valueOf(), expectedName, "Wrong token name")
    assert.equal(actualSymbol.valueOf(), expectedSymbol, "Wrong token symbol")
    assert.equal(actualDecimals.valueOf(), expectedDecimals, "Wrong decimals value")
  })
})
