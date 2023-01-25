import { useDocumentListener } from 'common/hooks/useDocumentListener';
import { Nav } from 'components/Nav';
import * as S from 'components/SiteWrapper/SiteWrapper.styled';
import { Sky } from 'components/Sky';
import { useMapViewContext } from 'contexts/MapView';

export const SiteWrapper = ({ children, hideFABOnMobile }) => {
    const { setIsMapView } = useMapViewContext();

    useDocumentListener(
        'keydown',
        (e) => {
            if (e.key === 'Escape') {
                setIsMapView(false);
            }
        },
        []
    );

    return (
        <>
            <S.GlobalStyle />
            <Nav />
            <Sky />
            <S.SiteWrapper>{children}</S.SiteWrapper>
        </>
    );
};
