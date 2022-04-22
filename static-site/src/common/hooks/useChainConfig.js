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

    // const reserveContractAddress =
    //     ethers.library?.network?.chainId === 1
    //         ? config.mainnetReserveContractAddress
    //         : config.rinkebyReserveContractAddress;

    return {
        openseaURL:
            ethers.library?.network?.chainId === 4
                ? 'testnets.opensea'
                : 'opensea',
        contract: new Contract(contractAddress, nftAbi),
        // reserveContract: new Contract(reserveContractAddress, reserveAbi),
        contractAddress,
    };
};
