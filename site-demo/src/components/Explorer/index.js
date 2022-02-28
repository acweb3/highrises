import { BuildingsExplorer } from 'components/Explorer/BuildingsExplorer';
import { BuildingsMasthead } from 'components/Explorer/BuildingsExplorer/BuildingsMasthead';
import { useState } from 'react';

export const Explorer = () => {
    const [activeSort, setActiveSort] = useState(undefined);

    return (
        <>
            <BuildingsMasthead
                activeSort={activeSort}
                setActiveSort={setActiveSort}
            />
            <BuildingsExplorer activeSort={activeSort} />
            {/** Map explorer goes here */}
        </>
    );
};
