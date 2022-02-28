import * as S from 'components/Explorer/BuildingsExplorer/BuildingsMasthead/BuildingsMasthead.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';

export const SORTS = {
    Height: (buildingA, buildingB) => {
        return buildingA.height - buildingB.height;
    },
    Style: (buildingA, buildingB) => buildingA.height - buildingB.height,
    City: (buildingA, buildingB) => buildingA.height - buildingB.height,
    Decade: (buildingA, buildingB) => buildingA.height - buildingB.height,
    Attributes: (buildingA, buildingB) => buildingA.height - buildingB.height,
};

export const BuildingsMasthead = ({ activeSort, setActiveSort }) => {
    const { activeHighrise } = useActiveHighriseContext();

    return (
        <S.BuildingsMasthead>
            <S.TitleContainer>
                <S.Title isActive>
                    {activeHighrise?.name ?? 'THE BUILDINGS'}
                </S.Title>

                <S.SortBar>
                    <span>Sort — </span>
                    {Object.keys(SORTS).map((sort) => (
                        <S.SortLink
                            key={sort}
                            tabIndex={0}
                            isActive={sort === activeSort}
                            onClick={() => {
                                setActiveSort(
                                    sort === activeSort ? undefined : sort
                                );
                            }}
                        >
                            {sort}
                        </S.SortLink>
                    ))}
                </S.SortBar>
            </S.TitleContainer>
            {activeHighrise?.description && (
                <S.Description>{activeHighrise.description}</S.Description>
            )}
        </S.BuildingsMasthead>
    );
};
