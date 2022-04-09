import { createContext, useContext, useRef } from 'react';

export const ExplorerRefContext = createContext({});
export const useExplorerRefContext = () => useContext(ExplorerRefContext);

export const ExplorerRef = ({ children }) => {
    const mastheadRef = useRef(null);
    const buildingExplorerRef = useRef(null);

    return (
        <ExplorerRefContext.Provider
            value={{ mastheadRef, buildingExplorerRef }}
        >
            {children}
        </ExplorerRefContext.Provider>
    );
};
