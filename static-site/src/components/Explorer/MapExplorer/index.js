import { Wrapper } from '@googlemaps/react-wrapper';
import { getIndex } from 'common/helpers';
import { Map } from 'components/Explorer/MapExplorer/Map';
import * as S from 'components/Explorer/MapExplorer/MapExplorer.styled';
import { Marker } from 'components/Explorer/MapExplorer/Marker';
import { config } from 'config';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useEffect, useRef, useState } from 'react';

export const MapExplorer = () => {
    const initialRenderRef = useRef(false);
    const [zoom, setZoom] = useState(4);
    const [center, setCenter] = useState({ lat: 39.5, lng: -96.35 });
    const { activeHighrise, highrises, setActiveHighrise } =
        useActiveHighriseContext();

    const onIdle = (m) => {
        setZoom(m.getZoom());
        setCenter(m.getCenter().toJSON());
    };

    useEffect(() => {
        if (
            highrises.length &&
            !activeHighrise &&
            initialRenderRef.current === true
        ) {
            setCenter({ lat: 39.5, lng: -96.35 });
            setZoom(4);
        } else {
            initialRenderRef.current = true;
        }
    }, [highrises, activeHighrise]);

    useEffect(() => {
        if (activeHighrise) {
            setCenter(activeHighrise.ltlng);
        }
    }, [activeHighrise]);

    return (
        <S.MapExplorer>
            <S.MapExplorerSticky>
                <Wrapper apiKey={config.googleMapsAPIKey}>
                    <Map center={center} onIdle={onIdle} zoom={zoom}>
                        {/** # TODO => Remove this slice */}
                        {highrises.map((highrise, index) => {
                            return (
                                <Marker
                                    key={index}
                                    index={`${highrise.index + 1}`.padStart(
                                        2,
                                        '0'
                                    )}
                                    iconSrc={
                                        activeHighrise &&
                                        getIndex(activeHighrise) ===
                                            getIndex(highrise)
                                            ? highrise.mapSrc
                                            : undefined
                                    }
                                    position={highrise.ltlng}
                                    onClick={() => setActiveHighrise(highrise)}
                                />
                            );
                        })}
                    </Map>
                </Wrapper>
            </S.MapExplorerSticky>
        </S.MapExplorer>
    );
};
