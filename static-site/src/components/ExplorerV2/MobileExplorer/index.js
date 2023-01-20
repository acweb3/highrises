import seamlessBackgroundSrc from 'assets/images/seamless-background.webp';
import { BuildingsExplorer } from 'components/ExplorerV2/BuildingsExplorer';
import { MapExplorer } from 'components/ExplorerV2/MapExplorer';
import { Masthead } from 'components/ExplorerV2/Masthead';
import * as S from 'components/ExplorerV2/MobileExplorer/MobileExplorer.styled';
import { SortBar } from 'components/ExplorerV2/SortBar';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useState } from 'react';

export const MobileExplorer = () => {
    const [activeSort, setActiveSort] = useState(undefined);
    const { highrises } = useActiveHighriseContext();

    return (
        <S.MobileExplorer>
            <S.MobileExplorerSection
                css={`
                    display: none;
                `}
            >
                <MapExplorer />
            </S.MobileExplorerSection>

            <S.MobileExplorerSection
                css={`
                    overflow: hidden;
                    width: 64vw;
                    min-width: 64vw;
                    position: relative;
                    border-left: 1px solid
                        ${(props) => props.theme.colors.grey[0]};
                `}
            >
                <S.MobileExplorerBackground src={seamlessBackgroundSrc} />
                {Boolean(highrises.length) && (
                    <>
                        <SortBar
                            isMobile
                            activeSort={activeSort}
                            setActiveSort={setActiveSort}
                        />
                        <BuildingsExplorer activeSort={activeSort} />
                    </>
                )}
            </S.MobileExplorerSection>
            <Masthead />
        </S.MobileExplorer>
    );
};
