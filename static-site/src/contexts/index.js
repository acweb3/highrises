import { theme } from 'common/styles/theme';
import { ActiveHighrise } from 'contexts/ActiveHighrise';
import { DApp } from 'contexts/DApp';
import { MobilePopover } from 'contexts/MobilePopover';
import { ThemeProvider } from 'styled-components';

export const Contexts = ({ children, highrises }) => {
    return (
        <DApp>
            <ActiveHighrise highrises={highrises}>
                <MobilePopover>
                    <ThemeProvider theme={theme}>{children}</ThemeProvider>
                </MobilePopover>
            </ActiveHighrise>
        </DApp>
    );
};
