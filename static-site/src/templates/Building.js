import { getBuildingURL } from 'common/helpers';
import { BuildingDetail } from 'components/BuildingDetail';
import { EmailCollection } from 'components/EmailCollection';
import { Metadata } from 'components/Metadata';
import { SiteWrapper } from 'components/SiteWrapper';
import { Contexts } from 'contexts';

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
                    ogUrl={`highrises.hythacg.com${getBuildingURL(highrise)}`}
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
