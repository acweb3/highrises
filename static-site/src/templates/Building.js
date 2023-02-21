import { Explorer } from 'components/Explorer';
import { SiteWrapper } from 'components/SiteWrapper';
import { Contexts } from 'contexts';
import 'css/index.css';

const App = ({ pageContext: { highrise, highrises, thumbnail } }) => {
    return (
        <Contexts highrise={highrise} highrises={highrises}>
            <SiteWrapper>
                <Explorer thumbnail={thumbnail} />
            </SiteWrapper>
        </Contexts>
    );
};

export default App;
