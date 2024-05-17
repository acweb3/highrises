const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');
const sharp = require('sharp');

const asyncReaddir = promisify(fs.readdir);

const png = async () => {
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
    files.sort((a, b) => {
        const numberA = parseInt(a.split(' ')[0]);
        const numberB = parseInt(b.split(' ')[0]);
        return numberA - numberB;
    });

    files.forEach(async (file, i) => {
        const fileName = join(rawImagesDir, file);
        const [index] = file.split(' ');
        const parsedIndex = parseInt(index) - 1;

        await sharp(fileName)
            .resize({
                width: 400,
            })
            .toFile(join(outputDir, 'nft-highrises', `${parsedIndex}.webp`));

        await sharp(join(rawImagesDir, file))
            .resize({
                width: 400,
            })
            .blur(10)
            .toFile(
                join(outputDir, 'blur-nft-highrises', `${parsedIndex}.webp`)
            );
    });
};

module.exports = {
    png,
};
