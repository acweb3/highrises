import { useChainConfig } from 'common/hooks/useChainConfig';
import { useTokenOwner } from 'components/Explorer/Masthead/Attributes/Traits/hooks/useTokenOwner';
import * as S from 'components/ExternalNavigation/ExternalNavigation.styled';
import { useMapViewContext } from 'contexts/MapView';

export const ExternalNavigation = ({ activeHighrise, className, showMap }) => {
    const { setIsMapView } = useMapViewContext();
    const { openseaURL, contractAddress } = useChainConfig();
    const { hasOwner } = useTokenOwner({
        tokenId: activeHighrise.index,
    });

    return (
        <S.ExternalNavigation className={className}>
            {activeHighrise && (
                <>
                    {hasOwner && (
                        <S.ExternalNavigationLink
                            buttonText="View Secondary"
                            href={`https://${openseaURL}.io/assets/${contractAddress}/${`${activeHighrise.index}`}`}
                        />
                    )}
                    <S.ExternalNavigationLink
                        buttonText="View Print"
                        href={`https://www.hythacg.com/prints/highrise${`${
                            activeHighrise.index + 1
                        }`.padStart(2, '0')}`}
                    />
                </>
            )}
            {activeHighrise && showMap && (
                <S.MapButton onClick={() => setIsMapView(true)}>
                    View On Map
                    <S.Map />
                </S.MapButton>
            )}
        </S.ExternalNavigation>
    );
};
