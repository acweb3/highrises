import { useContractFunction, useEthers } from '@usedapp/core';
import { useChainConfig } from 'common/hooks/useChainConfig';

export const useReserve = ({ tokenId }) => {
    const { reserveContract } = useChainConfig();
    const { send } = useContractFunction(reserveContract, 'reserve', {
        transactionName: 'reserve',
    });

    const reserve = async () => {
        send(tokenId);
    };

    return {
        reserve,
    };
};
