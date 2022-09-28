import { highrises as highrisesData } from 'assets/data/highrises';
import { Dropdown } from 'components/ExplorerV2/SortBar/Dropdown';
import * as S from 'components/ExplorerV2/SortBar/SortBar.styled';
import { useEffect, useRef, useState } from 'react';

export const SORTS = {
    attributes: {
        isSelect: true,
        name: 'Attributes',
        options: [
            ...new Set(
                highrisesData.flatMap((highrise) =>
                    highrise.attributes
                        .filter(
                            (attribute) => attribute.trait_type === 'Attributes'
                        )
                        .map((attribute) => attribute.value)
                )
            ),
        ].map((value) => ({
            value,
            sort: (highrises) => {
                return highrises.filter((highrise) => {
                    const attributes = highrise.attributes.map(
                        (attribute) => attribute.value
                    );
                    return attributes.includes(value);
                });
            },
        })),
    },
    height: {
        isSelect: true,
        name: 'Height',
        // # TODO => Remove this slice
        options: highrisesData.reduce((acc, highrise) => {
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
        options: highrisesData.reduce((acc, highrise) => {
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
    state: {
        isSelect: true,
        name: 'State',
        // # TODO => Remove this slice
        options: highrisesData.reduce((acc, highrise) => {
            if (acc[highrise?.state]) return acc;

            return {
                ...acc,
                [highrise.state]: {
                    value: highrise.state,
                    sort: (highrises) =>
                        highrises.filter(
                            ({ state }) => highrise.state === state
                        ),
                },
            };
        }, {}),
    },
    decade: {
        isSelect: true,
        name: 'Decade',
        // # TODO => Remove this slice
        options: highrisesData.reduce((acc, highrise) => {
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
        options: highrisesData.reduce((acc, highrise) => {
            if (acc[highrise?.style]) return acc;

            return {
                ...acc,
                [highrise.style]: {
                    value: highrise.style,
                    sort: (highrises) =>
                        highrises.filter(({ style, secondaryStyle }) => {
                            return (
                                highrise.style === style ||
                                highrise.style === secondaryStyle
                            );
                        }),
                },
            };
        }, {}),
    },
};

export const SortBar = ({ activeSort, setActiveSort, isMobile }) => {
    const [activeDropdown, setActiveDropdown] = useState();
    const [activeOption, setActiveOption] = useState();
    const [hasArrow, setHasArrow] = useState(false);
    const filtersRef = useRef();

    useEffect(() => {
        setActiveOption(undefined);
    }, [activeDropdown]);

    useEffect(() => {
        if (
            activeDropdown &&
            filtersRef.current &&
            filtersRef.current.childElementCount * 100 >
                filtersRef.current.offsetWidth
        ) {
            setHasArrow(true);
        } else {
            setHasArrow(false);
        }
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
            {activeDropdown &&
                (isMobile ? (
                    <S.DropdownFilters ref={filtersRef}>
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
                ) : (
                    <S.DropdownFiltersWrapper>
                        <S.DropdownFilters ref={filtersRef}>
                            {Object.values(activeDropdown.dropdown.options)
                                .filter((options) => options.value)
                                .sort((a, b) => a.value.localeCompare(b.value))
                                .map(({ value, sort }) => {
                                    return (
                                        <S.DropdownFilter
                                            key={value}
                                            isActive={activeOption === value}
                                            onClick={() => {
                                                setActiveOption(value);
                                                setActiveSort({
                                                    sortKey:
                                                        activeDropdown.sortKey,
                                                    sort,
                                                });
                                            }}
                                        >
                                            {value}
                                        </S.DropdownFilter>
                                    );
                                })}
                        </S.DropdownFilters>
                    </S.DropdownFiltersWrapper>
                ))}
        </>
    );
};
