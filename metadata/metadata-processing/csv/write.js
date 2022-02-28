const fs = require('fs');

const write = (traits) => {
    traits.forEach((trait, index) => {
        fs.writeFileSync(`dist/chain/${index}`, JSON.stringify(trait, null, 4));
    });

    fs.writeFileSync(
        'dist/site/highrises.js',
        `export const highrises = ${JSON.stringify(traits, null, 4)}`
    );
};

module.exports = {
    write,
};
