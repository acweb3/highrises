import { How as UnstyledHow } from 'components/Intent/How';
import { Message as UnstyledMessage } from 'components/Intent/Message';
import styled from 'styled-components';

export const Message = {
    Mobile: styled(UnstyledMessage)`
        display: block;

        ${(props) => props.theme.breakpoints.small`
            display: none;
        `}
    `,
    Desktop: styled(UnstyledMessage)`
        display: none;

        ${(props) => props.theme.breakpoints.small`
            display: block;
        `}
    `,
};

export const How = {
    Mobile: styled(UnstyledHow)`
        display: flex;

        ${(props) => props.theme.breakpoints.small`
            display: none;
        `}
    `,
    Desktop: styled(UnstyledHow)`
        display: none;

        ${(props) => props.theme.breakpoints.small`
            display: flex;
        `}
    `,
};

export const TheDrakeImage = styled.img`
    top: 0;
    right: 0;
    height: 100%;
    z-index: 3;
    max-width: initial;

    ${(props) => props.theme.breakpoints.small`
        position: absolute;
        display: flex;
    `}
`;

export const TheDrake = styled.div`
    height: 1800px;
    overflow: hidden;

    position: absolute;
    top: 0;
    right: 0;

    ${(props) => props.theme.breakpoints.small`
        position: initial;
        height: auto;
    `}
`;

export const Intent = styled.div`
    position: relative;
    overflow: hidden;

    ${(props) => props.theme.breakpoints.small`
        overflow: initial;
    `}
`;
