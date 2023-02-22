import * as S from 'components/Explorer/FeatureImage/FeatureImage.styled';
import { SORTS, useSorts } from 'components/Explorer/SortBar';
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

const FeatureImageRandomizer = ({ resetFiltering }) => {
    const { randomHighrise, setActiveHighrise } = useActiveHighriseContext();
    const { a, b, activeLayer } = useLastFeatureImage(randomHighrise);

    return (
        <S.FeatureImageRandomContainer
            onClick={() => {
                resetFiltering();
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

const FeatureImageZoom = ({ resetFiltering, buildingExplorerHeight }) => {
    const { activeHighrise } = useActiveHighriseContext();
    const { isMobile } = useWindowSizeContext();
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
                });
            })();
        } else {
            openseaDragonRef.current.open({
                type: 'image',
                url: activeHighrise.featureSrc,
            });
        }
    }, [activeHighrise]);

    useEffect(() => {
        setIsShowInstructions(true);

        const sto = setTimeout(() => {
            setIsShowInstructions(false);
        }, 8000);

        return () => {
            clearTimeout(sto);
        };
    }, []);

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
        <S.FeatureImageZoomWrapper onClick={resetFiltering}>
            <S.FeatureImageBadge
                zoomWrapperHeight={zoomWrapperHeight}
                isShowing={(!isMobile || zoomWrapperHeight) && isShowNumber}
            >
                {activeHighrise.index + 1}
            </S.FeatureImageBadge>

            <S.FeatureImageInstructions
                zoomWrapperHeight={zoomWrapperHeight}
                isShowing={
                    (!isMobile || zoomWrapperHeight) && isShowInstructions
                }
            >
                <S.FeatureImageInstructionsPinch />
                {isMobile ? 'Pinch to zoom' : 'Scroll to zoom'}
            </S.FeatureImageInstructions>

            <S.FeatureImageZoom id="openseaDragon" />
        </S.FeatureImageZoomWrapper>
    );
};

export const FeatureImageFilterButton = ({ isFiltering, setIsFiltering }) => {
    const {
        activeSort,
        activeDropdown,
        fieldActiveSelectLevel,
        selectField,
        optionActiveSelectLevel,
        selectOption,
        reset,
    } = useSorts();

    return (
        <S.FeatureImageFilters>
            <S.FeatureImageFilterButton
                isSelecting={isFiltering}
                isActive={isFiltering || activeSort}
                onClick={() => {
                    setIsFiltering((isFiltering) => !isFiltering);
                }}
            >
                {activeSort?.sortValue ?? 'Filter'}
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
                    {Object.values(activeDropdown.dropdown.options)
                        .filter((options) => options.value)
                        .sort((a, b) => a.value.localeCompare(b.value))
                        .map(({ value, sort }) => {
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
                </S.FeatureImageSubFilters>
            )}
        </S.FeatureImageFilters>
    );
};

export const FeatureImageFilterAbout = () => {
    const { isMobilePopoverOpen, setIsMobilePopoverOpen } =
        useMobilePopoverContext();

    return (
        <S.FeatureImageFilterButton
            isActive={isMobilePopoverOpen}
            onClick={(e) => {
                e.stopPropagation();

                setIsMobilePopoverOpen(
                    (isMobilePopoverOpen) => !isMobilePopoverOpen
                );
            }}
        >
            About
        </S.FeatureImageFilterButton>
    );
};

export const FeatureImage = forwardRef(({ buildingExplorerHeight }, ref) => {
    const { isMobile, zoomWidth } = useWindowSizeContext();
    const { isMobilePopoverOpen, setIsMobilePopoverOpen } =
        useMobilePopoverContext();
    const { activeHighrise, activeDescription, hasInteracted } =
        useActiveHighriseContext();

    const [toast, setToast] = useState(undefined);
    const [isShowingToast, setIsShowingToast] = useState(false);
    const [zoomWrapperHeight, setZoomWrapperHeight] = useState(undefined);
    const [isFiltering, setIsFiltering] = useState(false);

    useEffect(() => {
        if (isMobilePopoverOpen) {
            setIsFiltering(false);
        }
    }, [isMobilePopoverOpen]);

    useEffect(() => {
        let sto1;
        let sto2;
        let sto3;

        if (activeDescription && activeDescription.header !== 'About') {
            setToast(`Click to see more about ${activeDescription.header}`);

            sto1 = setTimeout(() => {
                setIsShowingToast(true);
            }, 1000);

            sto2 = setTimeout(() => {
                setToast(undefined);
            }, 10000);

            sto3 = setTimeout(() => {
                setIsShowingToast(false);
            }, 8000);
        }

        return () => {
            clearTimeout(sto1);
            clearTimeout(sto2);
            clearTimeout(sto3);
            setIsShowingToast(false);
            setToast(undefined);
        };
    }, [activeDescription]);

    useEffect(() => {
        if (buildingExplorerHeight) {
            setZoomWrapperHeight(window.innerHeight - buildingExplorerHeight);
        }
    }, [buildingExplorerHeight]);

    return (
        <S.FeatureImageWrapper
            ref={ref}
            style={{ width: zoomWidth }}
            onClick={() => setIsMobilePopoverOpen(false)}
        >
            <S.FeatureImageActions>
                <FeatureImageFilterButton
                    isFiltering={isFiltering}
                    setIsFiltering={setIsFiltering}
                />
                {!isFiltering && <FeatureImageFilterAbout />}
            </S.FeatureImageActions>

            {hasInteracted && activeHighrise ? (
                <FeatureImageZoom
                    buildingExplorerHeight={buildingExplorerHeight}
                    resetFiltering={() => setIsFiltering(false)}
                />
            ) : (
                <FeatureImageRandomizer
                    resetFiltering={() => setIsFiltering(false)}
                />
            )}

            {isMobile && toast && (
                <S.FeatureImageToast
                    isShowing={isShowingToast}
                    zoomWrapperHeight={zoomWrapperHeight}
                    onClick={(e) => {
                        e.stopPropagation();

                        setIsMobilePopoverOpen(true);
                    }}
                >
                    {toast}
                </S.FeatureImageToast>
            )}
        </S.FeatureImageWrapper>
    );
});
