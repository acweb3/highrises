import { createContext, useContext } from 'react';

export const ExplorerRefContext = createContext({});
export const useExplorerRefContext = () => useContext(ExplorerRefContext);
