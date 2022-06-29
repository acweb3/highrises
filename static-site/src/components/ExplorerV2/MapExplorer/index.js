import { Wrapper } from '@googlemaps/react-wrapper';
import { Map } from 'components/ExplorerV2/MapExplorer/Map';
import * as S from 'components/ExplorerV2/MapExplorer/MapExplorer.styled';
import { Marker } from 'components/ExplorerV2/MapExplorer/Marker';
import { config } from 'config';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useMapViewContext } from 'contexts/MapView';
import { useEffect, useRef, useState } from 'react';

export const MapExplorer = () => {
    const initialRenderRef = useRef(false);
    const [zoom, setZoom] = useState(6);
    // 42.217054, -76.058521
    const [center, setCenter] = useState({ lat: 42.217054, lng: -76.058521 });
    const { activeHighrise, highrises, setActiveHighrise } =
        useActiveHighriseContext();
    const { setIsMapView } = useMapViewContext();

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
            setCenter(highrises[0].ltlng);
            setZoom(15);
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
                                        activeHighrise?.index === highrise.index
                                            ? highrise.mapSrc
                                            : undefined
                                    }
                                    position={highrise.ltlng}
                                    onClick={() => {
                                        setActiveHighrise(highrise);
                                        setIsMapView(false);
                                    }}
                                />
                            );
                        })}
                    </Map>
                </Wrapper>
            </S.MapExplorerSticky>
        </S.MapExplorer>
    );
};