import { useCall, useEthers } from '@usedapp/core';
import { useChainConfig } from 'common/hooks/useChainConfig';
import { BigNumber } from 'ethers';

const getTokenIdsFromBoolArray = (tokenIdsByAddress) => {
    return tokenIdsByAddress?.map((x, i) => x && i).filter((x) => x !== false);
};

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
