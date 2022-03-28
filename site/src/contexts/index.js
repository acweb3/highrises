import { theme } from 'common/styles/theme';
import { ActiveHighriseContext } from 'contexts/ActiveHighrise';
import { DApp } from 'contexts/DApp';
import { ExplorerRefContext } from 'contexts/ExplorerRef';
import { useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';

export const Contexts = ({ children }) => {
    const [activeHighrise, setActiveHighrise] = useState(undefined);
    const [highrises, setHighrises] = useState([]);
    const [isExpandedView, setIsExpandedView] = useState(false);
    const mastheadRef = useRef(null);
    const buildingExplorerRef = useRef(null);

    return (
        <DApp>
            <ActiveHighriseContext.Provider
                value={{
                    activeHighrise,
                    setActiveHighrise,
                    highrises,
                    setHighrises,
                    isExpandedView,
                    setIsExpandedView,
                }}
            >
                <ExplorerRefContext.Provider
                    value={{ mastheadRef, buildingExplorerRef }}
                >
                    <ThemeProvider theme={theme}>{children}</ThemeProvider>
                </ExplorerRefContext.Provider>
            </ActiveHighriseContext.Provider>
        </DApp>
    );
};
