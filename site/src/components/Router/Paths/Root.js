import { Editing } from 'components/Editing';
import { EmailCollection } from 'components/EmailCollection';
import { Explorer } from 'components/Explorer';
import { FAQ } from 'components/FAQ';
import { Intent } from 'components/Intent';
import { Roadmap } from 'components/Roadmap';
import { Team } from 'components/Team';
import Helmet from 'react-helmet';

export const Root = () => {
    return (
        <>
            <Helmet>
                <title>Highrises — HYTHA.CG</title>
                <meta
                    name="description"
                    content="The Highrises project reveals the hidden details of remarkable buildings all across the country, including many that have been overlooked or underappreciated. Images showcase styles of ornamentation reflecting the values and ideals that animated urban culture in the early 20th century. Stories integrated into each image provide context and historical significance and deepen our understanding of their importance and value."
                />
            </Helmet>
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
