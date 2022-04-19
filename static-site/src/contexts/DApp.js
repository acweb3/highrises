import { ChainId, DAppProvider } from '@usedapp/core';
import { config } from 'config';

const dappConfig = {
    readOnlyChainId: ChainId.Mainnet,
    readOnlyUrls: {
        [ChainId.Mainnet]: config.mainnetAlchemyUrl,
    },
    // readOnlyChainId: ChainId.Rinkeby,
    // readOnlyUrls: {
    //     [ChainId.Rinkeby]: config.rinkebyAlchemyUrl,
    // },
};

export const DApp = ({ children }) => {
    return <DAppProvider config={dappConfig}>{children}</DAppProvider>;
};
