import { useEthers, shortenAddress, useLookupAddress } from '@usedapp/core';
import { useWindowSize } from 'common/hooks/useWindowSize';
import * as S from 'components/ContextFAB/Web3Connect/Web3Connect.styled';

export const Web3Connect = () => {
    // const { account, activateBrowserWallet } = useEthers();
    // const ens = useLookupAddress();
    const { isMobile } = useWindowSize();

    const connectText = isMobile ? 'Connect' : 'Connect wallet';

    return (
        <S.Web3
        // onClick={activateBrowserWallet}
        >
            {connectText}
            {/* {account ? ens ?? shortenAddress(account) : connectText} */}
        </S.Web3>
    );
};
