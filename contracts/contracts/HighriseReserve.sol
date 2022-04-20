// SPDX-License-Identifier: SPDX-License
/// @author aboltc
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract HighriseReserve is Ownable {
	constructor(uint8 lowerTokenIdBound_, uint8 upperTokenIdBound_) {
		// merkleRoot = _merkleRoot;
		lowerTokenIdBound = lowerTokenIdBound_;
		upperTokenIdBound = upperTokenIdBound_;
	}

	/**--------------------------
	 * Merkle root allowlist
	 */
	/// @notice root of hash generated in scripts directory
	bytes32 merkleRoot;

	/**
	 * @notice reset merkle root
	 * @param _merkleRoot root of hash generated in scripts directory
	 */
	function setMerkleRoot(bytes32 _merkleRoot) public onlyOwner {
		merkleRoot = _merkleRoot;
	}

	/**--------------------------
	 * Opening mechanics
	 */
	bool public isPrivateReserveOpen = false;
	bool public isPublicReserveOpen = false;

	// function handleEndDrop() public onlyOwner {
	// 	isPrivateReserveOpen = false;
	// 	isPublicReserveOpen = false;
	// 	currentDropIndex = currentDropIndex + 1;
	// }

	function openPrivateReserve() public onlyOwner {
		isPrivateReserveOpen = true;
	}

	function openPublicReserve() public onlyOwner {
		isPublicReserveOpen = true;
	}

	/**--------------------------
	 * Reserve mechanics
	 */
	uint8 lowerTokenIdBound;
	uint8 upperTokenIdBound;
	mapping(uint8 => address) public tokenAddressMap;

	function getCurrentReserve() public view returns (address[] memory) {
		require(lowerTokenIdBound < upperTokenIdBound, "TOKEN_BOUNDS_ERROR");

		address[] memory currentReserve = new address[](
			upperTokenIdBound - lowerTokenIdBound
		);
		for (uint8 i = 0; i < upperTokenIdBound - lowerTokenIdBound; i++) {
			currentReserve[i] = tokenAddressMap[i];
		}

		return currentReserve;
	}

	function setTokenBounds(uint8 lowerTokenIdBound_, uint8 upperTokenIdBound_)
		public
		onlyOwner
	{
		require(lowerTokenIdBound < upperTokenIdBound, "TOKEN_BOUNDS_ERROR");
		lowerTokenIdBound = lowerTokenIdBound_;
		upperTokenIdBound = upperTokenIdBound_;
	}

	function reserve(uint8 tokenId) public {
		require(
			tokenId >= lowerTokenIdBound && tokenId <= upperTokenIdBound,
			"TOKEN_OUT_OF_BOUNDS"
		);

		tokenAddressMap[tokenId] = msg.sender;
	}

	// function privateReserveTokenId(uint8 tokenId, bytes32 calldata _merkleProof) public {

	// }

	// function isAddressOnAllowList(address _address) pure private returns (bool) {
	//     bytes32 leaf = keccak256(abi.encodePacked(_address));
	//     return MerkleProof.verify(proof, root, leaf);
	// }

	// function privateReserveTokenId(uint8 tokenId, bytes32 calldata _merkleProof) public {
	// require(
	// 	addressReserve[currentDropIndex][msg.sender] != true,
	// 	"ADDRESS_ALREADY_RESERVED"
	// );
	// 	require(
	// 		addressTokenReserve[currentDropIndex][tokenId] == address(0),
	// 		"TOKEN_ALREADY_RESERVED"
	// 	);
	// 	require(
	// 		isPrivateReserveOpen && isAddressOnAllowList(msg.sender),
	// 		"NOT_ON_LIST"
	// 	);

	// 	addressReserve[currentDropIndex][msg.sender] = true;
	// 	addressTokenReserve[currentDropIndex][tokenId] = msg.sender;
	// }
}
