import * as S from 'components/ExternalNavigation/ExternalNavigation.styled';
import { useMapViewContext } from 'contexts/MapView';

export const ExternalNavigation = ({ activeHighrise, className, showMap }) => {
    const { setIsMapView } = useMapViewContext();

    return (
        <S.ExternalNavigation className={className}>
            <S.ExternalNavigationLink buttonText="View Print" href="nice" />
            <S.ExternalNavigationLink buttonText="View Secondary" href="nice" />
            {activeHighrise && showMap && (
                <S.MapButton onClick={() => setIsMapView(true)}>
                    View On Map
                    <S.Map />
                </S.MapButton>
            )}
        </S.ExternalNavigation>
    );
};
