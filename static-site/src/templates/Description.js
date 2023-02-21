import { Explorer } from 'components/Explorer';
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
            <SiteWrapper>
                <Explorer thumbnail={thumbnail} />
            </SiteWrapper>
        </Contexts>
    );
};

export default App;
