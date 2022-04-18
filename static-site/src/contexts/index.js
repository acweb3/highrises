import { theme } from 'common/styles/theme';
import { ActiveHighrise } from 'contexts/ActiveHighrise';
import { DApp } from 'contexts/DApp';
import { ExplorerRef } from 'contexts/ExplorerRef';
import { MapView } from 'contexts/MapView';
import { Sort } from 'contexts/Sort';
import { ThemeProvider } from 'styled-components';

export const Contexts = ({ children, highrises }) => {
    return (
        <DApp>
            <ActiveHighrise highrises={highrises}>
                <MapView>
                    <Sort>
                        <ExplorerRef>
                            <ThemeProvider theme={theme}>
                                {children}
                            </ThemeProvider>
                        </ExplorerRef>
                    </Sort>
                </MapView>
            </ActiveHighrise>
        </DApp>
    );
};
