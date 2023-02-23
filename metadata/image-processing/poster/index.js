const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');
const sharp = require('sharp');

const asyncReaddir = promisify(fs.readdir);

const poster = async () => {
    const rawImagesDir = join(__dirname, 'product');
    const outputDir = join(__dirname, 'dist');

    const files = await asyncReaddir(rawImagesDir);

    // files.forEach(async (file) => {
    //     try {
    //         const fileName = join(__dirname, 'raw', file);
    //         const [index] = fileName
    //             .replace(join(__dirname, 'raw/'), '')
    //             .split('_');
    //         const parsedIndex = parseInt(index);

    //         await sharp(fileName)
    //             .resize({
    //                 width: 400,
    //             })
    //             .toFile(join(outputDir, 'regular', `${parsedIndex - 1}.webp`));

    //         await sharp(join(rawImagesDir, file))
    //             .resize({
    //                 width: 400,
    //             })
    //             .blur(10)
    //             .toFile(join(outputDir, 'blur', `${parsedIndex - 1}.webp`));
    //     } catch (e) {
    //         console.error(e);
    //         console.log(file);
    //     }
    // });

    files.forEach(async (file, index) => {
        try {
            const fileName = join(rawImagesDir, file);

            await sharp(fileName)
                .resize({
                    width: 400,
                })
                .toFile(join(outputDir, 'regular', `${index}.webp`));

            await sharp(join(rawImagesDir, file))
                .resize({
                    width: 400,
                })
                .blur(10)
                .toFile(join(outputDir, 'blur', `${index}.webp`));
        } catch (e) {
            console.error(e);
            console.log(file);
        }
    });
};

module.exports = {
    poster,
};
