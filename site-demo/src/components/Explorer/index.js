import { BuildingsExplorer } from 'components/Explorer/BuildingsExplorer';
import { MapExplorer } from 'components/Explorer/MapExplorer';
import { Masthead } from 'components/Explorer/Masthead';
import { useState } from 'react';

export const Explorer = () => {
    const [activeSort, setActiveSort] = useState(undefined);

    return (
        <>
            <Masthead activeSort={activeSort} setActiveSort={setActiveSort} />
            <BuildingsExplorer activeSort={activeSort} />
            {/** Map explorer goes here */}
            <MapExplorer />
        </>
    );
};
