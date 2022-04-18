import simpleContractAbi from './abi.json';
import { useEthers } from '@usedapp/core';
import { config } from 'config';
import { Contract } from 'ethers';

export const useChainConfig = () => {
    const ethers = useEthers();

    const contractAddress =
        ethers.library?.network?.chainId === 1
            ? config.mainnetContractAddress
            : config.rinkebyContractAddress;

    return {
        openseaURL:
            ethers.library?.network?.chainId === 1
                ? 'opensea'
                : 'testnets.opensea',
        contract: new Contract(contractAddress, simpleContractAbi),
        contractAddress,
    };
};
