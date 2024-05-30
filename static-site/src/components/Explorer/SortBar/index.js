import {
    featureAttribute,
    featureCity,
    featureStyle,
} from 'assets/data/features';
import { highrises as highrisesData } from 'assets/data/highrises';
import * as S from 'components/Explorer/SortBar/SortBar.styled';
import { useActiveSortContext } from 'contexts/ActiveSort';
import { useEffect, useState } from 'react';

const BIG_CITIES = [
    'PHILADELPHIA',
    'NEW YORK',
    'CHICAGO',
    'LOS ANGELES',
    'SAN FRANCISCO',
    'DETROIT',
    'SEATTLE',
];

const CITY_TO_CITY_STATE_MAP = {
    Albany: 'Albany, NY',
    Allentown: 'Allentown, PA',
    'Ann Arbor': 'Ann Arbor, MI',
    Asheville: 'Asheville, NC',
    Atlanta: 'Atlanta, GA',
    Austin: 'Austin, TX',
    Baltimore: 'Baltimore, MD',
    'Baton Rouge': 'Baton Rouge, LA',
    Beaumont: 'Beaumont, TX',
    'Beverly Hills': 'Beverly Hills, CA',
    Birmingham: 'Birmingham, AL',
    Boston: 'Boston, MA',
    Buffalo: 'Buffalo, NY',
    Camden: 'Camden, NJ',
    Chattanooga: 'Chattanooga, TN',
    Chicago: 'Chicago, IL',
    Cincinnati: 'Cincinnati, OH',
    Cleveland: 'Cleveland, OH',
    Columbus: 'Columbus, OH',
    'Coral Gables': 'Coral Gables, FL',
    Dallas: 'Dallas, TX',
    Denver: 'Denver, CO',
    Detroit: 'Detroit, MI',
    'Fort Wayne': 'Fort Wayne, IN',
    'Fort Worth': 'Fort Worth, TX',
    Harrisburg: 'Harrisburg, PA',
    Hartford: 'Hartford, CT',
    Houston: 'Houston, TX',
    Jackson: 'Jackson, MI',
    Jackson: 'Jackson, MS',
    'Kansas City': 'Kansas City, MO',
    Lansing: 'Lansing, MI',
    Lincoln: 'Lincoln, NE',
    'Los Angeles': 'Los Angeles, CA',
    Memphis: 'Memphis, TN',
    Miami: 'Miami, FL',
    Milwaukee: 'Milwaukee, WI',
    Minneapolis: 'Minneapolis, MN',
    'New Orleans': 'New Orleans, LA',
    'New York': 'New York, NY',
    Newark: 'Newark, NJ',
    'Niagara Falls': 'Niagara Falls, NY',
    Oakland: 'Oakland, CA',
    'Oklahoma City': 'Oklahoma City, OK',
    Philadelphia: 'Philadelphia, PA',
    Phoenix: 'Phoenix, AZ',
    Pittsburgh: 'Pittsburgh, PA',
    Pontiac: 'Pontiac, MI',
    Portland: 'Portland, OR',
    Providence: 'Providence, RI',
    Reading: 'Reading, PA',
    Richmond: 'Richmond, VA',
    Rochester: 'Rochester, MN',
    Rochester: 'Rochester, NY',
    Sacramento: 'Sacramento, CA',
    'Saint Louis': 'Saint Louis, MO',
    'San Antonio': 'San Antonio, TX',
    'San Francisco': 'San Francisco, CA',
    'Santa Monica': 'Santa Monica, CA',
    Scranton: 'Scranton, PA',
    Seattle: 'Seattle, WA',
    Springfield: 'Springfield, MA',
    'St. Paul': 'St. Paul, MN',
    Syracuse: 'Syracuse, NY',
    Toledo: 'Toledo, OH',
    Tulsa: 'Tulsa, OK',
    Waco: 'Waco, TX',
    'Winston-Salem': 'Winston-Salem, NC',
};

export const getSublabel = (label) => {
    return CITY_TO_CITY_STATE_MAP[label];
};

export const SORTS = {
    city: {
        name: 'Featured Cities',
        options: (isMobile) =>
            highrisesData.reduce((acc, highrise) => {
                if (acc[highrise?.city]) {
                    return acc;
                }
                if (!isMobile && !featureCity[highrise.city.toUpperCase()]) {
                    return acc;
                }

                return {
                    ...acc,
                    [highrise.city]: {
                        value: highrise.city,
                        sort: (highrises) =>
                            highrises.filter(
                                ({ city }) => highrise.city === city
                            ),
                    },
                };
            }, {}),
        shouldShowForMobile: (value) => {
            return BIG_CITIES.includes(value.toUpperCase());
        },
    },

    style: {
        name: 'Style',
        options: () =>
            highrisesData.reduce((acc, highrise) => {
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
        options: () =>
            [
                ...new Set(
                    highrisesData.flatMap((highrise) =>
                        highrise.attributes
                            .filter(
                                (attribute) =>
                                    attribute.trait_type === 'Attributes'
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
        options: () =>
            highrisesData.reduce((acc, highrise) => {
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
        options: () =>
            [
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

export const useSorts = ({ onSort } = {}) => {
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

            onSort?.();
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
                    {Object.values(activeDropdown.dropdown.options())
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
