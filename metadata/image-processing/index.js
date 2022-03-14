const { poster } = require('./poster');
const { png } = require('./png');
const { site } = require('./site');

(() => {
    poster();
    site();
    png();
})();
