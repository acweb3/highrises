import { useWindowSize } from 'common/hooks/useWindowSize';
import { BuildingsExplorer } from 'components/Explorer/BuildingsExplorer';
import * as S from 'components/Explorer/Explorer.styled';
import { FeatureImage } from 'components/Explorer/FeatureImage';
import { MapExplorer } from 'components/Explorer/MapExplorer';
import { Masthead } from 'components/Explorer/Masthead';
import { Header } from 'components/Explorer/Masthead/Header';
import { SortBar } from 'components/Explorer/SortBar';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useState } from 'react';

const MobileExplorer = ({ activeSort }) => {
    return (
        <S.MobileExplorer>
            <S.MobileExplorerPopover>
                <Header activeSort={activeSort} />
                <FeatureImage />
                <Masthead />
            </S.MobileExplorerPopover>

            <BuildingsExplorer activeSort={activeSort} />
        </S.MobileExplorer>
    );
};

const DesktopExplorer = ({ activeSort, setActiveSort }) => {
    const { highrises } = useActiveHighriseContext();

    return (
        <S.DesktopExplorer>
            <S.DesktopExplorerSection>
                <S.DesktopExplorerSideBar>
                    <Masthead activeSort={activeSort} />
                    <MapExplorer />
                </S.DesktopExplorerSideBar>
            </S.DesktopExplorerSection>

            <S.DesktopExplorerSection>
                <FeatureImage />
            </S.DesktopExplorerSection>

            <S.DesktopExplorerSection>
                {Boolean(highrises.length) && (
                    <S.DesktopExplorerBuildings>
                        <BuildingsExplorer activeSort={activeSort} />
                        <SortBar
                            activeSort={activeSort}
                            setActiveSort={setActiveSort}
                        />
                    </S.DesktopExplorerBuildings>
                )}
            </S.DesktopExplorerSection>
        </S.DesktopExplorer>
    );
};

export const Explorer = () => {
    const { isMobile } = useWindowSize();
    const [activeSort, setActiveSort] = useState(undefined);

    if (isMobile === undefined) {
        return null;
    }

    return (
        <>
            {isMobile ? (
                <MobileExplorer
                    activeSort={activeSort}
                    setActiveSort={setActiveSort}
                />
            ) : (
                <DesktopExplorer
                    activeSort={activeSort}
                    setActiveSort={setActiveSort}
                />
            )}
        </>
    );
};
