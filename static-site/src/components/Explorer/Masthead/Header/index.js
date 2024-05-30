import * as S from 'components/Explorer/Masthead/Header/Header.styled';
import { useActiveSortContext } from 'contexts/ActiveSort';
import { forwardRef } from 'react';

export const Header = forwardRef((_, ref) => {
    const { activeSort } = useActiveSortContext();
    const text = activeSort?.sortValue ?? 'Highrises';

    return (
        <>
            <S.HeaderMobileMargin />

            <S.Header ref={ref}>
                <S.HeaderSizeWrapper>
                    <S.HeaderDouble isLarge={text.length >= 10}>
                        <S.HeaderFilled>{text}</S.HeaderFilled>
                        <S.HeaderBasic>{text}</S.HeaderBasic>
                    </S.HeaderDouble>

                    <S.HeaderButtonWrapper
                        href="https://www.hythacg.com/highrises-shop"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            marginRight: '8px',
                            marginLeft: 'auto',
                        }}
                    >
                        <a
                            href="https://www.hythacg.com/highrises-shop"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <S.HeaderButton>Shop</S.HeaderButton>
                        </a>
                    </S.HeaderButtonWrapper>
                </S.HeaderSizeWrapper>

                <S.HeaderSubtitle>
                    {activeSort?.sortName ?? 'Collection'}
                </S.HeaderSubtitle>
            </S.Header>
        </>
    );
});
