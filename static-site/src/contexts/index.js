import { theme } from 'common/styles/theme';
import { ActiveHighrise } from 'contexts/ActiveHighrise';
import { ActiveSort } from 'contexts/ActiveSort';
import { DApp } from 'contexts/DApp';
import { MobilePopover } from 'contexts/MobilePopover';
import { WindowSize } from 'contexts/WindowSize';
import { ThemeProvider } from 'styled-components';

export const Contexts = ({
    children,
    highrise,
    sortName,
    description,
    highrises,
}) => {
    return (
        <DApp>
            <WindowSize>
                <ActiveSort sortName={sortName} initDescription={description}>
                    <ActiveHighrise
                        initHighrise={highrise}
                        initDescription={description}
                        highrises={highrises}
                    >
                        <MobilePopover>
                            <ThemeProvider theme={theme}>
                                {children}
                            </ThemeProvider>
                        </MobilePopover>
                    </ActiveHighrise>
                </ActiveSort>
            </WindowSize>
        </DApp>
    );
};
