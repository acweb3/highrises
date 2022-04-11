import { useCalls, useEthers } from '@usedapp/core';
import { useChainConfig } from 'common/hooks/useChainConfig';

export const useTokenHolder = () => {
    const { contract } = useChainConfig();
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
            if (account && tokenOwner?.value?.[0] === account) {
                return index;
            }

            return undefined;
        })
        .filter((tokenOwner) => tokenOwner !== undefined);
};
