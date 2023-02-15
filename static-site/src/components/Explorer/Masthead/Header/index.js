import * as S from 'components/Explorer/Masthead/Header/Header.styled';
import { useActiveSortContext } from 'contexts/ActiveSort';
import { forwardRef } from 'react';

export const Header = forwardRef((_, ref) => {
    const { activeSort } = useActiveSortContext();

    return (
        <S.Header ref={ref}>
            <S.HeaderDouble>
                <S.HeaderFilled>
                    {activeSort?.sortValue ?? 'Highrises'}
                </S.HeaderFilled>
                <S.HeaderBasic>
                    {activeSort?.sortValue ?? 'Highrises'}
                </S.HeaderBasic>
            </S.HeaderDouble>

            <S.HeaderSubtitle>
                {activeSort?.sortName ?? 'Collection'}
            </S.HeaderSubtitle>
        </S.Header>
    );
});
