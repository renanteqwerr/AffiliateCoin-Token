pragma solidity ^0.4.18;
import "zeppelin-solidity/contracts/token/StandardToken.sol";

contract AffiliateCoinToken is StandardToken {
  string public name = "AffiliateCoin Token";
  string public symbol = "AFLC";
  uint public decimals = 18;
  uint public INITIAL_SUPPLY = 1000000000 * (10 ** uint256(decimals));
  address constant public AffiliateCoinMultiSigWallet = 0x8F548f0CEB23DDC9ee76E126b29FAe94c607C3bc;

  function AffiliateCoinToken() public {
    totalSupply = INITIAL_SUPPLY;
    balances[AffiliateCoinMultiSigWallet] = INITIAL_SUPPLY;
  }
}
