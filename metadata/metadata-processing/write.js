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
                heightBracket,

                // ...trait
                image,
                name,
                description,
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

                    if (
                        attribute.trait_type === 'AKA 2' ||
                        attribute.trait_type === 'AKA now'
                    ) {
                        return {
                            ...attribute,
                            trait_type: 'AKA',
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

            fs.writeFileSync(
                `dist/chain/${index}`,
                JSON.stringify(
                    {
                        image,
                        name: highriseNumber,
                        description: `**${name}**\n\n**Art by:** Chris Hytha\n\n**Story by:** Mark Houser\n\n${description.replaceAll(
                            '\n',
                            '\n\n'
                        )}`,
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
        `const highrises = ${JSON.stringify(traits, null, 4)}
        
        module.exports = {
            highrises,
        };        
        `
    );
};

module.exports = {
    write,
};
