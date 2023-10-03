const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');
const sharp = require('sharp');

const asyncReaddir = promisify(fs.readdir);

const products = async () => {
    const rawImagesDir = join(__dirname, 'raw');
    const outputDir = join(
        __dirname,
        '..',
        '..',
        '..',
        'static-site',
        'src',
        'assets',
        'images'
    );

    const files = await asyncReaddir(rawImagesDir);

    files.forEach(async (file, i) => {
        const fileName = join(__dirname, 'raw', file);
        const [outFileName] = file.split('.');

        await sharp(fileName)
            .resize({
                width: 400,
            })
            .toFile(join(outputDir, 'products', `${outFileName}.webp`));

        await sharp(join(rawImagesDir, file))
            .resize({
                width: 400,
            })
            .blur(10)
            .toFile(join(outputDir, 'blur-products', `${outFileName}.webp`));
    });
};

module.exports = {
    products,
};
