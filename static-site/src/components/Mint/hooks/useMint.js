import { useEthers } from '@usedapp/core';
import { useChainConfig } from 'common/hooks/useChainConfig';
import { Contract, utils } from 'ethers';

export const useMint = () => {
    const { mintContract } = useChainConfig();
    const { library } = useEthers();

    const mint = async () => {
        const signer = library.getSigner();
        const mintContract = new Contract(
            mintContract.address,
            mintContract.interface,
            signer
        );

        const token = await mintContract.mint({
            value: utils.parseEther('0.5'),
        });

        return token;
    };

    return {
        mint,
    };
};
