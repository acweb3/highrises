import { useEthers, shortenAddress, useLookupAddress } from '@usedapp/core';
import { useWindowSize } from 'common/hooks/useWindowSize';

export const RegularContent = () => {
    const { isMobile } = useWindowSize();
    const { account } = useEthers();
    const ens = useLookupAddress();
    const connectText = isMobile ? 'Connect' : 'Connect wallet';

    return <>{account ? ens ?? shortenAddress(account) : connectText}</>;
};
