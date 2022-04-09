import { Router } from 'components/Router';
import { SiteWrapper } from 'components/SiteWrapper';
import { Contexts } from 'contexts';

export const App = () => {
    return (
        <Contexts>
            <SiteWrapper>
                <Router />
            </SiteWrapper>
        </Contexts>
    );
};

export default App;
