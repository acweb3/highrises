import {
    featureAttribute,
    featureCity,
    featureStyle,
} from 'assets/data/features';
import { highrises as highrisesData } from 'assets/data/highrises';
import * as S from 'components/Explorer/SortBar/SortBar.styled';
import { useActiveSortContext } from 'contexts/ActiveSort';
import { useEffect, useState } from 'react';

export const SORTS = {
    city: {
        name: 'Featured Cities',
        options: highrisesData.reduce((acc, highrise) => {
            if (acc[highrise?.city]) {
                return acc;
            }
            if (!featureCity[highrise.city.toUpperCase()]) {
                return acc;
            }

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

    style: {
        name: 'Style',
        options: highrisesData.reduce((acc, highrise) => {
            if (acc[highrise?.style]) return acc;
            if (!featureStyle[highrise.style.toUpperCase()]) {
                return acc;
            }

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
        ]
            .filter((value) => featureAttribute[value.toUpperCase()])
            .map((value) => ({
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

    region: {
        name: 'Region',
        options: [
            ...new Set(
                highrisesData.flatMap((highrise) =>
                    highrise.attributes
                        .filter(
                            (attribute) => attribute.trait_type === 'Region'
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
};

export const useSorts = ({ onSort }) => {
    const { activeSort, setActiveSort } = useActiveSortContext();
    const [activeDropdown, setActiveDropdown] = useState(undefined);
    const [activeOption, setActiveOption] = useState(undefined);

    useEffect(() => {
        setActiveOption(undefined);
    }, [activeDropdown]);

    return {
        activeSort,
        activeOption,
        activeDropdown,

        fieldActiveSelectLevel: (sortKey) => {
            if (activeDropdown === undefined) {
                return 'NotSet';
            }

            return activeDropdown.sortKey === sortKey ? 'Active' : 'Inactive';
        },
        selectField: (sortKey, name) => {
            if (activeDropdown?.sortKey === sortKey) {
                setActiveDropdown(undefined);
                setActiveSort(undefined);
            } else {
                setActiveDropdown({
                    sortKey,
                    dropdown: SORTS[sortKey],
                    name,
                });
            }
        },

        optionActiveSelectLevel: (value) => {
            if (activeOption === undefined) {
                return 'NotSet';
            }

            return activeOption === value ? 'Active' : 'Inactive';
        },
        selectOption: (value, sort) => {
            setActiveOption(value);
            setActiveSort({
                sortKey: activeDropdown.sortKey,
                sort,
                sortName: activeDropdown.name,
                sortValue: value,
            });

            onSort();
        },

        reset: (isHard = true) => {
            if (isHard) {
                setActiveSort(undefined);
            }

            setActiveDropdown(undefined);
            setActiveOption(undefined);
        },
    };
};

export const SortBar = () => {
    const {
        activeSort,
        activeOption,
        activeDropdown,
        fieldActiveSelectLevel,
        selectField,
        optionActiveSelectLevel,
        selectOption,
        reset,
    } = useSorts();

    return (
        <S.SortBar>
            <S.SortBarFilters>
                {activeSort ? (
                    <S.SortBarLink
                        isReset
                        isActive
                        tabIndex={0}
                        onClick={() => reset(true)}
                    >
                        Reset Sort
                    </S.SortBarLink>
                ) : (
                    <S.SortBarLink isReset isActive>
                        Filter
                    </S.SortBarLink>
                )}

                {Object.entries(SORTS).map(([sortKey, { name }]) => {
                    return (
                        <S.SortBarPill
                            key={name}
                            activeSelectLevel={fieldActiveSelectLevel(sortKey)}
                            onClick={() => selectField(sortKey, name)}
                        >
                            {activeSort?.sortKey === sortKey && activeOption
                                ? activeOption
                                : name}
                        </S.SortBarPill>
                    );
                })}
            </S.SortBarFilters>

            {activeDropdown && (
                <S.SortBarFilters
                    isAnimated
                    isActive={activeDropdown && !activeOption}
                >
                    {Object.values(activeDropdown.dropdown.options)
                        .filter((options) => options.value)
                        .sort((a, b) => a.value.localeCompare(b.value))
                        .map(({ value, sort }) => {
                            return (
                                <S.SortBarPill
                                    key={value}
                                    activeSelectLevel={optionActiveSelectLevel(
                                        value
                                    )}
                                    onClick={() => selectOption(value, sort)}
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
