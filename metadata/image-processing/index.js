const { feature } = require('./feature');
const { nft } = require('./nft');
const { poster } = require('./poster');
const { png } = require('./png');
const { products } = require('./products');
const { site } = require('./site');

(async () => {
    nft();
    poster();
    png();
    feature();
    products();
})();
