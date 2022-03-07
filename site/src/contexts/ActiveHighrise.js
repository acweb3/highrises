import { createContext, useContext } from 'react';

export const ActiveHighriseContext = createContext({});
export const useActiveHighriseContext = () => useContext(ActiveHighriseContext);
