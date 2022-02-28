import styled from 'styled-components';

export const EditingVideo = styled.img`
    margin-left: 64px;

    max-width: 680px;
`;

export const Copy = styled.div`
    margin-top: 24px;
`;

export const LearnMore = styled.a`
    border-radius: 300px;
    color: ${(props) => props.theme.colors.grey[0]};
    border: 1px solid ${(props) => props.theme.colors.grey[0]};
    background-color: transparent;

    padding: 21px 34px;

    font-size: 15px;
    font-weight: 400;
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: 0.2em;

    margin-top: 32px;
    display: block;
    width: fit-content;

    text-decoration: none;

    transition: 0.1s background-color linear, 0.1s color linear;

    &:hover {
        background: ${(props) => props.theme.colors.grey[0]};
        color: ${(props) => props.theme.colors.white[0]};
    }
`;

export const EditingDescription = styled.div`
    padding: 48px 48px 88px 40px;
`;

export const Editing = styled.div`
    display: flex;
`;
