require("dotenv").config();

const chai = require("chai");
const { solidity } = require("ethereum-waffle");

const { config } = require("../config");

chai.use(solidity);

const { expect } = chai;

const MINT_AMOUNT = 20;

describe("Highrises contract", () => {
	let Highrises;
	let highrisesToken;
	let highriseShuffleToken;
	let owner;
	let signers;
	let recipient;
	let minter;
	let minter2;

	beforeEach(async () => {
		Highrises = await ethers.getContractFactory("Highrises");
		HighriseShuffle = await ethers.getContractFactory("HighriseShuffle");
		[owner, recipient, minter, minter2, ...signers] =
			await ethers.getSigners();

		highrisesToken = await Highrises.deploy("ipfs://...");
		highriseShuffleToken = await HighriseShuffle.deploy(
			[0, 1, 2, 3, 4, 5, 6, 7],
			highrisesToken.address,
			recipient.address
		);
	});

	describe("Shuffle", async () => {
		it("should deploy correctly", async () => {
			const ownerAddress = await highrisesToken.owner();

			await highrisesToken.mint(MINT_AMOUNT);

			await Promise.all(
				[...Array(MINT_AMOUNT)].map(async (x, i) => {
					await highrisesToken[
						"safeTransferFrom(address,address,uint256)"
					](ownerAddress, recipient.address, i);

					return;
				})
			);

			await highrisesToken
				.connect(recipient)
				.setApprovalForAll(highriseShuffleToken.address, true);

			expect(await highrisesToken.ownerOf(0)).to.be.equal(
				recipient.address
			);

			await highriseShuffleToken.connect(minter).mint({
				value: ethers.utils.parseEther("0.5"),
			});

			await highriseShuffleToken.connect(minter2).mint({
				value: ethers.utils.parseEther("0.5"),
			});

			expect(
				highriseShuffleToken.connect(minter).mint({
					value: ethers.utils.parseEther("0.25"),
				})
			).to.be.revertedWith("LOW_ETH");

			expect(await highrisesToken.ownerOf(0)).to.be.equal(minter.address);
			expect(await highrisesToken.ownerOf(1)).to.be.equal(
				minter2.address
			);

			const balanceBefore = await ethers.provider.getBalance(
				recipient.address
			);

			await highriseShuffleToken.withdraw();

			const balanceAfter = await ethers.provider.getBalance(
				recipient.address
			);

			console.log({
				balanceBefore,
				balanceAfter,
			});
		});
	});
});
