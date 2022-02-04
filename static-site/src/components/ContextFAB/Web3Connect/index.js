import { useEthers } from '@usedapp/core';
import { RegularContent } from 'components/ContextFAB/Web3Connect/RegularContent';
import * as S from 'components/ContextFAB/Web3Connect/Web3Connect.styled';

export const Web3Connect = ({ className }) => {
    const { activateBrowserWallet, error } = useEthers();

    return (
        <S.Web3Connect className={className} onClick={activateBrowserWallet}>
            <RegularContent error={error} />
        </S.Web3Connect>
    );
};
