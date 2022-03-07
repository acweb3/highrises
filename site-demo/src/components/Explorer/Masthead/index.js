import { highrises as highrisesData } from 'assets/data/highrises';
import { Dropdown } from 'components/Explorer/Masthead/Dropdown';
import * as S from 'components/Explorer/Masthead/Masthead.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useExplorerRefContext } from 'contexts/ExplorerRef';

export const SORTS = {
    height: {
        name: 'Height',
        sort: (highrises) =>
            highrises.sort((buildingA, buildingB) => {
                return buildingA.height - buildingB.height;
            }),
    },
    decade: {
        isSelect: true,
        name: 'Decade',
        // # TODO => Remove this slice
        options: highrisesData.slice(0, 15).reduce((acc, highrise) => {
            if (acc[highrise?.decade]) return acc;

            return {
                ...acc,
                [highrise.decade]: {
                    value: highrise.decade,
                    sort: (highrises) =>
                        highrises.filter(
                            ({ decade }) => highrise.decade === decade
                        ),
                },
            };
        }, {}),
    },
    // style: {
    //     isSelect: true,
    //     name: 'Style',
    //     sort: (buildingA, buildingB) => buildingA.height - buildingB.height,
    // },
    // Decade: (buildingA, buildingB) => buildingA.height - buildingB.height,
    // City: (buildingA, buildingB) => buildingA.height - buildingB.height,
    // Attributes: (buildingA, buildingB) => buildingA.height - buildingB.height,
};

export const Masthead = ({ activeSort, setActiveSort }) => {
    const { activeHighrise } = useActiveHighriseContext();
    const { mastheadRef } = useExplorerRefContext();

    return (
        <S.Masthead ref={mastheadRef}>
            <S.TitleContainer>
                <S.Title isActive>
                    {activeHighrise?.name ?? 'THE BUILDINGS'}
                </S.Title>

                <S.SortBar>
                    <span>Sort — </span>
                    {Object.entries(SORTS).map(
                        ([sortKey, { isSelect, name, sort, options = {} }]) =>
                            isSelect ? (
                                <Dropdown
                                    activeSort={activeSort}
                                    setActiveSort={setActiveSort}
                                    name={name}
                                    sortKey={sortKey}
                                    options={options}
                                />
                            ) : (
                                <S.SortLink
                                    key={name}
                                    tabIndex={0}
                                    isActive={sortKey === activeSort?.sortKey}
                                    onClick={() => {
                                        setActiveSort(
                                            sortKey === activeSort?.sortKey
                                                ? undefined
                                                : {
                                                      sortKey,
                                                      sort,
                                                  }
                                        );
                                    }}
                                >
                                    {name}
                                </S.SortLink>
                            )
                    )}
                </S.SortBar>
            </S.TitleContainer>
            {activeHighrise?.description ? (
                <S.Description>{activeHighrise.description}</S.Description>
            ) : (
                <S.Description>
                    Highrises are among the most iconic and defining elements of
                    American Cities, and the technological advancement of the
                    twentieth century fostered new heights.
                </S.Description>
            )}
        </S.Masthead>
    );
};
