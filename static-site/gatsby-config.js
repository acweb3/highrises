require('dotenv').config();

module.exports = {
    siteMetadata: {
        title: `static-site`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        'gatsby-plugin-root-import',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-provide-react',
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-json',
        // {
        //     resolve: `gatsby-source-filesystem`,
        //     options: {
        //         name: `highrises`,
        //         path: `${__dirname}/src/data/`,
        //         ignore: [`**/\.*`],
        //     },
        // },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images/`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/assets/images/favicon.png',
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /icons/,
                },
            },
        },
        {
            resolve: `gatsby-plugin-env-variables`,
            options: {
                allowList: [
                    'REACT_APP_RINKEBY_CONTRACT_ADDRESS',
                    'REACT_APP_GOOGLE_MAPS_API_KEY',
                    'REACT_APP_GOOGLE_MAPS_MAP_ID',
                    'REACT_APP_GOOGLE_FORM_URL',
                ],
            },
        },
        {
            resolve: `gatsby-plugin-s3`,
            options: {
                bucketName:
                    process.env.TARGET === 'production'
                        ? 'highrises--production'
                        : 'highrises',
                protocol: 'https',
                hostname:
                    process.env.TARGET === 'production'
                        ? 'highrises.hythacg.com'
                        : 'dev.hythacg.com',
            },
        },
    ],
};
