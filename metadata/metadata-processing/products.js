const fs = require('fs');
const kebabCase = require('just-kebab-case');
const { highrises } = require('./dist/site/highrises');

const getIndex = (highrise) => {
    return parseInt(highrise.highriseNumber.replace('Highrise #', '')) - 1;
};

const products = async () => {
    const products = fs.readFileSync('./data.products.tsv', 'utf-8');

    const [header, ...lines] = products.split('\n');
    const [_productName, _productLink, ...headerValues] = header.split('\t');

    lines.forEach((line) => {
        const [productName, productLink, ...data] = line.split('\t');

        highrises.forEach((highrise) => {
            const highriseIndex = getIndex(highrise);

            data.forEach((datapoint, dataIndex) => {
                if (datapoint === 'x' && highriseIndex === dataIndex) {
                    highrise.products = highrise.products?.length
                        ? [
                              ...highrise.products,
                              {
                                  name: productName,
                                  productName: kebabCase(productName),
                                  productLink,
                              },
                          ]
                        : [
                              {
                                  name: productName,
                                  productName: kebabCase(productName),
                                  productLink,
                              },
                          ];
                }
            });
        });
    });

    fs.writeFileSync(
        'dist/site/highrises.js',
        `const highrises = ${JSON.stringify(highrises, null, 4)}

        module.exports = {
            highrises,
        };
        `
    );
};

module.exports = {
    products,
};
