import { ChainId, DAppProvider } from '@usedapp/core';
import { config } from 'config';

// This is now deprecated
const devDappConfig = {
    readOnlyChainId: ChainId.Rinkeby,
    readOnlyUrls: {
        [ChainId.Rinkeby]: config.rinkebyAlchemyUrl,
    },
};

const prodDappConfig = {
    readOnlyChainId: ChainId.Mainnet,
    readOnlyUrls: {
        [ChainId.Mainnet]: config.mainnetAlchemyUrl,
    },
};

export const DApp = ({ children }) => {
    return (
        <DAppProvider
            config={
                config.nodeEnv === 'development'
                    ? prodDappConfig
                    : prodDappConfig
            }
        >
            {children}
        </DAppProvider>
    );
};
