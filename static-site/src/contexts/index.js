import { theme } from 'common/styles/theme';
import { ActiveHighrise } from 'contexts/ActiveHighrise';
import { ActiveSort } from 'contexts/ActiveSort';
import { DApp } from 'contexts/DApp';
import { MobilePopover } from 'contexts/MobilePopover';
import { WindowSize } from 'contexts/WindowSize';
import { ThemeProvider } from 'styled-components';

export const Contexts = ({ children, highrise, highrises }) => {
    return (
        <DApp>
            <ActiveSort>
                <ActiveHighrise initHighrise={highrise} highrises={highrises}>
                    <WindowSize>
                        <MobilePopover>
                            <ThemeProvider theme={theme}>
                                {children}
                            </ThemeProvider>
                        </MobilePopover>
                    </WindowSize>
                </ActiveHighrise>
            </ActiveSort>
        </DApp>
    );
};
