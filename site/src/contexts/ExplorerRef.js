import { createContext, useContext, useRef } from 'react';

export const ExplorerRefContext = createContext({});
export const useExplorerRefContext = () => useContext(ExplorerRefContext);

export const ExplorerRef = ({ children }) => {
    const mastheadRef = useRef(null);
    const buildingExplorerDesktopRef = useRef(null);
    const buildingExplorerMobileRef = useRef(null);

    return (
        <ExplorerRefContext.Provider
            value={{
                mastheadRef,
                buildingExplorerDesktopRef,
                buildingExplorerMobileRef,
            }}
        >
            {children}
        </ExplorerRefContext.Provider>
    );
};
