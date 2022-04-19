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

	describe("Mint", async () => {
		it("mint correctly", async () => {
			const totalSupplyBefore = await hardhatToken.totalSupply();
			expect(totalSupplyBefore).to.be.equal(0);
			await hardhatToken.mint(20);
			const totalSupplyAfter = await hardhatToken.totalSupply();
			expect(totalSupplyAfter).to.be.equal(20);
		});

		it("should only let owner mint", async () => {
			const signer = signers[0];
			await expect(
				hardhatToken.connect(signer).mint(1)
			).to.be.revertedWith("caller is not the owner");
		});
	});

	describe("Metadata", async () => {
		it("should have correct uri", async () => {
			await hardhatToken.mint(20);
			const tokenURI = await hardhatToken.tokenURI(0);
			expect(tokenURI).to.be.equal(`${config.ipfsURL}0`);
		});

		it("should have correct uri after update", async () => {
			await hardhatToken.mint(20);
			expect(await hardhatToken.tokenURI(0)).to.be.equal(
				`${config.ipfsURL}0`
			);

			await hardhatToken.setBaseURI("coolNewIPFS");
			expect(await hardhatToken.tokenURI(0)).to.be.equal(`coolNewIPFS0`);
		});
	});

	describe("ERC721A Functionality", async () => {
		it("should list owners of token", async () => {
			await hardhatToken.mint(5);
			const owner = await hardhatToken.owner();
			const tokensOfOwner = await hardhatToken.tokensOfOwner(owner);
		});
	});
});
