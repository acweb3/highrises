import { useWindowListener } from 'common/hooks/useWindowListener';
import * as S from 'components/Explorer/FeatureImage/FeatureImage.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
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

    return (
        <div
            css={`
                position: relative;
                height: 100%;
                width: 100%;
            `}
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
        </div>
    );
};

const FeatureImageZoom = () => {
    const { activeHighrise } = useActiveHighriseContext();
    const openseaDragonRef = useRef();

    const [width, setWidth] = useState(0);

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
        <S.FeatureImageZoom
            id="openseaDragon"
            style={{
                width,
            }}
        />
    );
};

export const FeatureImage = () => {
    const { hasInteracted } = useActiveHighriseContext();

    return (
        <S.FeatureImageWrapper>
            {hasInteracted ? <FeatureImageZoom /> : <FeatureImageRandomizer />}
        </S.FeatureImageWrapper>
    );
};
