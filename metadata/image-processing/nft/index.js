const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');

const asyncReaddir = promisify(fs.readdir);

const nft = async () => {
    const rawImagesDir = join(__dirname, 'raw');
    const outputDir = join(__dirname, 'dist');

    const files = await asyncReaddir(rawImagesDir);

    files.forEach(async (file, i) => {
        const [tokenIDRaw] = file.split(' ');
        const tokenID = parseInt(tokenIDRaw) - 1;
        fs.copyFileSync(
            join(rawImagesDir, file),
            join(outputDir, `${tokenID}.jpg`)
        );
    });
};

nft();

module.exports = {
    nft,
};