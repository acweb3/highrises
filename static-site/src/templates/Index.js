import { Editing } from 'components/Editing';
import { EmailCollection } from 'components/EmailCollection';
import { Explorer } from 'components/Explorer';
import { FAQ } from 'components/FAQ';
import { Intent } from 'components/Intent';
import { Roadmap } from 'components/Roadmap';
import { SiteWrapper } from 'components/SiteWrapper';
import { Team } from 'components/Team';
import { Contexts } from 'contexts';
import 'css/index.css';
import Helmet from 'react-helmet';

const App = ({ pageContext: { highrises, thumbnail } }) => {
    return (
        <Contexts highrises={highrises}>
            <SiteWrapper>
                <Helmet>
                    <title>Highrises - HYTHA.CG</title>
                    <meta name="title" content="Highrises - HYTHA.CG" />
                    <meta
                        name="description"
                        content="Highrises are the iconic elements of American cities. From their origins in Manhattan and Chicago, these soaring structures signaled radical new heights in technological advancement. By fusing Classical, Renaissance, and Gothic motifs onto immense steel forms, then defining a new architectural language with Art Deco and International, America’s skyscrapers set the tone for cities of the world to follow."
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
                        content="Highrises are the iconic elements of American cities. From their origins in Manhattan and Chicago, these soaring structures signaled radical new heights in technological advancement. By fusing Classical, Renaissance, and Gothic motifs onto immense steel forms, then defining a new architectural language with Art Deco and International, America’s skyscrapers set the tone for cities of the world to follow."
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
                <Intent />
                <Explorer />
                <Roadmap />
                <Team />
                <Editing />
                <FAQ />
                <EmailCollection />
            </SiteWrapper>
        </Contexts>
    );
};

export default App;
