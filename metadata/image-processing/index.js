const { png } = require('./png');
const { site } = require('./site');

(() => {
    site();
    png();
})();
