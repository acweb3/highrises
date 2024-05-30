import * as S from 'components/Explorer/FeatureImage/FeatureImage.styled';
import { SORTS, getSublabel, useSorts } from 'components/Explorer/SortBar';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useMobilePopoverContext } from 'contexts/MobilePopover';
import { useWindowSizeContext } from 'contexts/WindowSize';
import { forwardRef, useEffect, useRef, useState } from 'react';

const useLastFeatureImage = (highrise) => {
    const [a, setA] = useState(highrise);
    const [b, setB] = useState(highrise);
    const [activeLayer, setActiveLayer] = useState(0);

    useEffect(() => {
        setActiveLayer((activeLayer) => {
            const next = (activeLayer + 1) % 2;

            if (next === 0) {
                setA(highrise);
            } else {
                setB(highrise);
            }

            return next;
        });
    }, [highrise]);

    return {
        activeLayer,
        a,
        b,
    };
};

const FeatureImageRandomizer = ({}) => {
    const { randomHighrise, setActiveHighrise } = useActiveHighriseContext();
    const { a, b, activeLayer } = useLastFeatureImage(randomHighrise);

    return (
        <S.FeatureImageRandomContainer
            onClick={() => {
                setActiveHighrise(activeLayer === 1 ? b : a);
            }}
        >
            <S.FeatureImageRandom
                isActive={activeLayer === 0}
                src={a.featureSrc}
                blurSrc={a.blurFeatureSrc}
                alt={`${a.name} feature image`}
            />

            <S.FeatureImageRandom
                isActive={activeLayer === 1}
                src={b.featureSrc}
                blurSrc={b.blurFeatureSrc}
                alt={`${b.name} feature image`}
            />
        </S.FeatureImageRandomContainer>
    );
};

export const FeatureImageZoom = ({
    buildingExplorerHeight,
    didShowInstructions,
    setDidShowInstructions,
}) => {
    const { activeHighrise } = useActiveHighriseContext();
    const { isMobile, isXL } = useWindowSizeContext();
    const openseaDragonRef = useRef();
    const [zoomWrapperHeight, setZoomWrapperHeight] = useState(undefined);

    const [isShowInstructions, setIsShowInstructions] = useState(true);
    const [isShowNumber, setIsShowNumber] = useState(true);

    useEffect(() => {
        if (!openseaDragonRef.current) {
            (async () => {
                const OpenSeadragon = (await import('openseadragon')).default;
                openseaDragonRef.current = OpenSeadragon({
                    id: 'openseaDragon',
                    tileSources: {
                        type: 'image',
                        url: activeHighrise.featureSrc,
                    },
                    showNavigationControl: false,
                    defaultZoomLevel: 1,
                    minZoomLevel: 1,
                    visibilityRatio: 1,

                    maxZoomPixelRatio: isXL ? 6 : 2,
                });
            })();
        } else {
            openseaDragonRef.current.open({
                type: 'image',
                url: activeHighrise.featureSrc,
            });
        }
    }, [activeHighrise, isXL]);

    useEffect(() => {
        setIsShowInstructions(true);

        const sto = setTimeout(() => {
            setIsShowInstructions(false);
            setDidShowInstructions(true);
        }, 8000);

        return () => {
            clearTimeout(sto);
        };
    }, [setDidShowInstructions]);

    useEffect(() => {
        setIsShowNumber(true);

        const sto = setTimeout(() => {
            setIsShowNumber(false);
        }, 12000);

        return () => {
            clearTimeout(sto);
        };
    }, [activeHighrise]);

    useEffect(() => {
        if (buildingExplorerHeight) {
            setZoomWrapperHeight(window.innerHeight - buildingExplorerHeight);
        }
    }, [buildingExplorerHeight]);

    return (
        <S.FeatureImageZoomWrapper>
            <S.FeatureImageBadge
                zoomWrapperHeight={zoomWrapperHeight}
                isShowing={(!isMobile || zoomWrapperHeight) && isShowNumber}
            >
                {activeHighrise.accessIndex + 1}
            </S.FeatureImageBadge>

            <S.FeatureImageInstructions
                zoomWrapperHeight={zoomWrapperHeight}
                isShowing={
                    (!isMobile || zoomWrapperHeight) &&
                    isShowInstructions &&
                    !didShowInstructions
                }
            >
                <S.FeatureImageInstructionsPinch />
                {isMobile ? 'Pinch to zoom' : 'Scroll to zoom'}
            </S.FeatureImageInstructions>

            <S.FeatureImageZoom id="openseaDragon" />
        </S.FeatureImageZoomWrapper>
    );
};

export const FeatureImageFilterButton = ({ className, onSort }) => {
    const [isFiltering, setIsFiltering] = useState(false);
    const {
        activeSort,
        activeDropdown,
        fieldActiveSelectLevel,
        selectField,
        optionActiveSelectLevel,
        selectOption,
        reset,
    } = useSorts({ onSort });
    const [isShowMore, setIsShowMore] = useState(false);
    const shouldActiveDropdownShowMore =
        activeDropdown?.dropdown.shouldShowForMobile;

    return (
        <S.FeatureImageFilters className={className}>
            <S.FeatureImageFilterButton
                isActive={isFiltering || activeSort}
                onClick={() => {
                    setIsFiltering((isFiltering) => !isFiltering);
                }}
            >
                {activeSort?.sortValue ?? 'Search'}
            </S.FeatureImageFilterButton>

            {activeSort && !isFiltering && (
                <S.FeatureImageFilterCloseWrapper onClick={reset}>
                    <S.FeatureImageFilterClose />
                </S.FeatureImageFilterCloseWrapper>
            )}

            {isFiltering &&
                Object.entries(SORTS).map(([sortKey, { name }]) => {
                    return (
                        <S.FeatureImageFilterButton
                            key={name}
                            isActive={
                                fieldActiveSelectLevel(sortKey) === 'Active'
                            }
                            isSelecting={
                                fieldActiveSelectLevel(sortKey) === 'Inactive'
                            }
                            onClick={() => selectField(sortKey, name)}
                        >
                            {name}
                        </S.FeatureImageFilterButton>
                    );
                })}

            {isFiltering && activeDropdown && (
                <S.FeatureImageSubFilters>
                    {Object.values(activeDropdown.dropdown.options(true))
                        .filter((options) => options.value)
                        .sort((a, b) => a.value.localeCompare(b.value))
                        .map(({ value, sort }) => {
                            if (
                                shouldActiveDropdownShowMore &&
                                !activeDropdown.dropdown.shouldShowForMobile(
                                    value
                                )
                            ) {
                                return null;
                            }

                            return (
                                <S.FeatureImageFilterButton
                                    key={value}
                                    isActive={
                                        optionActiveSelectLevel(value) ===
                                        'Active'
                                    }
                                    isSelecting={
                                        optionActiveSelectLevel(value) ===
                                        'Inactive'
                                    }
                                    onClick={() => {
                                        selectOption(value, sort);
                                        setIsFiltering(false);
                                    }}
                                >
                                    {value}
                                </S.FeatureImageFilterButton>
                            );
                        })}

                    {shouldActiveDropdownShowMore && (
                        <S.FeatureImageFilterButton
                            isActive={false}
                            isSelecting={false}
                            onClick={() => {
                                setIsShowMore(true);
                            }}
                        >
                            Show more
                        </S.FeatureImageFilterButton>
                    )}
                </S.FeatureImageSubFilters>
            )}

            {isShowMore && (
                <>
                    <div
                        className="Mobile-overlay"
                        id="yui_3_17_2_1_1677716679638_2211"
                        style={{
                            left: 0,
                            top: 0,
                            height: '100%',
                            background: '#fff',
                            marginTop: '63px',
                        }}
                    >
                        <div
                            className="Mobile-overlay-menu"
                            data-controller="MobileOverlayFolders"
                            data-controllers-bound="MobileOverlayFolders"
                            style={{
                                marginBottom: '80px',
                            }}
                        >
                            <div className="Mobile-overlay-menu-main">
                                <nav
                                    className="Mobile-overlay-nav Mobile-overlay-nav--primary"
                                    data-content-field="navigation"
                                >
                                    {Object.values(
                                        activeDropdown.dropdown.options(true)
                                    )
                                        .filter((options) => options.value)
                                        .sort((a, b) =>
                                            a.value.localeCompare(b.value)
                                        )
                                        .map(({ value, sort }) => {
                                            if (
                                                shouldActiveDropdownShowMore &&
                                                activeDropdown.dropdown.shouldShowForMobile(
                                                    value
                                                )
                                            ) {
                                                return null;
                                            }

                                            return (
                                                <S.FeatureImageShowMoreLink
                                                    key={value}
                                                    className="Mobile-overlay-nav-item"
                                                    isActive={
                                                        optionActiveSelectLevel(
                                                            value
                                                        ) === 'Active'
                                                    }
                                                    isSelecting={
                                                        optionActiveSelectLevel(
                                                            value
                                                        ) === 'Inactive'
                                                    }
                                                    onClick={() => {
                                                        selectOption(
                                                            value,
                                                            sort
                                                        );
                                                        setIsFiltering(false);
                                                        setIsShowMore(false);
                                                    }}
                                                >
                                                    {getSublabel(value) ??
                                                        'FFF'}
                                                </S.FeatureImageShowMoreLink>
                                            );
                                        })}
                                </nav>
                                <nav
                                    className="Mobile-overlay-nav Mobile-overlay-nav--secondary"
                                    data-content-field="navigation"
                                ></nav>
                            </div>
                            <div
                                className="Mobile-overlay-folders"
                                data-content-field="navigation"
                            ></div>
                        </div>
                        <button
                            onClick={() => setIsShowMore(false)}
                            className="Mobile-overlay-close"
                            data-controller="MobileOverlayToggle"
                            data-controllers-bound="MobileOverlayToggle"
                            id="yui_3_17_2_1_1677716679638_2210"
                            dangerouslySetInnerHTML={{
                                __html: `
                            <svg style="width:32px;" id="icon" viewBox="0 0 32 32"><defs><style>.cls-555{fill:currentColor;}.cls-2{fill:none;}</style></defs><title>close</title><polygon class="cls-555" points="24 9.4 22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4"></polygon><rect class="cls-2" width="32" height="32"></rect></svg>
                            `,
                            }}
                        ></button>
                        <div
                            className="Mobile-overlay-back"
                            data-controller="MobileOverlayToggle"
                            data-controllers-bound="MobileOverlayToggle"
                        ></div>
                    </div>
                </>
            )}
        </S.FeatureImageFilters>
    );
};

export const FeatureImageFilterAbout = () => {
    const { isAboutOverride, setIsAboutOverride } = useActiveHighriseContext();
    const { setIsMobilePopoverOpen } = useMobilePopoverContext();

    return (
        <S.FeatureImageFilterButton
            isActive={isAboutOverride}
            onClick={(e) => {
                e.stopPropagation();

                setIsAboutOverride(true);
                setIsMobilePopoverOpen(true);
            }}
        >
            About
        </S.FeatureImageFilterButton>
    );
};

export const FeatureImage = forwardRef(({ buildingExplorerHeight }, ref) => {
    const { isMobile, zoomWidth } = useWindowSizeContext();
    const { activeHighrise, hasInteracted } = useActiveHighriseContext();
    const [didShowInstructions, setDidShowInstructions] = useState(false);

    return (
        <S.FeatureImageWrapper ref={ref} style={{ width: zoomWidth }}>
            <S.FeatureImageActions>
                <FeatureImageFilterButton />
                {isMobile && !isFiltering && <FeatureImageFilterAbout />}
            </S.FeatureImageActions>

            {hasInteracted && activeHighrise ? (
                <FeatureImageZoom
                    didShowInstructions={didShowInstructions}
                    setDidShowInstructions={setDidShowInstructions}
                    buildingExplorerHeight={buildingExplorerHeight}
                />
            ) : (
                <FeatureImageRandomizer />
            )}
        </S.FeatureImageWrapper>
    );
});
