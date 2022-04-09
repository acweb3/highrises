import { theme } from 'common/styles/theme';
import { ActiveHighrise } from 'contexts/ActiveHighrise';
import { DApp } from 'contexts/DApp';
import { ExplorerRef } from 'contexts/ExplorerRef';
import { ThemeProvider } from 'styled-components';

export const Contexts = ({ children }) => {
    return (
        <DApp>
            <ActiveHighrise>
                <ExplorerRef>
                    <ThemeProvider theme={theme}>{children}</ThemeProvider>
                </ExplorerRef>
            </ActiveHighrise>
        </DApp>
    );
};
