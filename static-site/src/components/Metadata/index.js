import Helmet from 'react-helmet';

export const Metadata = ({
    title,
    description,
    ogUrl,
    thumbnail,
    thumbnailAlt,
    geoPlaceName,
}) => {
    return (
        <Helmet>
            {/**
             * Dynamic
             * */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta property="og:title" content={title} />
            <meta name="twitter:title" content={title} />

            <meta name="description" content={description} />
            <meta property="og:description" content={description} />

            <meta property="og:url" content={ogUrl} />

            <meta property="og:image" content={thumbnail} />
            <meta property="twitter:image" content={thumbnail} />

            <meta property="twitter:image:alt" content={thumbnailAlt} />

            {geoPlaceName && (
                <meta name="geo.placename" content={geoPlaceName} />
            )}

            {/**
             * Default
             * */}

            <meta name="twitter:creator" content="@Hythacg" />
            <meta name="twitter:site" content="@Hythacg" />
            <meta property="og:site_name" content="highrises.hythacg.com" />
            <link rel="canonical" href="highrises.hythacg.com" />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
    );
};
