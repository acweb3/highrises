const { read } = require('./read');
const { write } = require('./write');

(async () => {
    const traits = await read();
    write(traits);
})();
