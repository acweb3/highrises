import { BuildingsExplorer } from 'components/Explorer/BuildingsExplorer';
import * as S from 'components/Explorer/Explorer.styled';
import { FeatureImage } from 'components/Explorer/FeatureImage';
import { MapExplorer } from 'components/Explorer/MapExplorer';
import { Masthead } from 'components/Explorer/Masthead';
import { SortBar } from 'components/Explorer/SortBar';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useState } from 'react';

export const Explorer = () => {
    const [activeSort, setActiveSort] = useState(undefined);
    const { highrises } = useActiveHighriseContext();

    return (
        <S.Explorer>
            <S.ExplorerSection>
                <S.ExplorerSideBar>
                    <Masthead activeSort={activeSort} />
                    <MapExplorer />
                </S.ExplorerSideBar>
            </S.ExplorerSection>

            <S.ExplorerSection>
                <FeatureImage />
            </S.ExplorerSection>

            <S.ExplorerSection>
                {Boolean(highrises.length) && (
                    <S.ExplorerBuildings>
                        <BuildingsExplorer activeSort={activeSort} />
                        <SortBar
                            activeSort={activeSort}
                            setActiveSort={setActiveSort}
                        />
                    </S.ExplorerBuildings>
                )}
            </S.ExplorerSection>
        </S.Explorer>
    );
};
