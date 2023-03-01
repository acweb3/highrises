import { capitalize } from 'common/helpers';
import { Explorer } from 'components/Explorer';
import { Metadata } from 'components/Metadata';
import { SiteWrapper } from 'components/SiteWrapper';
import { Contexts } from 'contexts';
import 'css/index.css';
import kebabCase from 'just-kebab-case';

const App = ({
    pageContext: { sortName, description, highrises, thumbnail },
}) => {
    return (
        <Contexts
            sortName={sortName}
            description={description}
            highrises={highrises}
        >
            <Metadata
                title={`${capitalize(sortName)} - HYTHA.CG`}
                description={description.copy}
                ogUrl={`highrises.hythacg.com/${kebabCase(
                    capitalize(sortName)
                )}/`}
                thumbnail={thumbnail}
                thumbnailAlt={''}
            />
            <SiteWrapper>
                <Explorer thumbnail={thumbnail} />
            </SiteWrapper>
        </Contexts>
    );
};

export default App;
