export const pullImage = async (type, index, ext = 'png') =>
    (await import(`assets/images/${type}-highrises/${index}.${ext}`)).default;
