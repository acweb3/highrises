import * as S from 'components/Explorer/Masthead/Header/Header.styled';
import { useActiveSortContext } from 'contexts/ActiveSort';
import { forwardRef } from 'react';

export const Header = forwardRef((_, ref) => {
    const { activeSort } = useActiveSortContext();

    const text = activeSort?.sortValue ?? 'Highrises';

    return (
        <S.Header ref={ref}>
            <S.HeaderSizeWrapper>
                <S.HeaderDouble isLarge={text.length >= 10}>
                    <S.HeaderFilled>{text}</S.HeaderFilled>
                    <S.HeaderBasic>{text}</S.HeaderBasic>
                </S.HeaderDouble>
            </S.HeaderSizeWrapper>

            <S.HeaderSubtitle>
                {activeSort?.sortName ?? 'Collection'}
            </S.HeaderSubtitle>
        </S.Header>
    );
});
