const requiredEnvVar = (name, envVar) => {
    if (!envVar) {
        throw new Error(`Environment variable ${name} missing`);
    }

    return envVar;
};

export const config = {
    nodeEnv: requiredEnvVar('nodeEnv', process.env.NODE_ENV),
    release: new Date('4/21/2022'),
    rinkebyContractAddress: requiredEnvVar(
        'rinkebyContractAddress',
        process.env.REACT_APP_RINKEBY_CONTRACT_ADDRESS
    ),
    mainnetContractAddress: requiredEnvVar(
        'mainnetContractAddress',
        process.env.REACT_APP_MAINNET_CONTRACT_ADDRESS
    ),
    rinkebyCollageContractAddress: requiredEnvVar(
        'rinkebyCollageContractAddress',
        process.env.REACT_APP_RINKEBY_COLLAGE_CONTRACT_ADDRESS
    ),
    mainnetCollageContractAddress: requiredEnvVar(
        'mainnetCollageContractAddress',
        process.env.REACT_APP_MAINNET_COLLAGE_CONTRACT_ADDRESS
    ),
    rinkebyReserveContractAddress: requiredEnvVar(
        'rinkebyReserveContractAddress',
        process.env.REACT_APP_RINKEBY_RESERVE_CONTRACT_ADDRESS
    ),
    mainnetReserveContractAddress: requiredEnvVar(
        'mainnetReserveContractAddress',
        process.env.REACT_APP_MAINNET_RESERVE_CONTRACT_ADDRESS
    ),
    sepoliaMintContractAddress: requiredEnvVar(
        'sepoliaMintContractAddress',
        process.env.REACT_APP_SEPOLIA_MINT_CONTRACT_ADDRESS
    ),
    mainnetMintContractAddress: requiredEnvVar(
        'mainnetMintContractAddress',
        process.env.REACT_APP_MAINNET_MINT_CONTRACT_ADDRESS
    ),
    rinkebyAlchemyUrl: requiredEnvVar(
        'rinkebyAlchemyUrl',
        process.env.REACT_APP_RINKEBY_ALCHEMY_URL
    ),
    mainnetAlchemyUrl: requiredEnvVar(
        'mainnetAlchemyUrl',
        process.env.REACT_APP_MAINNET_ALCHEMY_URL
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
