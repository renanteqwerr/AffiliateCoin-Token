pragma solidity ^0.4.18;
import "zeppelin-solidity/contracts/token/StandardToken.sol";

contract AffiliateCoinToken is StandardToken {
  string public name = "AffiliateCoin Token";
  string public symbol = "AFLC";
  uint public decimals = 2;
  uint public INITIAL_SUPPLY = 10000 * (10 ** decimals);

  function HamburgerCoin() public {
    totalSupply = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}
