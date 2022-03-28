import { useEthers, shortenAddress, useLookupAddress } from '@usedapp/core';
import * as S from 'components/ContextFAB/Web3Connect/Web3Connect.styled';

export const Web3Connect = () => {
    const { account, activateBrowserWallet } = useEthers();
    const ens = useLookupAddress();

    return (
        <S.Web3 onClick={activateBrowserWallet}>
            {account ? ens ?? shortenAddress(account) : 'Connect wallet'}
        </S.Web3>
    );
};
