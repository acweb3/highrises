import * as S from 'components/Explorer/Masthead/Header/Header.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';

export const Header = () => {
    const { activeSort } = useActiveHighriseContext();

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
