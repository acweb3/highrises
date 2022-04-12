import { highrises as highrisesData } from 'assets/data/highrises';
import { Dropdown } from 'components/Explorer/Masthead/Dropdown';
import * as S from 'components/Explorer/SortBar/SortBar.styled';
import { useEffect, useState } from 'react';

export const SORTS = {
    // height: {
    //     name: 'Height',
    //     sort: (highrises) =>
    //         highrises.sort((buildingA, buildingB) => {
    //             return buildingA.height - buildingB.height;
    //         }),
    // }
    height: {
        isSelect: true,
        name: 'Height',
        // # TODO => Remove this slice
        options: highrisesData.slice(0, 20).reduce((acc, highrise) => {
            if (acc[highrise?.heightBracket]) return acc;

            return {
                ...acc,
                [highrise.heightBracket]: {
                    value: highrise.heightBracket,
                    sort: (highrises) =>
                        highrises.filter(
                            ({ heightBracket }) =>
                                highrise.heightBracket === heightBracket
                        ),
                },
            };
        }, {}),
    },
    city: {
        isSelect: true,
        name: 'City',
        // # TODO => Remove this slice
        options: highrisesData.slice(0, 20).reduce((acc, highrise) => {
            if (acc[highrise?.city]) return acc;

            return {
                ...acc,
                [highrise.city]: {
                    value: highrise.city,
                    sort: (highrises) =>
                        highrises.filter(({ city }) => highrise.city === city),
                },
            };
        }, {}),
    },
    decade: {
        isSelect: true,
        name: 'Decade',
        // # TODO => Remove this slice
        options: highrisesData.slice(0, 20).reduce((acc, highrise) => {
            if (acc[highrise?.decade]) return acc;

            return {
                ...acc,
                [highrise.decade]: {
                    value: `${highrise.decade}`,
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
        options: highrisesData.slice(0, 20).reduce((acc, highrise) => {
            if (acc[highrise?.style]) return acc;

            return {
                ...acc,
                [highrise.style]: {
                    value: highrise.style,
                    sort: (highrises) =>
                        highrises.filter(
                            ({ style }) =>
                                highrise.style === style ||
                                highrise.secondaryStyle === style
                        ),
                },
            };
        }, {}),
    },
    // City: (buildingA, buildingB) => buildingA.height - buildingB.height,
    // Attributes: (buildingA, buildingB) => buildingA.height - buildingB.height,
};

export const SortBar = ({ activeSort, setActiveSort }) => {
    const [activeDropdown, setActiveDropdown] = useState();
    const [activeOption, setActiveOption] = useState();

    useEffect(() => {
        setActiveOption(undefined);
    }, [activeDropdown]);

    return (
        <>
            <S.SortBar>
                {activeSort ? (
                    <S.SortLink
                        isReset
                        isActive
                        tabIndex={0}
                        onClick={() => {
                            setActiveDropdown(undefined);
                            setActiveSort(undefined);
                        }}
                    >
                        Reset Sort —
                    </S.SortLink>
                ) : (
                    <S.SortLink isReset isActive>
                        Select Sort —{' '}
                    </S.SortLink>
                )}
                {Object.entries(SORTS).map(
                    ([sortKey, { isSelect, name, sort }]) =>
                        isSelect ? (
                            <Dropdown
                                key={name}
                                name={name}
                                isActive={activeDropdown?.sortKey === sortKey}
                                onClick={() => {
                                    setActiveDropdown(
                                        activeDropdown?.sortKey !== sortKey
                                            ? {
                                                  sortKey,
                                                  dropdown: SORTS[sortKey],
                                              }
                                            : undefined
                                    );
                                    setActiveSort(undefined);
                                }}
                            />
                        ) : (
                            <S.SortLink
                                key={name}
                                tabIndex={0}
                                isActive={sortKey === activeSort?.sortKey}
                                onClick={() => {
                                    setActiveDropdown(undefined);
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
            {activeDropdown && (
                <S.DropdownFilters>
                    {Object.values(activeDropdown.dropdown.options)
                        .sort((a, b) => a.value.localeCompare(b.value))
                        .map(({ value, sort }) => {
                            return (
                                <S.DropdownFilter
                                    key={value}
                                    isActive={activeOption === value}
                                    onClick={() => {
                                        setActiveOption(value);
                                        setActiveSort({
                                            sortKey: activeDropdown.sortKey,
                                            sort,
                                        });
                                    }}
                                >
                                    {value}
                                </S.DropdownFilter>
                            );
                        })}
                </S.DropdownFilters>
            )}
        </>
    );
};
