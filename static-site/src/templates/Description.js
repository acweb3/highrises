import { Explorer } from 'components/Explorer';
import { Metadata } from 'components/Metadata';
import { SiteWrapper } from 'components/SiteWrapper';
import { Contexts } from 'contexts';
import 'css/index.css';

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
                title={`${description.header} - HYTHA.CG`}
                description={description.copy}
                ogUrl={'highrises.hythacg.com'}
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
