import { css } from 'styled-components';

const bubbleBorder = css`
    position: relative;
    border-bottom: 1px solid ${(props) => props.theme.colors.blue[0]};

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

const membersGradient = css`
    background: rgb(255, 0, 232);
    background: linear-gradient(
        124deg,
        rgba(255, 0, 232, 1) 0%,
        rgba(98, 45, 178, 1) 23%,
        rgba(59, 93, 120, 1) 100%
    );
`;

export const utility = {
    bubbleBorder,
    membersGradient,
};
