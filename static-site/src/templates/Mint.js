import { theme } from 'common/styles/theme';
import { Metadata } from 'components/Metadata';
import { Mint } from 'components/Mint';
import { SiteWrapper } from 'components/SiteWrapper';
import { DApp } from 'contexts/DApp';
import { WindowSize } from 'contexts/WindowSize';
import 'css/index.css';
import { ThemeProvider } from 'styled-components';

const App = ({ pageContext: { highrises, thumbnail } }) => {
    return (
        <DApp>
            <WindowSize>
                <ThemeProvider theme={theme}>
                    <SiteWrapper>
                        <Metadata
                            title={'NFT Release - HYTHA.CG'}
                            description={
                                '16 Highrises will be available for a ½ price (.5 ETH) blind mint.'
                            }
                            ogUrl={'highrises.hythacg.com'}
                            thumbnail={thumbnail}
                            thumbnailAlt={'Highrises release'}
                        />

                        <Mint />
                    </SiteWrapper>
                </ThemeProvider>
            </WindowSize>
        </DApp>
    );
};

export default App;
