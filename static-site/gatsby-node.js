const { highrises } = require('./src/assets/data/highrises');
const kebabCase = require('just-kebab-case');

const featureCity = {
    CHICAGO:
        'The birthplace of the skyscraper, Chicago maintains its reputation as a proving ground of experimental and daring architecture nearly 140 years after its first steel-framed office tower rose above LaSalle Street. Look up while strolling the canyons of the Loop and the Magnificent Mile to experience a stationary parade of highrises spanning the full timeline of architectural styles and fashions.',
    'SAN FRANCISCO':
        "As the first great city of the West Coast, San Francisco boasts a spectacular collection of classic skyscrapers. Some highrises survived the devastating 1906 earthquake and fire, and many more arose in the Roaring Twenties, helping to develop a new stylistic vocabulary for tall buildings. The city's tradition of daring and innovative architecture continues to the present.",
    OAKLAND:
        "Although its bigger neighbor across the bay grabs the spotlight, Oakland has a small but unique selection of attractive antique highrises. Led by a modernizing mayor who was the city's first telephone operator before entering public service, Oakland built the country's first skyscraper city hall. Its subsequent seismic retrofitting ensures citizens will continue to enjoy their landmark.",
    PHILADELPHIA: `The tallest point in Philadelphia for most of the 20th century was the statue of William Penn crowning city hall, until the unwritten "gentlemen's agreement" was broken by One Liberty Place in 1986. That still left plenty of room for elegant highrises in a range of styles, including many fine Art Deco examples and one modernist pioneer years ahead of its time that would become a prototype for the new International Style.`,
    BUFFALO:
        "A major transportation hub since the opening of the Erie Canal, Buffalo demonstrated its technological prowess by harnessing the energy from nearby Niagara Falls to power its streetlights and trolleys. The city's former economic might is mirrored in its early highrises, including a city hall that is one of America's most attractive Art Deco skyscrapers.",
    SEATTLE:
        "While it is probably best known for the Space Needle, the Seattle skyline already boasted the tallest highrise on the West Coast for nearly five decades before its signature saucer-topped tower opened for the 1962 World's Fair. The city first blossomed as a gateway to Alaska, and its early skyscrapers evoke a spirit of optimism that no rainy weather can dampen. ",
    'LOS ANGELES':
        ' Sunny skies and scenic vistas that lured the motion picture industry to Hollywood a century ago also attracted throngs of new residents and businesses. Building height restrictions meant City Hall towered over everything else until the late 1960s, but architects found creative ways to bend the rules and build highrises that dominated their blocks downtown or on car-crazy Wilshire Boulevard.',
    ALBANY: "Inspired in part by the much larger metropolis at the other end of the Hudson River, New York's state capital has several excellent historic highrises clustered on its gently sloping city grid. Taken together, they make fitting accessories to the magnificent architectural ensemble housing the government of the Empire State.",
    NEWARK: "As if Manhattan were unable to contain the contagious spread of skyscrapers, several fine examples sprang up across the Hudson a century ago in New Jersey's biggest city. Most of the historic highrises of Newark stand on the edge of Military Park or within a few minutes' walk of the former parade ground.",

    HOUSTON:
        "The city named for Texas's founding father, Houston rapidly grew into a major port and the state's largest city once its bayou was dredged deep enough to admit ocean vessels. Many of its historic skyscrapers were the work of developer Jesse Jones, including the Gulf Tower, an Art Deco masterpiece.",
    DALLAS: "Its signature shimmering glass towers were built when Dallas was not just a city but America's most popular TV show. But the financial and trading center has a tradition of daring architectural statements going much further back, when oil riches began to shift an economy long dominated by cotton.",
    PITTSBURGH:
        'The city whose mills produced much of the steel used in highrises across America has a fine collection of landmark skyscrapers from its industrial heyday. Rivers and the steep ridge of Mt. Washington squeeze downtown Pittsburgh, crowding the buildings in a way that enhances their collective impact.',

    'NEW YORK':
        "In the late 19th century, Manhattan was already famous for its towering highrises. A frenzy of construction during the Roaring Twenties saw the Chrysler Building become the first skyscraper to surpass the Eiffel Tower as the world's tallest structure, until a Midtown neighbor snatched the honor away a year later.",
    'KANSAS CITY':
        'The city on the verge of the Great Plains started out as the trailhead and supply depot for travelers heading west. Its growth into a sizable metropolis, powerful financial center and famous jazz hot spot occurred just in time for Art Deco, and the city boasts an admirable collection of skyscrapers in the style.',
    TULSA: 'A little-noticed railroad stop in the former Indian Territory, Tulsa had fewer than 1,400 residents in 1900. A year later, drillers struck oil, and things changed in a hurry. By 1930 the thriving city was an important stop on the new U.S. Route 66, with attractive highrises including a spirited Art Deco church.',
    DETROIT:
        "As the hub of automobile manufacturing, one of America's fastest growing industries in the early 20th century, the Motor City grew like gangbusters. Skyscrapers crowded the downtown district, prompting the establishment of New Center three miles to the north, where lots were cheaper and closer to the sprawling car factories.",
};

const featureStyle = {
    'ART DECO': `Celebrating a new era of machines and technology, Art Deco cast aside the classical in favor of streamlined and geometric shapes, bold colors and bright metallic accents. Stepped-back massing narrows as it rises, admitting more sunlight to the sidewalks below. Stylized decorative motifs sometimes borrow from non-European cultures, such as Egyptian and Mayan.`,
    'BEAUX-ARTS': `The dominant style for skyscrapers at the turn of the 20th century, Beaux-Arts is named after the School of Fine Arts in Paris, where many influential American architects received their training. It was popularized by the famed White City of the 1893 Chicago World's Fair and the City Beautiful movement which followed.`,
    GOTHIC: `As advances in skyscraper technology enabled taller and taller buildings, some architects began to borrow from the designs of medieval cathedrals and town halls to add extra emphasis to height. Pointed arches at ground level or window shapes and ribbed or groined vaulted lobby ceilings are common decorative elements, as are the occasional gargoyles.`,
    // INTERNATIONAL: `The International Style, which takes its name from its European origins, represented a radical break with the past. Its architects preferred boxy shapes that emphasized a building's underlying structural framework and stripped away all ornamentation, letting material textures and strict lines take the place of decorative elements.`,
    NEOCLASSICAL: `More than any other style, Neoclassical skyscrapers stress the monumental. Prominent columns and colonnades feature in their typically monochromatic facades, adding to the sense of symmetry. While the exterior is not necessarily austere, ornamentation is more restrained than with other modes of historic revivalism.`,
    RENAISSANCE: `While the term encompasses a variety of revival styles with different characteristics, Renaissance style typically connotes more complex decorative elements than Neoclassical or Beaux-Arts, often used in combination with Art Deco. One frequent Renaissance feature is a stone round entrance arch carved with intricate figures.`,
    // 'SECOND EMPIRE': `This architectural fashion emerged in France under Emperor Napoleon III. Though his reign ended in 1870, before the emergence of skyscrapers, it found its way to a few highrises, most notably Philadelphia City Hall.`,
    // 'SPANISH BAROQUE': `This historic style is found most commonly in the South in places that were former possessions of Spain, including Florida, California, and Texas. It was the preferred architectural style for competing international exhibitions held in San Francisco and San Diego in 1915, which subsequently added to its popularity.`,
};

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
            const highriseIndex = getIndex(highrise) + 1;
            const accessIndex = getIndex(highrise);

            const irlProducts = [
                {
                    name: `Art Deco Book`,
                    productSrc: productMap['book']['productSrc'],
                    blurSrc: productMap['book']['blurSrc'],

                    product2Src: productMap['book-2']['productSrc'],
                    blur2Src: productMap['book-2']['blurSrc'],

                    productLink: `https://www.hythacg.com/highrises-store-2/highrisesbook`,
                },

                // Poster
                {
                    name: `${highrise.name} Print`,
                    productSrc: urlMap[accessIndex]?.['poster-highrises'],
                    blurSrc: urlMap[accessIndex]?.['blur-poster-highrises'],

                    productLink:
                        highriseIndex >= 144
                            ? `https://www.hythacg.com/highrises-store-2/highrise${highriseIndex}`
                            : `https://www.hythacg.com/prints/highrise${`${highriseIndex}`.padStart(
                                  2,
                                  '0'
                              )}`,
                },
            ];

            const metaverseProducts = [
                // Opensea NFT
                index < 171 && {
                    isNft: true,
                    name: `${highrise.name} NFT`,
                    productSrc: urlMap[accessIndex]?.['nft-highrises'],
                    blurSrc: urlMap[accessIndex]?.['blur-nft-highrises'],
                    productLink: `https://opensea.io/assets/ethereum/0x516d85f0c80d2c4809736aca3f3f95ce8545b5d2/${`${index}`}`,
                },

                // Northeast collage
                index < 50 && {
                    isNft: true,
                    name: `Northeast Collage NFT`,
                    productSrc: productMap['northeast-collage']['productSrc'],
                    blurSrc: productMap['northeast-collage']['blurSrc'],
                    productLink: `https://opensea.io/collection/highrisescollage`,
                },
            ].filter(Boolean);

            const totalProducts = [
                ...irlProducts,
                ...(products || []),
                ...metaverseProducts,
            ];

            return {
                ...highrise,
                index: index,

                accessIndex,

                blurFeatureSrc: urlMap[accessIndex]?.['blur-feature-highrises'],
                featureSrc: urlMap[accessIndex]?.['feature-highrises'],
                posterSrc: urlMap[accessIndex]?.['poster-highrises'],
                blurNftSrc: urlMap[accessIndex]?.['blur-nft-highrises'],
                nftSrc: urlMap[accessIndex]?.['nft-highrises'],

                products:
                    totalProducts.map((product) => ({
                        ...product,
                        ...productMap[product.productName],
                    })) || [],
            };
        })
        .sort((b, a) => getIndex(a) - getIndex(b));

    highrisesWithImages.forEach((highrise) => {
        actions.createPage({
            path: `/building/${kebabCase(highrise.name)}-${kebabCase(
                highrise.architect.split('.').join('')
            )}`,
            component: require.resolve(`./src/templates/Building.js`),
            context: {
                highrise,
                highrises: highrisesWithImages,
                thumbnail: `${fullyAccessibleURL}${highrise.nftSrc}`,
            },
        });
    });

    Object.entries({ ...featureCity, ...featureStyle }).forEach(
        ([name, description]) => {
            actions.createPage({
                path: `/${kebabCase(name)}`,
                component: require.resolve(`./src/templates/Description.js`),
                context: {
                    sortName: name,
                    description,
                    highrises: highrisesWithImages,
                    thumbnail: `${fullyAccessibleURL}${featureURL}`,
                },
            });
        }
    );

    actions.createPage({
        component: require.resolve(`./src/templates/Index.js`),
        path: '/',
        context: {
            highrises: highrisesWithImages,
            thumbnail: `${fullyAccessibleURL}${featureURL}`,
        },
    });
};
