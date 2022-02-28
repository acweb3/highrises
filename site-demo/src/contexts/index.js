import { ActiveHighriseContext } from './ActiveHighrise';
import { theme } from 'common/styles/theme';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

export const Contexts = ({ children }) => {
    const [activeHighrise, setActiveHighrise] = useState(undefined);

    return (
        <ActiveHighriseContext.Provider
            value={{ activeHighrise, setActiveHighrise }}
        >
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ActiveHighriseContext.Provider>
    );
};
