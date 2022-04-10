import { useEthers } from '@usedapp/core';
import { HighriseIcon } from 'components/ContextFAB/Web3Connect/HighriseIcon';
import { RegularContent } from 'components/ContextFAB/Web3Connect/RegularContent';
import * as S from 'components/ContextFAB/Web3Connect/Web3Connect.styled';

export const Web3Connect = ({ tokenIds }) => {
    const { activateBrowserWallet } = useEthers();

    return (
        <>
            {tokenIds.length ? (
                <HighriseIcon tokenId={tokenIds[0]} />
            ) : (
                <S.Web3 onClick={activateBrowserWallet}>
                    <RegularContent />
                </S.Web3>
            )}
        </>
    );
};
