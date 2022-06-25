import { createContext, useContext, useRef, useState } from 'react';

export const ExplorerRefContext = createContext({});
export const useExplorerRefContext = () => useContext(ExplorerRefContext);

export const ExplorerRef = ({ children }) => {
    const mastheadRef = useRef(null);
    const explorerRef = useRef(null);
    const desktopNavRef = useRef(null);
    const buildingExplorerDesktopRef = useRef(null);
    const buildingExplorerMobileRef = useRef(null);
    const [buildingExplorerMobileRefState, setBuildingExplorerMobileRefState] =
        useState({ current: null, reset: false });

    return (
        <ExplorerRefContext.Provider
            value={{
                mastheadRef,
                explorerRef,
                desktopNavRef,
                buildingExplorerDesktopRef,
                buildingExplorerMobileRef,
                buildingExplorerMobileRefState,
                setBuildingExplorerMobileRefState,
            }}
        >
            {children}
        </ExplorerRefContext.Provider>
    );
};
