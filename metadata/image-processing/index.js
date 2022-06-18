const { nft } = require('./nft');
const { poster } = require('./poster');
const { png } = require('./png');
const { site } = require('./site');

(() => {
    nft();
    // poster();
    // site();
    png();
})();
