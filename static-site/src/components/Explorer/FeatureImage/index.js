import { useWindowListener } from 'common/hooks/useWindowListener';
import { useWindowSize } from 'common/hooks/useWindowSize';
import * as S from 'components/Explorer/FeatureImage/FeatureImage.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useMobilePopoverContext } from 'contexts/MobilePopover';
import { useEffect, useRef, useState } from 'react';

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

const FeatureImageRandomizer = () => {
    const { randomHighrise } = useActiveHighriseContext();
    const { a, b, activeLayer } = useLastFeatureImage(randomHighrise);
    const { width } = useZoomWidth();

    return (
        <S.FeatureImageRandomContainer style={{ width }}>
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

const useZoomWidth = () => {
    const [width, setWidth] = useState(0);
    const { isMobile } = useWindowSize();

    useEffect(() => {
        setWidth((window.innerHeight * 2) / 3);
    }, []);

    useWindowListener(
        'resize',
        () => {
            setWidth((window.innerHeight * 2) / 3);
        },
        []
    );

    return { width: isMobile ? undefined : width };
};

const FeatureImageZoom = () => {
    const { activeHighrise } = useActiveHighriseContext();
    const openseaDragonRef = useRef();
    const { width } = useZoomWidth();

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

    return (
        <S.FeatureImageZoomWrapper>
            <S.FeatureImageBadge>
                {activeHighrise.index + 1}
            </S.FeatureImageBadge>

            <S.FeatureImageZoom
                id="openseaDragon"
                style={{
                    width,
                }}
            />
        </S.FeatureImageZoomWrapper>
    );
};

export const FeatureImageFilterButton = () => {
    return <S.FeatureImageFilterButton>Filter</S.FeatureImageFilterButton>;
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

export const FeatureImage = () => {
    const { setIsMobilePopoverOpen } = useMobilePopoverContext();
    const { hasInteracted } = useActiveHighriseContext();

    return (
        <S.FeatureImageWrapper onClick={() => setIsMobilePopoverOpen(false)}>
            <S.FeatureImageFilters>
                <FeatureImageFilterButton />
                <FeatureImageFilterAbout />
            </S.FeatureImageFilters>

            {hasInteracted ? <FeatureImageZoom /> : <FeatureImageRandomizer />}
        </S.FeatureImageWrapper>
    );
};
