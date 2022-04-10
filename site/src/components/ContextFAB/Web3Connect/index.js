import { useEthers } from '@usedapp/core';
import { HighriseIcon } from 'components/ContextFAB/Web3Connect/HighriseIcon';
import { RegularContent } from 'components/ContextFAB/Web3Connect/RegularContent';
import * as S from 'components/ContextFAB/Web3Connect/Web3Connect.styled';

export const Web3Connect = ({ tokenIds }) => {
    const { activateBrowserWallet } = useEthers();

    return (
        <>
            {tokenIds.length ? (
                <S.Web3ConnectIcons>
                    {tokenIds.map((tokenId) => (
                        <HighriseIcon tokenId={tokenIds[tokenId]} />
                    ))}
                </S.Web3ConnectIcons>
            ) : (
                <S.Web3Connect onClick={activateBrowserWallet}>
                    <RegularContent />
                </S.Web3Connect>
            )}
        </>
    );
};
