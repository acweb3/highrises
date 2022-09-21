import { useCall, useEthers } from '@usedapp/core';
import { useChainConfig } from 'common/hooks/useChainConfig';

export const useTokenHolder = () => {
    const { contract } = useChainConfig();
    const { account } = useEthers();

    const tokenIdsByAddress = useCall({
        contract,
        method: 'tokensOfOwner',
        args: [account],
    });

    const bigNumberTokenIds = tokenIdsByAddress?.value?.[0] ?? [];
    const tokenIds = bigNumberTokenIds.map((tokenId) => tokenId.toNumber());

    return tokenIds;
};
