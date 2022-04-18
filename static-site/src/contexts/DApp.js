import { ChainId, DAppProvider } from '@usedapp/core';

const config = {
    readOnlyChainId: ChainId.Rinkeby,
    readOnlyUrls: {
        [ChainId.Rinkeby]:
            'https://eth-rinkeby.alchemyapi.io/v2/tJW3Lzn-Y5PDEacAZLZZQrc-EnzlQ7iM',
    },
};

export const DApp = ({ children }) => {
    return <DAppProvider config={config}>{children}</DAppProvider>;
};
