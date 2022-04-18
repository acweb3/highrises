import { useEthers } from '@usedapp/core';
import { HighriseIcon } from 'components/ContextFAB/Web3Connect/HighriseIcon';
import { RegularContent } from 'components/ContextFAB/Web3Connect/RegularContent';
import * as S from 'components/ContextFAB/Web3Connect/Web3Connect.styled';

export const Web3Connect = ({ tokenIds }) => {
    const { activateBrowserWallet, error } = useEthers();

    return (
        <>
            {tokenIds.length ? (
                <S.Web3ConnectIcons>
                    {tokenIds.map((tokenId) => (
                        <HighriseIcon key={tokenId} tokenId={tokenId} />
                    ))}
                </S.Web3ConnectIcons>
            ) : (
                <S.Web3Connect onClick={activateBrowserWallet}>
                    <RegularContent error={error} />
                </S.Web3Connect>
            )}
        </>
    );
};
