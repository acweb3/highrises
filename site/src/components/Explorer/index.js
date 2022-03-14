import { BuildingsExplorer } from 'components/Explorer/BuildingsExplorer';
import * as S from 'components/Explorer/Explorer.styled';
import { MapExplorer } from 'components/Explorer/MapExplorer';
import { Masthead } from 'components/Explorer/Masthead';
import { useState } from 'react';

export const Explorer = () => {
    const [activeSort, setActiveSort] = useState(undefined);

    return (
        <S.Explorer>
            <Masthead activeSort={activeSort} setActiveSort={setActiveSort} />
            <BuildingsExplorer activeSort={activeSort} />
            {/** Map explorer goes here */}
            <MapExplorer />
        </S.Explorer>
    );
};
