import simpleContractAbi from './abi.json';
import { useEthers } from '@usedapp/core';
import { config } from 'config';
import { Contract } from 'ethers';

export const useChainConfig = () => {
    const ethers = useEthers();

    const contractAddress =
        ethers.library?.network?.chainId === 4
            ? config.rinkebyContractAddress
            : config.rinkebyContractAddress;

    return {
        openseaURL:
            ethers.library?.network?.chainId === 4
                ? 'testnets.opensea'
                : 'opensea',
        contract: new Contract(contractAddress, simpleContractAbi),
        contractAddress,
    };
};
