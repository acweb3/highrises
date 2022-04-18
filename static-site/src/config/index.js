const requiredEnvVar = (name, envVar) => {
    console.log(envVar);
    if (!envVar) {
        throw new Error(`Environment variable ${name} missing`);
    }

    return envVar;
};

export const config = {
    release: new Date('4/20/2022'),
    rinkebyContractAddress: requiredEnvVar(
        'rinkebyContractAddress',
        process.env.REACT_APP_RINKEBY_CONTRACT_ADDRESS
    ),
    mainnetContractAddress: requiredEnvVar(
        'mainnetContractAddress',
        '0xF1bFe8CAbf09e060e33125534F8404318707aE87'
    ),
    googleMapsAPIKey: requiredEnvVar(
        'googleMapsAPIKey',
        process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    ),
    googleMapsMapID: requiredEnvVar(
        'googleMapsMapID',
        process.env.REACT_APP_GOOGLE_MAPS_MAP_ID
    ),
    googleFormUrl: requiredEnvVar(
        'googleFormUrl',
        process.env.REACT_APP_GOOGLE_FORM_URL
    ),
};
