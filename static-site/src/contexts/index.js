import { theme } from 'common/styles/theme';
import { ActiveHighrise } from 'contexts/ActiveHighrise';
import { DApp } from 'contexts/DApp';
import { ThemeProvider } from 'styled-components';

export const Contexts = ({ children, highrises }) => {
    return (
        <DApp>
            <ActiveHighrise highrises={highrises}>
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </ActiveHighrise>
        </DApp>
    );
};
