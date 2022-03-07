require("dotenv").config();

const chai = require("chai");
const { solidity } = require("ethereum-waffle");

const { config } = require("../config");

chai.use(solidity);

const { expect } = chai;

describe("Highrises contract", () => {
	let Highrises;
	let hardhatToken;
	let owner;
	let signers;

	/**
	 * Mocha has four lifecycle methods — before, beforeEach, after, afterEach
	 */
	beforeEach(async () => {
		Highrises = await ethers.getContractFactory("Highrises");
		[owner, ...signers] = await ethers.getSigners();

		hardhatToken = await Highrises.deploy(config.ipfsURL);
	});

	describe("Deployment", async () => {
		it("should set the right owner", async () => {
			const ownerAddress = await hardhatToken.owner();
			expect(ownerAddress).to.equal(owner.address);
		});

		it("should assign the total supply of tokens to owner", async () => {
			const ownerBalance = await hardhatToken.balanceOf(owner.address);
			const totalSupply = await hardhatToken.totalSupply();
			expect(ownerBalance).to.deep.equal(totalSupply);
		});
	});

	describe("Transactions", async () => {
		it("should not blind mint more than limit", async () => {
			await Promise.all(
				[...Array(2)].map(async () => {
					return await hardhatToken.mint({
						value: ethers.utils.parseEther("0.02"),
					});
				})
			);

			await expect(
				hardhatToken.mint({
					value: ethers.utils.parseEther("0.02"),
				})
			).to.be.revertedWith("MAX_LIMIT_PER_BUYER");

			const totalSupplyAfter = await hardhatToken.totalSupply();
			expect(totalSupplyAfter).to.be.equal(2);
		});
	});
});
