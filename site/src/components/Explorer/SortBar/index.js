import { highrises as highrisesData } from 'assets/data/highrises';
import { Dropdown } from 'components/Explorer/Masthead/Dropdown';
import * as S from 'components/Explorer/SortBar/SortBar.styled';

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
    style: {
        isSelect: true,
        name: 'Style',
        // # TODO => Remove this slice
        options: highrisesData.slice(0, 15).reduce((acc, highrise) => {
            if (acc[highrise?.style]) return acc;

            return {
                ...acc,
                [highrise.style]: {
                    value: highrise.style,
                    sort: (highrises) =>
                        highrises.filter(
                            ({ style }) => highrise.style === style
                        ),
                },
            };
        }, {}),
    },
    // Decade: (buildingA, buildingB) => buildingA.height - buildingB.height,
    // City: (buildingA, buildingB) => buildingA.height - buildingB.height,
    // Attributes: (buildingA, buildingB) => buildingA.height - buildingB.height,
};

export const SortBar = ({ activeSort, setActiveSort }) => {
    return (
        <S.SortBar>
            {activeSort ? (
                <S.SortLink
                    isReset
                    isActive
                    tabIndex={0}
                    onClick={() => {
                        setActiveSort(undefined);
                    }}
                >
                    Reset Sort —
                </S.SortLink>
            ) : (
                <span>Select Sort — </span>
            )}
            {Object.entries(SORTS).map(
                ([sortKey, { isSelect, name, sort, options = {} }]) =>
                    isSelect ? (
                        <Dropdown
                            key={name}
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
    );
};
