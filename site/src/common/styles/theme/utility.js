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

export const utility = {
    bubbleBorder,
};
