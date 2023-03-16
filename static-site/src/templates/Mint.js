import { theme } from 'common/styles/theme';
import { Metadata } from 'components/Metadata';
import { Mint } from 'components/Mint';
import 'css/index.css';
import { ThemeProvider } from 'styled-components';

const App = ({ pageContext: { highrises, thumbnail } }) => {
    return (
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    );
};

export default App;
