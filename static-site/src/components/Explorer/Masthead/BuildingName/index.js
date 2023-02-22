import { getIndex } from 'common/helpers';
import * as S from 'components/Explorer/Masthead/BuildingName/BuildingName.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';

export const BuildingName = () => {
    const { activeHighrise, activeDescription } = useActiveHighriseContext();
    const aka = activeHighrise?.attributes.find(
        ({ trait_type }) => trait_type === 'AKA now'
    );
    return (
        <S.BuildingName isActiveDescription={Boolean(activeDescription)}>
            <S.BuildingNameHeader>
                {activeDescription?.header ?? activeHighrise.name}
            </S.BuildingNameHeader>

            {aka && (
                <S.BuildingNameLocation>{aka.value}</S.BuildingNameLocation>
            )}

            {activeHighrise && (
                <S.BuildingNameLocation>
                    #{getIndex(activeHighrise) + 1} — {activeHighrise.city},{' '}
                    {activeHighrise.state}
                </S.BuildingNameLocation>
            )}
        </S.BuildingName>
    );
};
