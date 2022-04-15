import { useCall, useEthers } from '@usedapp/core';
import { useChainConfig } from 'common/hooks/useChainConfig';

const getTokenIdsFromBoolArray = (tokenIdsByAddress) => {
    return tokenIdsByAddress?.map((x, i) => x && i).filter((x) => x !== false);
};

export const useTokenHolder = () => {
    const { contract } = useChainConfig();
    const { account } = useEthers();

    const tokenIdsByAddress = useCall({
        contract,
        method: 'getOwnedTokenIdsByAddress',
        args: [account],
    });

    const ownedTokenIds = tokenIdsByAddress?.value?.[0]
        ? getTokenIdsFromBoolArray(tokenIdsByAddress?.value?.[0])
        : [];

    return ownedTokenIds;
};
