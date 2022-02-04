import collageAbi from './collage-abi.json';
import nftAbi from './nft-abi.json';
import reserveAbi from './reserve-abi.json';
import { useEthers } from '@usedapp/core';
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

    return {
        openseaURL:
            ethers.library?.network?.chainId === 4
                ? 'testnets.opensea'
                : 'opensea',
        contract: new Contract(contractAddress, nftAbi),
        contractAddress,
        reserveContract: new Contract(reserveContractAddress, reserveAbi),
        collageContractAddress,
        collageContract: new Contract(collageContractAddress, collageAbi),
        collageAbi,
    };
};
