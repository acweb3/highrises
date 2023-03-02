import kebabCase from 'just-kebab-case';

export const getIndex = (highrise) => {
    return parseInt(highrise.highriseNumber.replace('Highrise #', '')) - 1;
};

export const getBuildingURL = (highrise) => {
    return `/building/${kebabCase(highrise.name)}-${kebabCase(
        highrise.architect.split('.').join('')
    )}`;
};

export const capitalize = (str) => {
    return str
        .split(' ')
        .map((word) => {
            const [first] = word;
            return `${first}${word.slice(1).toLowerCase()}`;
        })
        .join(' ');
};
