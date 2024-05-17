const { products } = require('./products');
const { read } = require('./read');
const { write } = require('./write');
const fs = require('fs');
const { join } = require('path');

(async () => {
    // const traits = await read();
    // await write(traits);
    // await products();
    await fs.promises.copyFile(
        'dist/site/highrises.js',
        join('..', '..', 'static-site', 'src', 'assets', 'data', 'highrises.js')
    );
})();
