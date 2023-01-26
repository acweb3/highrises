import { Explorer } from 'components/Explorer';
import { Metadata } from 'components/Metadata';
import { NavTabs } from 'components/NavTabs';
import { SiteWrapper } from 'components/SiteWrapper';
import { Contexts } from 'contexts';
import 'css/index.css';

const App = ({ pageContext: { highrises, thumbnail } }) => {
    return (
        <Contexts highrises={highrises}>
            <SiteWrapper>
                <Metadata
                    title={'Highrises - HYTHA.CG'}
                    description={
                        'Highrises are the iconic elements of American cities. Reaching radical new heights in technological advancement, skyscrapers fused Classical, Renaissance, and Gothic motifs onto steel and defined a new architectural language with Art Deco and International.'
                    }
                    ogUrl={'highrises.hythacg.com'}
                    thumbnail={thumbnail}
                    thumbnailAlt={''}
                />
                <NavTabs />
                <Explorer />
            </SiteWrapper>
        </Contexts>
    );
};

export default App;
