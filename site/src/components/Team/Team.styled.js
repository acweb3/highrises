import styled from 'styled-components';

export const Profiles = styled.div`
    display: grid;
    grid-template-columns: 350px 350px;
    justify-items: center;

    margin-top: 40px;

    ${(props) => props.theme.breakpoints.large`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    `}
`;

export const BorderBottom = styled.div`
    border-bottom: 1px solid ${(props) => props.theme.colors.blue[0]};
    padding-top: 80px;
    width: 80%;

    position: relative;

    ${(props) => props.theme.breakpoints.large`
        width: 100%;
        max-width: 800px;
    `}

    &::before {
        content: ' ';
        display: block;
        background: ${(props) => props.theme.colors.blue[0]};
        width: 18px;
        height: 18px;
        border-radius: 50%;

        position: absolute;
        bottom: -9px;
        left: -9px;
    }

    &::after {
        content: ' ';
        display: block;
        background: ${(props) => props.theme.colors.blue[0]};
        width: 18px;
        height: 18px;
        border-radius: 50%;

        position: absolute;
        bottom: -9px;
        right: -9px;
    }
`;

export const Team = styled.div`
    padding: 72px 0 48px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    &::-webkit-scrollbar {
        display: none;
    }
`;
