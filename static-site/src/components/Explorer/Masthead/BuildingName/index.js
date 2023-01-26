import { getIndex } from 'common/helpers';
import * as S from 'components/Explorer/Masthead/BuildingName/BuildingName.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';

export const BuildingName = () => {
    const { activeHighrise } = useActiveHighriseContext();

    return (
        <S.BuildingName>
            <S.BuildingNameHeader>{activeHighrise.name}</S.BuildingNameHeader>
            <S.BuildingNameLocation>
                #{getIndex(activeHighrise) + 1} — {activeHighrise.city},{' '}
                {activeHighrise.state}
            </S.BuildingNameLocation>
        </S.BuildingName>
    );
};
