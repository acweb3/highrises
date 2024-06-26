import styled from 'styled-components';

export const MapExplorerHeader = styled.div`
    text-align: center;
    width: 100%;

    font-weight: 600;
    font-family: ${(props) => props.theme.typography.fontFamily.rc.basicFull};
    font-size: ${(props) => props.theme.typography.fontSize.h3};

    ${(props) => props.theme.breakpoints.XL`
        font-size: ${(props) => props.theme.typography.fontSize.h2};
    `}
`;

export const MapExplorerOnboarding = styled.div`
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

    opacity: ${(props) => (props.isActive ? 0.75 : 0)};
    transition: opacity 400ms;

    color: ${(props) => props.theme.colors.blue[0]};
`;

export const MapExplorerSticky = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;

    height: 34vh;
    max-height: 34vh;

    position: sticky;
    top: 0;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const MapExplorer = styled.div`
    flex: 1;
    padding: 16px;
    border-radius: 4px;

    ${(props) => props.theme.breakpoints.XL`
        padding: 32px;
    `}
`;
