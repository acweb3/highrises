const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');
const sharp = require('sharp');

const asyncReadfile = promisify(fs.readFile);

const blueSky = async () => {
    const blueSky = join(__dirname, 'raw', 'blue-sky-background.jpg');

    await sharp(blueSky)
        // .resize({
        //     width: 500,
        // })
        .jpeg({ quality: 80 })
        .toFile(join(__dirname, 'dist', 'blue-sky-background.jpg'));
};

const cloud = async () => {
    const cloud = join(__dirname, 'raw', 'cloud.png');
    await asyncReadfile(cloud);

    await sharp(cloud)
        .resize({
            width: 500,
        })
        .toFile(join(__dirname, 'dist', 'cloud.png'));
};

const edison = async () => {
    const edison = join(__dirname, 'raw', 'edison-building.png');
    await asyncReadfile(edison);

    await sharp(edison)
        .resize({
            height: 800,
        })
        .toFile(join(__dirname, 'dist', 'edison-building.png'));
};

const inquirer = async () => {
    const inquirer = join(__dirname, 'raw', 'inquirer.png');
    await asyncReadfile(inquirer);

    const width = 5464;
    const height = 8196;

    await sharp(inquirer)
        .extract({
            left: Math.floor(width / 3) + 400,
            top: 2000,
            width: Math.floor(width / 3) * 2 - 400,
            height: height - 5000,
        })
        .resize({
            width: 700,
        })
        .toFile(join(__dirname, 'dist', 'inquirer.png'));
};

const theDrake = async () => {
    const drake = join(__dirname, 'raw', 'the-drake.png');
    await asyncReadfile(drake);

    await sharp(drake)
        .extract({ left: 0, top: 0, width: 2732, height: 8196 })
        .resize({
            width: 700,
        })
        .toFile(join(__dirname, 'dist', 'the-drake.png'));
};

const site = async () => {
    await blueSky();
    await cloud();
    await edison();
    await inquirer();
    await theDrake();
};

module.exports = {
    site,
};
