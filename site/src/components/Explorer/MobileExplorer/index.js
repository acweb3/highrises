import { BuildingDetail } from 'components/BuildingDetail';
import { BuildingsExplorer } from 'components/Explorer/BuildingsExplorer';
import { MapExplorer } from 'components/Explorer/MapExplorer';
import { Masthead } from 'components/Explorer/Masthead';
import * as S from 'components/Explorer/MobileExplorer/MobileExplorer.styled';
import { SortBar } from 'components/Explorer/SortBar';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useMapViewContext } from 'contexts/MapView';
import { useState } from 'react';

export const MobileExplorer = () => {
    const [activeSort, setActiveSort] = useState(undefined);
    const { activeHighrise } = useActiveHighriseContext();
    const { isMapView, setIsMapView } = useMapViewContext();

    return (
        <S.MobileExplorer>
            <S.MobileMapSection isVisible={isMapView}>
                <MapExplorer />
                <S.CloseButton onClick={() => setIsMapView(false)} />
            </S.MobileMapSection>
            <SortBar activeSort={activeSort} setActiveSort={setActiveSort} />
            <BuildingsExplorer activeSort={activeSort} />

            <S.MobileExplorerSection isVisible>
                <Masthead />
                {activeHighrise && (
                    <S.MapButton onClick={() => setIsMapView(true)}>
                        View On Map
                        <S.Map />
                    </S.MapButton>
                )}
            </S.MobileExplorerSection>
        </S.MobileExplorer>
    );
};
