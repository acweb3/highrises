require("dotenv").config();

const chai = require("chai");
const { solidity } = require("ethereum-waffle");

chai.use(solidity);

const { expect } = chai;

describe("Highrise Reserve contract", () => {
	let HighrisePaymentSplitter;
	let hardhatToken;
	let owner;
	let signers;

	beforeEach(async () => {
		HighrisePaymentSplitter = await ethers.getContractFactory(
			"HighrisePaymentSplitter"
		);
		[owner, ...signers] = await ethers.getSigners();

		const firstThreeAddresses = [...Array(3)].map(
			(x, i) => signers[i].address
		);

		hardhatToken = await HighrisePaymentSplitter.deploy(
			firstThreeAddresses,
			[55, 20, 25]
		);
	});

	describe("Deployment", async () => {
		it("should set the right owner", async () => {
			const ownerAddress = await hardhatToken.owner();
			expect(ownerAddress).to.equal(owner.address);
		});
	});

	describe("Split payment", async () => {
		it("should receive eth", async () => {
			await owner.sendTransaction({
				to: hardhatToken.address,
				value: ethers.utils.parseEther("1.0"),
			});
		});

		it("should split payment", async () => {
			const initialBalanceSigner0 = await ethers.provider.getBalance(
				signers[0].address
			);
			await owner.sendTransaction({
				to: hardhatToken.address,
				value: ethers.utils.parseEther("1.0"),
			});
			await hardhatToken["release(address)"](signers[0].address);
			const afterBalanceSigner0 = await ethers.provider.getBalance(
				signers[0].address
			);

			await owner.sendTransaction({
				to: hardhatToken.address,
				value: ethers.utils.parseEther("1.0"),
			});

			await hardhatToken["release(address)"](signers[1].address);
			await hardhatToken["release(address)"](signers[0].address);

			expect(initialBalanceSigner0).to.be.equal(
				ethers.BigNumber.from("10000000000000000000000")
			);
			expect(afterBalanceSigner0).to.be.equal(
				ethers.BigNumber.from("10000550000000000000000")
			);
			expect(
				await ethers.provider.getBalance(signers[1].address)
			).to.be.equal(ethers.BigNumber.from("10000400000000000000000"));

			expect(
				await ethers.provider.getBalance(hardhatToken.address)
			).to.be.equal(ethers.BigNumber.from("500000000000000000"));

			await hardhatToken["release(address)"](signers[2].address);
			expect(
				await ethers.provider.getBalance(signers[2].address)
			).to.be.equal(ethers.BigNumber.from("10000500000000000000000"));

			expect(
				await ethers.provider.getBalance(hardhatToken.address)
			).to.be.equal(ethers.BigNumber.from("0"));
		});
	});
});
