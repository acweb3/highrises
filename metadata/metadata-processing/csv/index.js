const { read } = require('./read');
const { write } = require('./write');

(async () => {
    const traits = await read();
    console.log({ traits });
    write(traits);
})();
