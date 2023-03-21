import { useEthers } from '@usedapp/core';
import { useChainConfig } from 'common/hooks/useChainConfig';
import { Contract, utils } from 'ethers';
import { useState } from 'react';

export const useMint = () => {
    const [isMinting, setIsMinting] = useState(false);
    const [error, setError] = useState(undefined);
    const { mintContract } = useChainConfig();
    const { library } = useEthers();

    const mint = async () => {
        setError(undefined);
        setIsMinting(true);

        try {
            const signer = library.getSigner();
            const contract = new Contract(
                mintContract.address,
                mintContract.interface,
                signer
            );

            const token = await contract.mint({
                value: utils.parseEther('0.5'),
            });

            return token;
        } catch (e) {
            console.log({ e });
            setError(JSON.stringify(e));
        }
    };

    return {
        isMinting,
        mint,
        error,
    };
};
