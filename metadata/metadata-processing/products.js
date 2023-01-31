const fs = require('fs');
const { highrises } = require('./dist/site/highrises');

(async () => {
    const products = fs.readFileSync('./products.tsv', 'utf-8');

    const [header, ...lines] = products.split('\n');
    const [_productName, _productLink, ...headerValues] = header.split('\t');

    lines.forEach((line, index) => {
        const [productName, productLink, ...data] = line.split('\t');

        highrises.forEach((highrise) => {
            data.forEach((datapoint) => {
                if (datapoint === 'x') {
                    highrise.products = highrise.products
                        ? [...highrise.products, productName]
                        : [productName];
                }
            });
        });
    });

    console.log(highrises[0]);
})();
