import { BuildingDetail } from 'components/BuildingDetail';
import { EmailCollection } from 'components/EmailCollection';
import { Metadata } from 'components/Metadata';
import { SiteWrapper } from 'components/SiteWrapper';
import { Contexts } from 'contexts';
import kebabCase from 'just-kebab-case';

const Building = ({
    pageContext: { highrise, highrises, thumbnail },
    location,
}) => {
    return (
        <Contexts highrises={highrises}>
            <SiteWrapper>
                <Metadata
                    title={`${highrise.name} - HYTHA.CG`}
                    description={highrise.description}
                    ogUrl={`highrises.hythacg.com/building/${kebabCase(
                        highrise.name
                    )}-${kebabCase(highrise.architect)}`}
                    thumbnail={thumbnail}
                    thumbnailAlt={highrise.name}
                />
                <BuildingDetail activeHighrise={highrise} location={location} />
                <EmailCollection />
            </SiteWrapper>
        </Contexts>
    );
};

export default Building;
