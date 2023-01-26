import { theme } from 'common/styles/theme';
import { ActiveHighrise } from 'contexts/ActiveHighrise';
import { DApp } from 'contexts/DApp';
import { Sort } from 'contexts/Sort';
import { ThemeProvider } from 'styled-components';

export const Contexts = ({ children, highrises }) => {
    return (
        <DApp>
            <ActiveHighrise highrises={highrises}>
                <Sort>
                    <ThemeProvider theme={theme}>{children}</ThemeProvider>
                </Sort>
            </ActiveHighrise>
        </DApp>
    );
};
