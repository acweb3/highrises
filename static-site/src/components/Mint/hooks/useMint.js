import { useEthers } from '@usedapp/core';
import { useChainConfig } from 'common/hooks/useChainConfig';
import { Contract, utils } from 'ethers';
import { useState } from 'react';

export const useMint = () => {
    const [isMinting, setIsMinting] = useState(false);
    const [error, setError] = useState(undefined);
    const [token, setToken] = useState(undefined);
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

            setToken(token);
        } catch (e) {
            if (
                e.message.includes(
                    'insufficient funds for intrinsic transaction'
                )
            ) {
                setError('Low funds, requires 0.5 eth');
                return;
            }

            setError(JSON.stringify(e?.message || e));
        }
    };

    return {
        token,
        isMinting,
        mint,
        error,
    };
};
