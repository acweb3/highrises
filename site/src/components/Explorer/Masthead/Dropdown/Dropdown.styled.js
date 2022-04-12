import styled, { css } from 'styled-components';

export const DropdownName = styled.div`
    margin-right: 8px;
    padding: 0 8px;
    opacity: ${(props) => (props.isActive ? 1 : 0.6)};
    color: ${(props) => props.theme.colors.grey[0]};
    border: 1px solid ${(props) => props.theme.colors.grey[0]};
    display: flex;
    justify-content: center;
    border-radius: 16px;

    user-select: none;
    cursor: pointer;

    ${(props) =>
        props.isActive &&
        css`
            color: ${(props) => props.theme.colors.blue[2]};
            border: 1px solid ${(props) => props.theme.colors.blue[2]};
        `};

    ${(props) => props.theme.breakpoints.medium`
        padding: 0 32px;
    `}
`;

export const Dropdown = styled.div`
    max-width: 80px;
    border-radius: 16px;

    ${(props) => props.theme.breakpoints.medium`
        max-width: initial;
    `}
`;
