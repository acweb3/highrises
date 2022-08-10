require('dotenv').config();
const fs = require('fs');

const { Client } = require('@googlemaps/google-maps-services-js');
const { camelCase } = require('change-case');

const DELIMITER = '\t';
const DESCRIPTION_PLACEHOLDER =
    'Highrises are among the most iconic and defining elements of American Cities, and the technological advancement of the twentieth century fostered new heights.';
const IPFS_DIR = 'ipfs://QmVWSEMX7K3xpToGQNcn9x8Cr7GotswyC3Cta9hVnoGDK9';

const client = new Client({});

const getWords = (index) => {
    try {
        return fs.readFileSync(`words/dist/${index}.txt`, 'utf-8');
    } catch (e) {
        // console.log(e);
        return DESCRIPTION_PLACEHOLDER;
    }
};

const read = async () => {
    const rawCSV = fs.readFileSync('data.tsv', 'utf-8');
    const rawCSVLines = rawCSV.split('\r\n');
    const csvLines = rawCSVLines.map((line) => line.split(DELIMITER));
    // csvLines.forEach((line) => line.shift());
    const attrs = csvLines.shift();
    const headers = csvLines.shift();
    const attributesIndex = headers.indexOf('Attributes ');
    const attributesChunks = attrs
        .map((attr, i) => {
            if (attr) {
                return {
                    key: attr,
                    start: i,
                };
            }
        })
        .filter(Boolean);
    attributesChunks.forEach((chunk, i) => {
        if (i !== 0) {
            attributesChunks[i - 1].end = chunk.start;
        }
    });
    const processedLines = csvLines.map((line) => {
        const basicProperties = line
            .slice(0, attributesIndex)
            .map((property, i) => {
                if (property) {
                    return {
                        trait_type: headers[i].trim(),
                        value: property,
                    };
                }
            })
            .filter(Boolean);
        const individualProperties = attributesChunks.flatMap(
            ({ key, start, end }) => {
                const props = headers.slice(start, end);
                const lineAttrs = line.slice(start, end);
                return lineAttrs
                    .map((lineAttr, i) => {
                        if (lineAttr) {
                            return {
                                trait_type: key.trim(),
                                value: props[i],
                            };
                        }
                    })
                    .filter(Boolean);
            }
        );
        return [...basicProperties, ...individualProperties];
    });
    const accumulated = processedLines.map((processedLine) => {
        return processedLine.reduce((acc, line) => {
            if (acc[camelCase(line.trait_type)]) {
                return Array.isArray(acc[camelCase(line.trait_type)])
                    ? {
                          ...acc,
                          [camelCase(line.trait_type)]: [
                              ...acc[camelCase(line.trait_type)],
                              line,
                          ],
                      }
                    : {
                          ...acc,
                          [camelCase(line.trait_type)]: [
                              acc[camelCase(line.trait_type)],
                              line,
                          ],
                      };
            }
            return {
                ...acc,
                [camelCase(line.trait_type)]: line,
            };
        }, {});
    });
    const standardizedMetadata = await Promise.all(
        accumulated.map(
            async ({ building, highriseNo, ...processed }, index) => {
                const height = parseInt(
                    processed.height.value.replace(`'`, '')
                );
                const decade = parseInt(
                    processed.decade.value.replace(`'`, '')
                );
                const { data } = await client.geocode({
                    params: {
                        key: process.env.GOOGLE_MAPS_API_KEY,
                        address: processed.mapAddress.value,
                    },
                });

                const words = getWords(index);

                if (isNaN(height)) {
                    console.error(`height is nan for ${building}`);
                }
                if (isNaN(decade)) {
                    console.error(`decade is nan for ${building}`);
                }

                return {
                    description: words || DESCRIPTION_PLACEHOLDER,
                    highriseNumber: highriseNo.value,
                    image: `${IPFS_DIR}/${index}.jpg`,
                    name: building.value,
                    height,
                    heightBracket: processed.heightBracket?.value,
                    decade,

                    address: processed.address.value,
                    architect: processed.architect.value,
                    stories: processed.stories.value,
                    style: processed.style.value,
                    city: processed.city.value,
                    secondaryStyle: processed.secondaryStyle?.value,
                    opened: processed.opened.value,

                    ltlng: data.results[0].geometry.location,
                    attributes: Object.values(processed)
                        .flat()
                        .filter((attr) => attr.value !== 'x'),
                };
            }
        )
    );

    console.log({ standardizedMetadata });
    return standardizedMetadata;
};

module.exports = {
    read,
};
