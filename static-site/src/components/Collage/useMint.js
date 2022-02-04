import { useCall, useEthers } from '@usedapp/core';
import { useChainConfig } from 'common/hooks/useChainConfig';
import { utils, Contract } from 'ethers';
import { useState } from 'react';

export const useMint = () => {
    const { contract, collageContract, collageContractAddress, collageAbi } =
        useChainConfig();
    const { account, library } = useEthers();
    const [error, setError] = useState('');
    const [isMinting, setIsMinting] = useState(false);

    const balanceOf = useCall(
        Boolean(account) && {
            contract: contract,
            method: 'balanceOf',
            args: [account],
        }
    );

    const hasClaimed = useCall(
        Boolean(account) && {
            contract: collageContract,
            method: 'claimedAddresses',
            args: [account],
        }
    );

    const collageBalanceOf = useCall(
        Boolean(account) && {
            contract: collageContract,
            method: 'balanceOf',
            args: [account],
        }
    );

    const collageSupply = useCall({
        contract: collageContract,
        method: 'totalSupply',
        args: [],
    });

    const isWhiteListed = balanceOf && balanceOf?.value[0]?.toNumber() !== 0;
    const isClaimed = hasClaimed?.value[0];

    const mint = async () => {
        setError('');
        setIsMinting(true);

        const signer = library?.getSigner();
        const mintContract = new Contract(
            collageContractAddress,
            collageAbi,
            signer
        );

        try {
            await mintContract.mint(
                isWhiteListed && !isClaimed
                    ? { value: utils.parseEther(`0.0`) }
                    : {
                          value: utils.parseEther(`0.08`),
                      }
            );
        } catch (e) {
            if (e?.toString?.().includes?.('insufficient funds')) {
                setError('Insufficient funds');
                return;
            }

            if (e?.toString?.().includes?.('MAX_SUPPLY_OBO')) {
                setError('Minted out');
                return;
            }

            setError('Something went wrong');
            console.error(e);
        } finally {
            setIsMinting(false);
        }
    };

    return {
        mint,
        isWhiteListed,
        hasClaimed: isClaimed,
        collageSupply: collageSupply?.value[0]?.toNumber(),
        hasMinted:
            collageBalanceOf && collageBalanceOf.value[0].toNumber() !== 0,
        mintError: error,
        isMinting,
    };
};
