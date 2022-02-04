// SPDX-License-Identifier: SPDX-License
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/*
a⚡️c

high rises demo
*/

contract Highrises is ERC721, Ownable {
	string public baseURI;

	uint128 private constant maxSupply = 50; // Max supply
	uint128 private saleLimitPerUser = 2;
	uint256 public listPrice = 0; // null for now ;)

	mapping(address => uint128) private saleLimitMap; // Tally if user has made a purchase

	// Keep track of state
	using Counters for Counters.Counter;
	Counters.Counter private _tokenIdCounter; // For keeping track of sequence

	/**
	 * A bit wacky, but artist addresses and tokenIds are parallel arrays that
	 * compose into matching key-value pairs within premints.
	 *
	 * @param _baseURI base uri for tokens
	 */
	constructor(string memory _baseURI) ERC721("Highrises", "Highrises") {
		baseURI = _baseURI;
	}

	// Minting
	/*------------------------------------*/

	/**
	 * Mint, updating storage of sales.
	 */
	function mint() public {
		require(
			saleLimitMap[_msgSender()] < saleLimitPerUser,
			"MAX_LIMIT_PER_BUYER"
		);
		// Allocate for premint when checking max supply
		require(_tokenIdCounter.current() < maxSupply, "MAX_REACHED");

		saleLimitMap[_msgSender()] = saleLimitMap[_msgSender()] + 1;

		_safeMint(msg.sender, _tokenIdCounter.current());
		_tokenIdCounter.increment();
	}

	// ERC721 Things
	/*------------------------------------*/

	/**
	 * Get token URI
	 */
	function tokenURI(uint256 _tokenId)
		public
		view
		override
		returns (string memory)
	{
		require(_exists(_tokenId), "TOKEN_DNE");
		return string(abi.encodePacked(baseURI, Strings.toString(_tokenId)));
	}
}
