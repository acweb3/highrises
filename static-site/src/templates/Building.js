import { BuildingDetail } from 'components/BuildingDetail';
import { SiteWrapper } from 'components/SiteWrapper';
import { Contexts } from 'contexts';
import Helmet from 'react-helmet';

const Building = ({
    pageContext: { highrise, highrises, thumbnail },
    location,
}) => {
    return (
        <Contexts highrises={highrises}>
            <SiteWrapper>
                <Helmet>
                    <title>{highrise.name} - HYTHA.CG</title>

                    <meta
                        name="title"
                        content={`${highrise.name} - HYTHA.CG`}
                    />
                    <meta name="description" content={highrise.description} />
                    <meta name="geo.placename" content={highrise.city} />
                    <meta
                        property="og:description"
                        content={highrise.description}
                    />
                    <meta
                        property="og:title"
                        content={`${highrise.name} - HYTHA.CG`}
                    />
                    <meta
                        property="og:site_name"
                        content="highrises.hythacg.com"
                    />
                    <meta property="og:image" content={thumbnail} />
                    <meta property="og:type" content="website" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta
                        name="twitter:title"
                        content={`${highrise.name} - HYTHA.CG`}
                    />
                    <meta
                        property="twitter:description"
                        content={highrise.description}
                    />
                    <meta name="twitter:creator" content="@Hythacg" />
                    <meta name="twitter:site" content="@Hythacg" />
                    <meta property="twitter:image" content={thumbnail} />
                    <meta
                        property="twitter:image:alt"
                        content={highrise.name}
                    />

                    <meta
                        property="og:url"
                        content={`highrises.hythacg.com/buildings/${highrise.name}`}
                    />
                </Helmet>
                <BuildingDetail activeHighrise={highrise} location={location} />
            </SiteWrapper>
        </Contexts>
    );
};

export default Building;
