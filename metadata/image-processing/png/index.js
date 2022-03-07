const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');
const sharp = require('sharp');

const asyncReaddir = promisify(fs.readdir);

const png = async () => {
    const rawImagesDir = join(__dirname, 'raw');
    const outputDir = join(__dirname, 'dist');

    const files = await asyncReaddir(rawImagesDir);

    files.forEach(async (file, i) => {
        const fileName = join(__dirname, 'raw', file);

        await sharp(fileName)
            .resize({
                width: 300,
            })
            .toFile(join(outputDir, 'big', `${i}.png`));

        await sharp(fileName)
            .resize({
                width: 100,
            })
            .toFile(join(outputDir, 'small', `${i}.png`));
    });
};

module.exports = {
    png,
};
