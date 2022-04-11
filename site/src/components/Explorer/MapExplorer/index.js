import { Wrapper } from '@googlemaps/react-wrapper';
import { Map } from 'components/Explorer/MapExplorer/Map';
import * as S from 'components/Explorer/MapExplorer/MapExplorer.styled';
import { Marker } from 'components/Explorer/MapExplorer/Marker';
import { config } from 'config';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useExplorerRefContext } from 'contexts/ExplorerRef';
import { useMapViewContext } from 'contexts/MapView';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const MapExplorer = () => {
    const [zoom, setZoom] = useState(17);
    const [center, setCenter] = useState({ lat: 39.952583, lng: -75.165222 });
    const { setActiveHighrise } = useActiveHighriseContext();
    const {
        buildingExplorerDesktopRef,
        buildingExplorerMobileRef,
        mastheadRef,
    } = useExplorerRefContext();
    const { activeHighrise, highrises } = useActiveHighriseContext();
    const { setIsMapView } = useMapViewContext();
    const navigate = useNavigate();

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
                        {highrises.slice(0, 20).map((highrise, index) => (
                            <Marker
                                key={index}
                                index={`${highrise.index + 1}`.padStart(2, '0')}
                                position={highrise.ltlng}
                                onClick={() => {
                                    navigate('/');
                                    setActiveHighrise(highrise);
                                    setIsMapView(false);

                                    setTimeout(() => {
                                        mastheadRef.current.scrollIntoView({
                                            block: 'start',
                                        });

                                        buildingExplorerMobileRef.current.children[
                                            index
                                        ].scrollIntoView({
                                            inline: 'center',
                                        });

                                        buildingExplorerDesktopRef.current.children[
                                            index
                                        ].scrollIntoView({
                                            inline: 'center',
                                        });
                                    }, 0);
                                }}
                            />
                        ))}
                    </Map>
                </Wrapper>
            </S.MapExplorerSticky>
        </S.MapExplorer>
    );
};
