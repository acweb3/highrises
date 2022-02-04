require("dotenv").config();

const chai = require("chai");
const { solidity } = require("ethereum-waffle");

const { config } = require("../config");

chai.use(solidity);

const { expect } = chai;

describe("Highrise Reserve contract", () => {
	let HighriseReserve;
	let hardhatToken;
	let owner;
	let signers;

	beforeEach(async () => {
		HighriseReserve = await ethers.getContractFactory("HighriseReserve");
		[owner, ...signers] = await ethers.getSigners();

		hardhatToken = await HighriseReserve.deploy(0, 20);
	});

	describe("Deployment", async () => {
		it("should set the right owner", async () => {
			const ownerAddress = await hardhatToken.owner();
			expect(ownerAddress).to.equal(owner.address);
		});
	});

	describe("Reserve", async () => {
		it("add addresses", async () => {
			await hardhatToken.setReserveAddresses(
				signers.slice(0, 5).map((signer) => signer.address)
			);

			expect(
				await hardhatToken.reserveAddressMap(signers[0].address)
			).to.be.equal(true);
		});

		it("reserve token private", async () => {
			await hardhatToken.setIsPrivateReserveOpen(true);
			await hardhatToken.setReserveAddresses([signers[0].address]);

			expect(
				await hardhatToken.reserveAddressMap(signers[0].address)
			).to.be.equal(true);

			await hardhatToken.connect(signers[0]).reserve(0);

			expect(
				await hardhatToken.reserveAddressMap(signers[0].address)
			).to.be.equal(false);

			expect(await hardhatToken.tokenAddressMap(0)).to.be.equal(
				signers[0].address
			);
		});

		it("reserve token public", async () => {
			await hardhatToken.setIsPublicReserveOpen(true);

			await hardhatToken.connect(signers[0]).reserve(0);

			expect(
				await hardhatToken.reserveAddressMap(signers[0].address)
			).to.be.equal(false);

			expect(await hardhatToken.tokenAddressMap(0)).to.be.equal(
				signers[0].address
			);
		});
	});
});
