import { ChainId, DAppProvider } from '@usedapp/core';
import { config } from 'config';

// This is now deprecated
const devDappConfig = {
    readOnlyChainId: '11155111',
    readOnlyUrls: {
        ['11155111']: config.rinkebyAlchemyUrl,
    },
};

const prodDappConfig = {
    readOnlyChainId: ChainId.Mainnet,
    readOnlyUrls: {
        [ChainId.Mainnet]: config.mainnetAlchemyUrl,
    },
};

export const DApp = ({ children }) => {
    return <DAppProvider config={prodDappConfig}>{children}</DAppProvider>;
};
