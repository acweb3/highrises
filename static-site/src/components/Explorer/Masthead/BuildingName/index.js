import { getIndex } from 'common/helpers';
import * as S from 'components/Explorer/Masthead/BuildingName/BuildingName.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';

export const BuildingName = () => {
    const { activeHighrise, activeDescription } = useActiveHighriseContext();

    return (
        <S.BuildingName>
            <S.BuildingNameHeader>
                {activeDescription?.header ?? activeHighrise.name}
            </S.BuildingNameHeader>
            {activeHighrise && (
                <S.BuildingNameLocation>
                    #{getIndex(activeHighrise) + 1} — {activeHighrise.city},{' '}
                    {activeHighrise.state}
                </S.BuildingNameLocation>
            )}
        </S.BuildingName>
    );
};
