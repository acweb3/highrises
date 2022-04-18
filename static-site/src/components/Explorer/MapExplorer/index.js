import { Wrapper } from '@googlemaps/react-wrapper';
import { Map } from 'components/Explorer/MapExplorer/Map';
import * as S from 'components/Explorer/MapExplorer/MapExplorer.styled';
import { Marker } from 'components/Explorer/MapExplorer/Marker';
import { config } from 'config';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useExplorerRefContext } from 'contexts/ExplorerRef';
import { useMapViewContext } from 'contexts/MapView';
import { navigate } from 'gatsby';
import { useEffect, useState } from 'react';

export const MapExplorer = () => {
    const [zoom, setZoom] = useState(17);
    const [center, setCenter] = useState({ lat: 39.952583, lng: -75.165222 });
    const { setActiveHighrise } = useActiveHighriseContext();
    const { activeHighrise, highrises } = useActiveHighriseContext();
    const { setIsMapView } = useMapViewContext();

    const onIdle = (m) => {
        setZoom(m.getZoom());
        setCenter(m.getCenter().toJSON());
    };

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
                                        activeHighrise.index === highrise.index
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
