import { EmailCollection } from 'components/EmailCollection';
import { ExplorerV2 } from 'components/ExplorerV2';
import { NavTabs } from 'components/NavTabs';
import { SiteWrapper } from 'components/SiteWrapper';
import { Contexts } from 'contexts';
import 'css/index.css';
import Helmet from 'react-helmet';

const App = ({ pageContext: { highrises, thumbnail } }) => {
    return (
        <Contexts highrises={highrises}>
            <SiteWrapper hideFABOnMobile>
                <Helmet>
                    <title>Highrises - HYTHA.CG</title>
                    <meta name="title" content="Highrises - HYTHA.CG" />
                    <meta
                        name="description"
                        content="Highrises are the iconic elements of American cities. Reaching radical new heights in technological advancement, skyscrapers fused Classical, Renaissance, and Gothic motifs onto steel and defined a new architectural language with Art Deco and International."
                    />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Highrises - HYTHA.CG" />
                    <meta property="og:url" content="highrises.hythacg.com" />
                    <meta
                        property="og:site_name"
                        content="highrises.hythacg.com"
                    />
                    <meta
                        property="og:description"
                        content="Highrises are the iconic elements of American cities. Reaching radical new heights in technological advancement, skyscrapers fused Classical, Renaissance, and Gothic motifs onto steel and defined a new architectural language with Art Deco and International."
                    />
                    <meta property="og:type" content="website" />
                    <meta
                        name="twitter:title"
                        content="Highrisess - HYTHA.CG"
                    />
                    <meta property="og:image" content={thumbnail} />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:creator" content="@Hythacg" />
                    <meta name="twitter:site" content="@Hythacg" />
                    <meta property="twitter:image" content={thumbnail} />
                    <meta property="twitter:image:alt" content="" />
                    <link rel="canonical" href="highrises.hythacg.com" />
                </Helmet>
                <NavTabs />
                <ExplorerV2 />
                <EmailCollection />
            </SiteWrapper>
        </Contexts>
    );
};

export default App;
