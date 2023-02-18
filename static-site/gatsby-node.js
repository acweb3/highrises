const { highrises } = require('./src/assets/data/highrises');
const kebabCase = require('just-kebab-case');

const getIndex = (highrise) => {
    return parseInt(highrise.highriseNumber.replace('Highrise #', '')) - 1;
};

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

    const productMap = edges
        .filter(({ node }) => {
            return ['blur-products', 'products'].includes(
                node.relativeDirectory
            );
        })
        .reduce((acc, { node }) => {
            const renamed =
                node.relativeDirectory === 'products'
                    ? 'productSrc'
                    : 'blurSrc';

            return {
                ...acc,
                [node.name]: {
                    ...(acc[node.name] || {}),
                    [renamed]: node.publicURL,
                },
            };
        }, {});

    const highrisesWithImages = highrises
        .sort((a, b) => getIndex(a) - getIndex(b))
        .map(({ products, ...highrise }, index) => {
            const irlProducts = [
                // Poster
                // {
                //     // # TODO => Blur this
                //     productSrc: urlMap[index]?.['poster-highrises'],
                //     blurSrc: urlMap[index]?.['poster-highrises'],
                //     productLink: `https://www.opensea.io/assets/0x516d85f0c80d2c4809736aca3f3f95ce8545b5d2/${`${index}`}`,
                // },
            ];

            const metaverseProducts = [
                // Opensea NFT
                {
                    isNft: true,
                    productSrc: urlMap[index]?.['nft-highrises'],
                    blurSrc: urlMap[index]?.['blur-nft-highrises'],
                    productLink: `https://www.opensea.io/assets/ethereum/0x516d85f0c80d2c4809736aca3f3f95ce8545b5d2/${`${index}`}`,
                },

                // Northeast collage
                index < 50 && {
                    isNft: true,
                    productSrc: productMap['northeast-collage']['productSrc'],
                    blurSrc: productMap['northeast-collage']['blurSrc'],
                    productLink: `https://www.opensea.io/collection/highrisescollage`,
                },
            ].filter(Boolean);

            const totalProducts = [
                ...irlProducts,
                ...products,
                ...metaverseProducts,
            ];

            return {
                ...highrise,
                index: index,

                blurFeatureSrc: urlMap[index]?.['blur-feature-highrises'],
                featureSrc: urlMap[index]?.['feature-highrises'],
                posterSrc: urlMap[index]?.['poster-highrises'],
                blurNftSrc: urlMap[index]?.['blur-nft-highrises'],
                nftSrc: urlMap[index]?.['nft-highrises'],
                mapSrc: urlMap[index]?.['map-highrises'],

                products:
                    totalProducts.map((product) => ({
                        ...product,
                        ...productMap[product.productName],
                    })) || [],
            };
        })
        .sort((b, a) => getIndex(a) - getIndex(b));

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
