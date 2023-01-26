const { highrises } = require('./src/assets/data/highrises');
const kebabCase = require('just-kebab-case');

exports.createPages = async function ({ actions, graphql }) {
    const {
        data: {
            allFile: { edges },
        },
    } = await graphql(`
        query File {
            allFile {
                edges {
                    node {
                        name
                        base
                        publicURL
                        relativeDirectory
                    }
                }
            }
        }
    `);

    const fullyAccessibleURL =
        process.env.TARGET === 'production'
            ? 'https://highrises.hythacg.com'
            : 'https://dev.hythacg.com';

    const {
        node: { publicURL: featureURL },
    } = edges.find((edge) => edge.node.name === 'feature');

    const urlMap = edges.reduce((acc, { node }) => {
        return {
            ...acc,
            [node.name]: acc[node.name]
                ? {
                      ...acc[node.name],
                      [node.relativeDirectory]: node.publicURL,
                  }
                : { [node.relativeDirectory]: node.publicURL },
        };
    }, {});

    const highrisesWithImages = highrises
        .map((highrise, index) => ({
            ...highrise,
            iconSrc: urlMap[index]?.['icon-highrises'],
            imageSrc: urlMap[index]?.['slide-highrises'],
            posterSrc: urlMap[index]?.['poster-highrises'],
            nftSrc: urlMap[index]?.['nft-highrises'],
            mapSrc: urlMap[index]?.['map-highrises'],
            detailSrc: urlMap[index]?.['detail-highrises'],
            index: index,
        }))
        .sort((a, b) => a.highriseNumber.localeCompare(b.highriseNumber));

    // # TODO => Create a bunch of Index pages with this metadata
    // highrisesWithImages.forEach((highrise) => {
    //     actions.createPage({
    //         path: `/building/${kebabCase(highrise.name)}-${kebabCase(
    //             highrise.architect
    //         )}`,
    //         component: require.resolve(`./src/templates/Building.js`),
    //         context: {
    //             highrise,
    //             highrises: highrisesWithImages,
    //             thumbnail: `${fullyAccessibleURL}${highrise.nftSrc}`,
    //         },
    //     });
    // });

    actions.createPage({
        component: require.resolve(`./src/templates/Index.js`),
        path: '/',
        context: {
            highrises: highrisesWithImages,
            thumbnail: `${fullyAccessibleURL}${featureURL}`,
        },
    });
};
