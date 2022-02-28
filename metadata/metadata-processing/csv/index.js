const { read } = require('./read');
const { write } = require('./write');

(() => {
    const traits = read();
    write(traits);
})();
