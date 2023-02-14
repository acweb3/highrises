import styled from 'styled-components';

export const BuildingsExplorerHeader = styled.div`
    text-align: center;
    width: 100%;

    font-weight: 800;
    font-family: ${(props) => props.theme.typography.fontFamily.rc.basicFull};
    font-size: ${(props) => props.theme.typography.fontSize.h3};
`;

export const BuildingsExplorerOnboarding = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: #fff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    z-index: 3;

    opacity: ${(props) => (props.isActive ? 0.75 : 0)};
    transition: opacity 400ms;

    color: ${(props) => props.theme.colors.blue[0]};

    padding-bottom: 128px;
`;

export const BuildingsExplorerGrid = styled.div`
    display: grid;
    grid-template-columns: ${(props) => {
        if (props.count > 16) {
            return '1fr 1fr 1fr 1fr';
        }

        if (props.count > 8) {
            return '1fr 1fr 1fr';
        }

        return '1fr 1fr';
    }};
    height: min-content;
`;

export const BuildingsExplorer = styled.div`
    flex: 1;

    overflow-x: hidden;

    overflow-y: scroll;

    position: relative;
`;
