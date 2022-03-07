import { Countdown } from 'components/Countdown';
import { Editing } from 'components/Editing';
import { EmailCollection } from 'components/EmailCollection';
import { Explorer } from 'components/Explorer';
import { FAQ } from 'components/FAQ';
import { Intent } from 'components/Intent';
import { Nav } from 'components/Nav';
import { Roadmap } from 'components/Roadmap';
import { SiteWrapper } from 'components/SiteWrapper';
import { Team } from 'components/Team';
import { Contexts } from 'contexts';

export const App = () => {
    return (
        <Contexts>
            <SiteWrapper>
                <Nav />
                <Countdown />
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
