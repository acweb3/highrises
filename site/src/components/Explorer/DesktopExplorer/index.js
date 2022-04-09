import { BuildingDetail } from 'components/BuildingDetail';
import { BuildingsExplorer } from 'components/Explorer/BuildingsExplorer';
import * as S from 'components/Explorer/DesktopExplorer/DesktopExplorer.styled';
import { MapExplorer } from 'components/Explorer/MapExplorer';
import { Masthead } from 'components/Explorer/Masthead';
import { SortBar } from 'components/Explorer/SortBar';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useEffect, useState } from 'react';

export const DesktopExplorer = () => {
    const [activeSort, setActiveSort] = useState(undefined);
    const { activeHighrise, isExpandedView } = useActiveHighriseContext();
    const [isDelayedExpandedView, setIsDelayedExpandedView] = useState(false);

    /**
     * Add delay to modal dismount to prevent FOUC
     */
    useEffect(() => {
        let sto;

        if (!isExpandedView) {
            setTimeout(() => {
                setIsDelayedExpandedView(false);
            }, 40);
        } else {
            setIsDelayedExpandedView(true);
        }

        return () => {
            clearTimeout(sto);
        };
    }, [isExpandedView]);

    return (
        <S.DesktopExplorer>
            <S.DesktopExplorerSection>
                <MapExplorer />
            </S.DesktopExplorerSection>
            <S.DesktopExplorerSection right>
                <SortBar
                    activeSort={activeSort}
                    setActiveSort={setActiveSort}
                />
                <BuildingsExplorer activeSort={activeSort} />
                <Masthead />
            </S.DesktopExplorerSection>

            {isDelayedExpandedView && (
                <BuildingDetail activeHighrise={activeHighrise} />
            )}
        </S.DesktopExplorer>
    );
};
