import { useEthers, shortenAddress, useLookupAddress } from '@usedapp/core';
import { useWindowSize } from 'common/hooks/useWindowSize';

const errorMap = {
    'Error: No injected provider available': 'No wallet',
};

export const RegularContent = ({ error }) => {
    const { isMobile } = useWindowSize();
    const { account } = useEthers();
    const ens = useLookupAddress();
    const connectText = isMobile ? 'Connect' : 'Connect wallet';

    if (error) {
        return errorMap[error] ?? error;
    }

    return <>{account ? ens ?? shortenAddress(account) : connectText}</>;
};
