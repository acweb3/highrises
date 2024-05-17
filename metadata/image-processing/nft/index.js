const fs = require('fs');
const { join } = require('path');
const sharp = require('sharp');
const { promisify } = require('util');

const asyncReaddir = promisify(fs.readdir);

const nft = async () => {
    const rawImagesDir = join(__dirname, 'raw');
    const outputDir = join(__dirname, 'dist');

    const files = await asyncReaddir(rawImagesDir);

    files.forEach(async (file, i) => {
        const [tokenIDRaw] = file.split(' ');
        const tokenID = parseInt(tokenIDRaw) - 1;

        let fileName = tokenID;
        if ([194, 195].includes(tokenID)) {
            fileName = fileName - 23;
        }

        if (tokenID > 195) {
            fileName = fileName + 2;
        }

        await sharp(join(rawImagesDir, file))
            .resize({
                width: 1440,
            })
            .toFile(join(outputDir, 'chain', `${fileName}.jpg`));
    });
};

module.exports = {
    nft,
};
