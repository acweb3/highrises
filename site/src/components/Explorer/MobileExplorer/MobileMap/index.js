import { MapExplorer } from 'components/Explorer/MapExplorer';
import * as S from 'components/Explorer/MobileExplorer/MobileMap/MobileMap.styled';
import { useMapViewContext } from 'contexts/MapView';

export const MobileMap = () => {
    const { isMapView, setIsMapView } = useMapViewContext();

    return (
        <S.MobileMap className="wwww" isVisible={isMapView}>
            <MapExplorer />
            <S.CloseButton onClick={() => setIsMapView(false)} />
        </S.MobileMap>
    );
};
