import { useEthers } from '@usedapp/core';
import collageAbi from 'common/hooks/collage-abi.json';
import nftAbi from 'common/hooks/nft-abi.json';
import reserveAbi from 'common/hooks/reserve-abi.json';
import { config } from 'config';
import { Contract } from 'ethers';

export const useChainConfig = () => {
    const ethers = useEthers();

    const contractAddress =
        ethers.library?.network?.chainId === 4
            ? config.rinkebyContractAddress
            : config.mainnetContractAddress;

    const reserveContractAddress =
        ethers.library?.network?.chainId === 4
            ? config.rinkebyReserveContractAddress
            : config.mainnetReserveContractAddress;

    const collageContractAddress =
        ethers.library?.network?.chainId === 4
            ? config.rinkebyCollageContractAddress
            : config.mainnetCollageContractAddress;

    // put this right here?
    const openseaURL =
        ethers.library?.network?.chainId === 4 ? 'testnets.opensea' : 'opensea';

    return {
        openseaURL,

        getOpenseaAssetsURL: (index) => {
            return `https://${openseaURL}.io/assets/${contractAddress}/${`${index}`}`;
        },

        getOpenseaEthURL: (ethAddress) => {
            return `https://${openseaURL}.io/${ethAddress}`;
        },

        contract: new Contract(contractAddress, nftAbi),
        contractAddress,
        reserveContract: new Contract(reserveContractAddress, reserveAbi),
        collageContractAddress,
        collageContract: new Contract(collageContractAddress, collageAbi),
        collageAbi,
    };
};
