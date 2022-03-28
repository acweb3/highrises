import styled from 'styled-components';

export const Web3 = styled.div`
    border-radius: 300px;
    color: ${(props) => props.theme.colors.white[0]};
    border: 1px solid ${(props) => props.theme.colors.white[0]};
    background-color: transparent;

    padding: 8px 16px;

    font-size: 15px;
    font-weight: 400;
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: 0.2em;

    margin-left: 16px;
    display: block;
    width: fit-content;

    text-decoration: none;

    transition: 0.1s background-color linear, 0.1s color linear;

    cursor: pointer;

    opacity: 0.8;

    &:hover {
        opacity: 1;
    }

    &:hover {
        background: ${(props) => props.theme.colors.blue[1]};
    }
`;
