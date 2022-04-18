const requiredEnvVar = (name, envVar) => {
    if (!envVar) {
        throw new Error(`Environment variable ${name} missing`);
    }

    return envVar;
};

export const config = {
    release: new Date('4/20/2022'),
    rinkebyContractAddress: requiredEnvVar(
        'contractAddress',
        process.env.REACT_APP_RINKEBY_CONTRACT_ADDRESS
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