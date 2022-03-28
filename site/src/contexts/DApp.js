import { ChainId, DAppProvider } from '@usedapp/core';

const config = {
    readOnlyChainId: ChainId.Mainnet,
    readOnlyUrls: {
        readOnlyUrls: {
            [ChainId.Mainnet]:
                'https://mainnet.infura.io/v3/3165a249c65f4198bf57200109b8fadf',
        },
    },
};

export const DApp = ({ children }) => {
    return <DAppProvider config={config}>{children}</DAppProvider>;
};
