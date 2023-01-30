const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');
const sharp = require('sharp');

const asyncReaddir = promisify(fs.readdir);

const feature = async () => {
    const rawImagesDir = join(__dirname, 'raw');
    const outputDir = join(__dirname, 'dist');

    const files = await asyncReaddir(rawImagesDir);

    files.forEach(async (file) => {
        const fileName = join(__dirname, 'raw', file);
        const [index] = fileName
            .replace(join(__dirname, 'raw/'), '')
            .split('_');
        const parsedIndex = parseInt(index);

        await sharp(fileName)
            .resize({
                width: 1222,
            })
            .toFile(join(outputDir, 'regular', `${parsedIndex - 1}.webp`));

        await sharp(fileName)
            .resize({
                width: 1222,
            })
            .blur(100)
            .toFile(join(outputDir, 'blur', `${parsedIndex - 1}.webp`));
    });
};

module.exports = {
    feature,
};
