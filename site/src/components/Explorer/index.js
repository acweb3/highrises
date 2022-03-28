import { BuildingsExplorer } from 'components/Explorer/BuildingsExplorer';
import * as S from 'components/Explorer/Explorer.styled';
import { MapExplorer } from 'components/Explorer/MapExplorer';
import { Masthead } from 'components/Explorer/Masthead';
import { Modal } from 'components/Explorer/Modal';
import { SortBar } from 'components/Explorer/SortBar';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useEffect, useState } from 'react';

export const Explorer = () => {
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
        <S.Explorer>
            <S.ExplorerSection>
                <MapExplorer />
            </S.ExplorerSection>
            <S.ExplorerSection right>
                <SortBar
                    activeSort={activeSort}
                    setActiveSort={setActiveSort}
                />
                <BuildingsExplorer activeSort={activeSort} />
                <Masthead />
            </S.ExplorerSection>

            {isDelayedExpandedView && <Modal />}
        </S.Explorer>
    );
};
