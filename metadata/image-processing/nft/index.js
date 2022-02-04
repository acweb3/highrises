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

        fs.copyFileSync(
            join(rawImagesDir, file),
            join(outputDir, 'chain', `${tokenID}.jpg`)
        );

        await sharp(join(rawImagesDir, file))
            .resize({
                width: 1440,
                height: 2100,
            })
            .toFile(join(outputDir, 'detail', `${tokenID}.webp`));

        await sharp(join(rawImagesDir, file))
            .resize({
                width: 480,
                height: 700,
            })
            .toFile(join(outputDir, 'site', `${tokenID}.webp`));

        await sharp(join(rawImagesDir, file))
            .resize({
                width: 80,
            })
            .toFile(join(outputDir, 'icon', `${tokenID}.webp`));

        await sharp(join(rawImagesDir, file))
            .resize({
                width: 120,
            })
            .toFile(join(outputDir, 'map', `${tokenID}.webp`));
    });
};

module.exports = {
    nft,
};
