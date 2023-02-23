import { getBuildingURL } from 'common/helpers';
import { Explorer } from 'components/Explorer';
import { Metadata } from 'components/Metadata';
import { SiteWrapper } from 'components/SiteWrapper';
import { Contexts } from 'contexts';
import 'css/index.css';

const App = ({ pageContext: { highrise, highrises, thumbnail } }) => {
    const aka = highrise?.attributes.find(
        ({ trait_type }) => trait_type === 'AKA now'
    );

    return (
        <Contexts highrise={highrise} highrises={highrises}>
            <Metadata
                title={`${highrise.name}${
                    aka ? ` (${aka.value})` : ''
                } - HYTHA.CG`}
                description={highrise.description}
                ogUrl={`highrises.hythacg.com${getBuildingURL(highrise)}`}
                thumbnail={thumbnail}
                thumbnailAlt={highrise.name}
            />
            <SiteWrapper>
                <Explorer thumbnail={thumbnail} />
            </SiteWrapper>
        </Contexts>
    );
};

export default App;
