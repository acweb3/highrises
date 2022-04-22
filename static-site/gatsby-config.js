require('dotenv').config();

const URL =
    process.env.TARGET === 'production'
        ? 'highrises.hythacg.com'
        : 'dev.hythacg.com';

module.exports = {
    siteMetadata: {
        title: `highrises`,
        siteUrl: `https://${URL}`,
    },
    plugins: [
        'gatsby-plugin-root-import',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-provide-react',
        {
            resolve: 'gatsby-plugin-sitemap',
            options: {
                query: `
                    {
                        allSitePage {
                            nodes {
                                pageContext
                                path
                            }
                        }
                    }
                `,
                resolveSiteUrl: () => `https://${URL}`,
                resolvePages: ({ allSitePage: { nodes: allPages } }) => {
                    return allPages;
                },
                serialize: ({ path }) => {
                    return {
                        url: `https://${URL}${path}`,
                    };
                },
            },
        },
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
                    'NODE_ENV',
                    'REACT_APP_RINKEBY_ALCHEMY_URL',
                    'REACT_APP_MAINNET_ALCHEMY_URL',
                    'REACT_APP_MAINNET_CONTRACT_ADDRESS',
                    'REACT_APP_RINKEBY_CONTRACT_ADDRESS',
                    'REACT_APP_GOOGLE_MAPS_API_KEY',
                    'REACT_APP_GOOGLE_MAPS_MAP_ID',
                    'REACT_APP_GOOGLE_FORM_URL',
                    // 'REACT_APP_RINKEBY_RESERVE_CONTRACT_ADDRESS',
                    // 'REACT_APP_MAINNET_RESERVE_CONTRACT_ADDRESS',
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
                hostname: URL,
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [
                    'G-TPGXGD018X', // Google Analytics / GA
                ],
                // This object is used for configuration specific to this plugin
                pluginConfig: {
                    head: true,
                },
            },
        },
    ],
};
