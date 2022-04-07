import { BuildingsExplorer } from 'components/Explorer/BuildingsExplorer';
import { MapExplorer } from 'components/Explorer/MapExplorer';
import { Masthead } from 'components/Explorer/Masthead';
import * as S from 'components/Explorer/MobileExplorer/MobileExplorer.styled';
import { Modal } from 'components/Explorer/Modal';
import { SortBar } from 'components/Explorer/SortBar';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useEffect, useState } from 'react';

export const MobileExplorer = () => {
    const [activeSort, setActiveSort] = useState(undefined);
    const { isExpandedView } = useActiveHighriseContext();
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
        <S.MobileExplorer>
            <S.MobileExplorerSection isVisible={false}>
                <MapExplorer />
            </S.MobileExplorerSection>
            <S.MobileExplorerSection isVisible={true}>
                <Masthead />
                <SortBar
                    activeSort={activeSort}
                    setActiveSort={setActiveSort}
                />
                <BuildingsExplorer activeSort={activeSort} />
            </S.MobileExplorerSection>

            {isDelayedExpandedView && <Modal />}
        </S.MobileExplorer>
    );
};
