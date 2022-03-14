const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');
const sharp = require('sharp');

const asyncReaddir = promisify(fs.readdir);

const poster = async () => {
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
                width: 480,
            })
            .toFile(join(outputDir, `${parsedIndex - 1}.jpg`));
    });
};

module.exports = {
    poster,
};
