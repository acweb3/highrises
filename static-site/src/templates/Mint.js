import { theme } from 'common/styles/theme';
import { Metadata } from 'components/Metadata';
import { Mint } from 'components/Mint';
import { SiteWrapper } from 'components/SiteWrapper';
import { WindowSize } from 'contexts/WindowSize';
import 'css/index.css';
import { ThemeProvider } from 'styled-components';

const App = ({ pageContext: { highrises, thumbnail } }) => {
    return (
        <WindowSize>
            <ThemeProvider theme={theme}>
                <SiteWrapper>
                    <Metadata
                        title={'Detroit NFT Release - HYTHA.CG'}
                        description={
                            '8 Detroit Highrises will be available for a ½ price (.5 ETH) blind mint.'
                        }
                        ogUrl={'highrises.hythacg.com'}
                        thumbnail={thumbnail}
                        thumbnailAlt={'Detroit Highrises release'}
                    />

                    <Mint />
                </SiteWrapper>
            </ThemeProvider>
        </WindowSize>
    );
};

export default App;
