import styled from 'styled-components';

export const MastheadScrollMore = styled.div`
    position: absolute;
    left: 0;
    bottom: -100px;
    width: 100%;

    transition: opacity 400ms;
    opacity: ${(props) => (props.isShowing ? 1 : 0)};

    font-style: italic;

    white-space: nowrap;

    height: 180px;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    padding: 144px;

    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 1) 70%,
        rgba(255, 255, 255, 0.6) 80%,
        rgba(255, 255, 255, 0) 100%
    );
`;

export const Masthead = styled.div`
    position: relative;

    color: ${(props) => props.theme.colors.blue[0]};
    background: ${(props) => props.theme.colors.white[0]};
    border-bottom: 1px solid ${(props) => props.theme.colors.grey[0]};

    overflow-x: hidden;
    overflow-y: scroll;

    display: flex;
    flex-direction: column;

    padding: 16px 32px 32px;
`;
