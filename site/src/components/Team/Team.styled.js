import styled from 'styled-components';

export const Profiles = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin-top: 40px;
    width: 100%;
    overflow-x: scroll;
`;

export const BorderBottom = styled.div`
    border-bottom: 1px solid ${(props) => props.theme.colors.blue[0]};
    max-width: 800px;
    width: 100%;
    padding-top: 80px;

    position: relative;

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
