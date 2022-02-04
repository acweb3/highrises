const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');
const sharp = require('sharp');

const asyncReadfile = promisify(fs.readFile);

const birds = async () => {
    const birds = join(__dirname, 'raw', 'birds.png');
    await asyncReadfile(birds);

    await sharp(birds).toFile(join(__dirname, 'dist', 'birds.webp'));
};

const blueSky = async () => {
    const blueSky = join(__dirname, 'raw', 'blue-sky-background.jpg');

    await sharp(blueSky).toFile(
        join(__dirname, 'dist', 'blue-sky-background.webp')
    );
};

const cloud = async () => {
    const cloud = join(__dirname, 'raw', 'cloud.png');
    await asyncReadfile(cloud);

    await sharp(cloud)
        .resize({
            width: 500,
        })
        .toFile(join(__dirname, 'dist', 'cloud.webp'));
};

const drone = async () => {
    const drone = join(__dirname, 'raw', 'drone.png');
    await asyncReadfile(drone);

    await sharp(drone).toFile(join(__dirname, 'dist', 'drone.webp'));
};

const edison = async () => {
    const edison = join(__dirname, 'raw', 'Website About Page 3.png');
    await asyncReadfile(edison);

    await sharp(edison)
        .resize({
            height: 1400,
        })
        .toFile(join(__dirname, 'dist', 'edison-building.webp'));
};

const editing = async () => {
    const editing = join(__dirname, 'raw', 'editing-tutorial.jpg');

    await sharp(editing).toFile(
        join(__dirname, 'dist', 'editing-tutorial.webp')
    );
};

const inquirer = async () => {
    const inquirer = join(__dirname, 'raw', 'Website About Page 2.png');
    await asyncReadfile(inquirer);

    const width = 5464;
    const height = 8196;

    await sharp(inquirer)
        .extract({
            left: Math.floor(width / 3) + 400,
            top: 1500,
            width: Math.floor(width / 3) * 2 - 400,
            height: height - 5000,
        })
        .resize({
            width: 1826,
        })
        .toFile(join(__dirname, 'dist', 'inquirer.webp'));
};

const collage = async () => {
    const editing = join(__dirname, 'raw', 'collage.jpg');

    await sharp(editing)
        .resize({
            width: 700,
        })
        .toFile(join(__dirname, 'dist', 'collage.webp'));
};

const collageBackground = async () => {
    const editing = join(__dirname, 'raw', 'collage-background.jpg');

    await sharp(editing)
        .resize({
            width: 3200,
        })
        .toFile(join(__dirname, 'dist', 'collage-background.webp'));
};

const theDrake = async () => {
    const drake = join(__dirname, 'raw', 'Website About Page 1.png');
    await asyncReadfile(drake);

    await sharp(drake)
        .extract({ left: 0, top: 0, width: 2732, height: 8000 })
        .resize({
            width: 700,
        })
        .toFile(join(__dirname, 'dist', 'the-drake.webp'));
};

const site = async () => {
    // await birds();
    // await blueSky();
    // await cloud();
    // await drone();
    // await edison();
    // await editing();
    // await inquirer();
    // await theDrake();
    await collage();
    await collageBackground();
};

site();

module.exports = {
    site,
};
