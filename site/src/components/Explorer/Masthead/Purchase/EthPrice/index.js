import * as S from 'components/Explorer/Masthead/Purchase/EthPrice/EthPrice.styled';

export const EthPrice = () => {
    return (
        <S.EthPrice style={{ display: 'flex' }}>
            <S.EthPriceContent>
                1 <S.EthereumIcon />
            </S.EthPriceContent>
        </S.EthPrice>
    );
};
