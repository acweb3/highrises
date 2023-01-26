import { highrises as highrisesData } from 'assets/data/highrises';
import * as S from 'components/Explorer/SortBar/SortBar.styled';
import { useEffect, useState } from 'react';

export const SORTS = {
    attributes: {
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

export const SortBar = ({ activeSort, setActiveSort }) => {
    const [activeDropdown, setActiveDropdown] = useState();
    const [activeOption, setActiveOption] = useState();

    useEffect(() => {
        setActiveOption(undefined);
    }, [activeDropdown]);

    return (
        <S.SortBar>
            <S.SortBarFilters>
                {activeSort ? (
                    <S.SortBarLink
                        isReset
                        isActive
                        tabIndex={0}
                        onClick={() => {
                            setActiveDropdown(undefined);
                            setActiveSort(undefined);
                        }}
                    >
                        Reset Sort —
                    </S.SortBarLink>
                ) : (
                    <S.SortBarLink isReset isActive>
                        Filter{' '}
                    </S.SortBarLink>
                )}

                {Object.entries(SORTS).map(([sortKey, { name, sort }]) => (
                    <S.SortBarPill
                        key={name}
                        activeSelectLevel={(() => {
                            if (activeDropdown === undefined) {
                                return 'NotSet';
                            }

                            return activeDropdown.sortKey === sortKey
                                ? 'Active'
                                : 'Inactive';
                        })()}
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
                    >
                        {name}
                    </S.SortBarPill>
                ))}
            </S.SortBarFilters>

            {activeDropdown && (
                <S.SortBarFilters>
                    {Object.values(activeDropdown.dropdown.options)
                        .filter((options) => options.value)
                        .sort((a, b) => a.value.localeCompare(b.value))
                        .map(({ value, sort }) => {
                            return (
                                <S.SortBarPill
                                    key={value}
                                    activeSelectLevel={(() => {
                                        if (activeOption === undefined) {
                                            return 'NotSet';
                                        }

                                        return activeOption === value
                                            ? 'Active'
                                            : 'Inactive';
                                    })()}
                                    onClick={() => {
                                        setActiveOption(value);
                                        setActiveSort({
                                            sortKey: activeDropdown.sortKey,
                                            sort,
                                        });
                                    }}
                                >
                                    {value}
                                </S.SortBarPill>
                            );
                        })}
                </S.SortBarFilters>
            )}
        </S.SortBar>
    );
};
