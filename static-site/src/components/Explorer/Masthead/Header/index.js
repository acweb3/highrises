import * as S from 'components/Explorer/Masthead/Header/Header.styled';
import { useActiveSortContext } from 'contexts/ActiveSort';

export const Header = () => {
    const { activeSort } = useActiveSortContext();

    return (
        <S.Header>
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
};
