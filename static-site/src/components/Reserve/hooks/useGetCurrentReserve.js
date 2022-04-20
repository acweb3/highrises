import { useCall, useEthers, shortenAddress } from '@usedapp/core';
import { useChainConfig } from 'common/hooks/useChainConfig';
import { BigNumber } from 'ethers';

export const useGetCurrentReserve = () => {
    const { reserveContract } = useChainConfig();
    const currentReserveCall = useCall({
        contract: reserveContract,
        method: 'getCurrentReserve',
        args: [],
    });
    const reservedAddresses = currentReserveCall?.value?.[0];

    return {
        reservedAddresses,
    };
};
