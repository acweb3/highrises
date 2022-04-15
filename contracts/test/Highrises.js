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

	describe("Metadata", async () => {
		it("list correct token owners", async () => {
			const totalSupplyBefore = await hardhatToken.totalSupply();
			expect(totalSupplyBefore).to.be.equal(0);

			console.log(ethers.utils.parseEther("0.02"));

			await Promise.all(
				signers.slice(0, 4).map(async (signer, i) => {
					await hardhatToken.connect(signer).mint(i, {
						value: ethers.utils.parseEther("0.02"),
					});
				})
			);

			expect(
				await hardhatToken.getOwnedTokenIdsByAddress(signers[0].address)
			).to.deep.equal([true, ...[...Array(49)].map((x) => false)]);

			await hardhatToken.connect(signers[0]).mint(4, {
				value: ethers.utils.parseEther("0.02"),
			});

			expect(
				await hardhatToken.getOwnedTokenIdsByAddress(signers[0].address)
			).to.deep.equal([
				true,
				false,
				false,
				false,
				true,
				...[...Array(45)].map((x) => false),
			]);
		});
	});
});
