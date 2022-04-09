import { ContextFAB } from 'components/ContextFAB';
import { Countdown } from 'components/Countdown';
import { Editing } from 'components/Editing';
import { EmailCollection } from 'components/EmailCollection';
import { Explorer } from 'components/Explorer';
import { FAQ } from 'components/FAQ';
import { Intent } from 'components/Intent';
import { Nav } from 'components/Nav';
import { Roadmap } from 'components/Roadmap';
import { Team } from 'components/Team';

export const Root = () => {
    return (
        <>
            <Nav />
            <ContextFAB />
            <Countdown />
            <Intent />
            <Explorer />
            <Roadmap />
            <Team />
            <Editing />
            <FAQ />
            <EmailCollection />
        </>
    );
};
