pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/StandardToken.sol';
import 'zeppelin-solidity/contracts/lifecycle/Pausable.sol';

/**
 * @title AffiliateCoinToken
 * @dev AffiliateCoin.io token contract.
 */
contract AffiliateCoinToken is StandardToken, Pausable {

    string public constant name = "AffiliateCoin Token";
    string public constant symbol = "AFL";
    uint32 public constant decimals = 18;

    /**
     * @dev Give all tokens to msg.sender.
     */
    function AffiliateCoinToken(uint _totalSupply) {
        require (_totalSupply > 0);
        totalSupply = balances[msg.sender] = 1000000000;
    }

    function transfer(address _to, uint _value) whenNotPaused returns (bool) {
        return super.transfer(_to, _value);
    }

    function transferFrom(address _from, address _to, uint _value) whenNotPaused returns (bool) {
        return super.transferFrom(_from, _to, _value);
    }
}
