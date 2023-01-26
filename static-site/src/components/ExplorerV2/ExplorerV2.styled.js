import styled from 'styled-components';

export const ExplorerSideBar = styled.div`
    display: flex;
    flex-direction: column;

    height: 100vh;
    max-height: 100vh;
`;

export const ExplorerBuildings = styled.div`
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;

    display: flex;
`;

export const ExplorerSection = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

export const ExplorerV2 = styled.div`
    display: flex;

    position: relative;
    border-top: 1px solid ${(props) => props.theme.colors.grey[0]};
    border-bottom: 1px solid ${(props) => props.theme.colors.grey[0]};

    height: 100vh;
    width: 100vw;
    background: ${(props) => props.theme.colors.white[0]};

    & > ${ExplorerSection} {
        &:nth-child(1) {
            width: 27vw;
            min-width: 27vw;
        }

        &:nth-child(2) {
            width: 38vw;
            min-width: 38vw;
            background: ${(props) => props.theme.colors.grey[1]};
        }

        &:nth-child(3) {
            width: 35vw;
            min-width: 35vw;
            position: relative;
            border-left: 1px solid ${(props) => props.theme.colors.grey[0]};
        }
    }
`;
