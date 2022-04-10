import simpleContractAbi from './abi.json';
import { useCalls, useEthers } from '@usedapp/core';
import { config } from 'config';
import { Contract } from 'ethers';

export const useTokenHolder = () => {
    const contract = new Contract(config.contractAddress, simpleContractAbi);
    const { account } = useEthers();

    // # TODO => expand this
    const tokenOwners = useCalls(
        [...Array(2)].map((x, i) => ({
            contract,
            method: 'ownerOf',
            args: [i],
        }))
    );

    return tokenOwners
        .map((tokenOwner, index) => {
            if (tokenOwner?.value?.[0] === account) {
                return index;
            }

            return undefined;
        })
        .filter((tokenOwner) => tokenOwner !== undefined);
};
