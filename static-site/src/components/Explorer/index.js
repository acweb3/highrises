import { BuildingsExplorer } from 'components/Explorer/BuildingsExplorer';
import * as S from 'components/Explorer/Explorer.styled';
import { FeatureImage } from 'components/Explorer/FeatureImage';
import { MapExplorer } from 'components/Explorer/MapExplorer';
import { Masthead } from 'components/Explorer/Masthead';
import { Header } from 'components/Explorer/Masthead/Header';
import { SortBar } from 'components/Explorer/SortBar';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useWindowSizeContext } from 'contexts/WindowSize';

const MobileExplorer = () => {
    return (
        <S.MobileExplorer>
            <S.MobileExplorerPopover>
                <Header />
                <FeatureImage />
                <Masthead />
            </S.MobileExplorerPopover>

            <BuildingsExplorer />
        </S.MobileExplorer>
    );
};

const DesktopExplorer = () => {
    const { highrises } = useActiveHighriseContext();

    return (
        <S.DesktopExplorer>
            <S.DesktopExplorerSection>
                <S.DesktopExplorerSideBar>
                    <Masthead />
                    <MapExplorer />
                </S.DesktopExplorerSideBar>
            </S.DesktopExplorerSection>

            <S.DesktopExplorerSection>
                <FeatureImage />
            </S.DesktopExplorerSection>

            <S.DesktopExplorerSection>
                {Boolean(highrises.length) && (
                    <S.DesktopExplorerBuildings>
                        <BuildingsExplorer />
                        <SortBar />
                    </S.DesktopExplorerBuildings>
                )}
            </S.DesktopExplorerSection>
        </S.DesktopExplorer>
    );
};

export const Explorer = () => {
    const { isMobile } = useWindowSizeContext();

    if (isMobile === undefined) {
        return null;
    }

    return <>{isMobile ? <MobileExplorer /> : <DesktopExplorer />}</>;
};
