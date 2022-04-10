import { ContextFAB } from 'components/ContextFAB';
import { Countdown } from 'components/Countdown';
import { Nav } from 'components/Nav';
import { Router } from 'components/Router';
import { SiteWrapper } from 'components/SiteWrapper';
import { Contexts } from 'contexts';

export const App = () => {
    return (
        <Contexts>
            <SiteWrapper>
                <Nav />
                <Countdown />
                <ContextFAB />
                <Router />
            </SiteWrapper>
        </Contexts>
    );
};

export default App;
