import styled from 'styled-components';

export const Profiles = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;

    margin-top: 40px;

    ${(props) => props.theme.breakpoints.mobile`
        grid-template-columns: 350px 350px;
    `}

    ${(props) => props.theme.breakpoints.large`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    `}
`;

export const BorderBottom = styled.div`
    ${(props) => props.theme.utility.bubbleBorder}

    padding-top: 40px;
    width: 80%;

    ${(props) => props.theme.breakpoints.mobile`
        padding-top: 80px;
    `}

    ${(props) => props.theme.breakpoints.large`
        width: 100%;
        max-width: 800px;
    `}
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
