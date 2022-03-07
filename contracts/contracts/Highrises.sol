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
	// # TODO => Change this
	string private scavengerHuntUUID; // # TODO => Fix ty
	uint256 public listPrice = 20000000000000000; // 0.02 eth initial list price


	mapping(address => uint128) private saleLimitMap; // Tally if user has made a purchase

	// Keep track of state
	using Counters for Counters.Counter;
	Counters.Counter private _tokenIdCounter; // For keeping track of sequence

	constructor(string memory _baseURI) ERC721("Highrises", "Highrises") {
		baseURI = _baseURI;
	}

	/**
	 * Escape hatch to update URI.
	 */
	function setBaseURI(string memory _baseURI) public onlyOwner {
		baseURI = _baseURI;
	}

	// Minting
	/*------------------------------------*/
	function setScavengerHuntUUID(string memory _scavengerHuntUUID) public onlyOwner {
		scavengerHuntUUID = _scavengerHuntUUID;
	}

	function scavengerHunt(string memory uuid) public payable {
		require(listPrice <= msg.value, "LOW_ETH");
		require(
			saleLimitMap[_msgSender()] < saleLimitPerUser,
			"MAX_LIMIT_PER_BUYER"
		);
		// Allocate for premint when checking max supply
		require(_tokenIdCounter.current() < maxSupply, "MAX_REACHED");
		require(scavengerHuntUUID == uuid, "WRONG_UUID");

		saleLimitMap[_msgSender()] = saleLimitMap[_msgSender()] + 1;

		_safeMint(msg.sender, _tokenIdCounter.current());
		_tokenIdCounter.increment();
	}

	/**
	 * Mint, updating storage of sales.
	 */
	function mint() public payable {
		require(listPrice <= msg.value, "LOW_ETH");
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
	 * Get total token supply
	 */
	function totalSupply() public view returns (uint256) {
		return _tokenIdCounter.current();
	}

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
