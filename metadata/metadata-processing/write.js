const fs = require('fs');

/**
 style
 city
 decade
 height
 attributes
 */

const BLOCKED_ATTRIBUTES = [
    'Long address',
    'Map address',
    'Address',
    'Architect',
    'Stories',
    'Opened',
    'State',
    'ZIP',
    'Height',
];

const write = (traits) => {
    traits.forEach(
        (
            {
                highriseNumber,
                height,
                decade,
                address,
                architect,
                stories,
                style,
                secondaryStyle,
                opened,
                attributes,
                ltlng,
                city,
                ...trait
            },
            index
        ) => {
            const filteredAttributes = attributes
                .filter((attribute) => {
                    return !BLOCKED_ATTRIBUTES.includes(attribute.trait_type);
                })
                .map((attribute) => {
                    if (attribute.trait_type === 'Secondary Style') {
                        return {
                            ...attribute,
                            trait_type: 'Style',
                        };
                    }

                    if (attribute.trait_type === 'Height Bracket') {
                        return {
                            ...attribute,
                            trait_type: 'Height',
                        };
                    }

                    return attribute;
                });

            if (index === 0) {
                console.log({
                    ...trait,
                    attributes: filteredAttributes,
                });
            }

            fs.writeFileSync(
                `dist/chain/${index}`,
                JSON.stringify(
                    {
                        ...trait,
                        name: `Highrise #${`${index + 1}`.padStart(2, '0')}`,
                        description: `**${
                            trait.name
                        }**\n\n${trait.description.replaceAll('\n', '\n\n')}`,
                        attributes: filteredAttributes,
                    },
                    null,
                    4
                )
            );
        }
    );

    fs.writeFileSync(
        'dist/site/highrises.js',
        `export const highrises = ${JSON.stringify(traits, null, 4)}`
    );
};

module.exports = {
    write,
};
