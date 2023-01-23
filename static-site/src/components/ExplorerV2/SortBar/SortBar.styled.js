import styled, { css } from 'styled-components';

export const SortBarLink = styled.div`
    color: ${(props) => props.theme.colors.white[0]};
    cursor: pointer;
    margin: 0 8px 8px;
    opacity: ${(props) => (props.isActive ? 1 : 0.6)};
    user-select: none;

    ${(props) =>
        !props.isReset &&
        css`
            display: flex;
            justify-content: center;
            border-radius: 16px;
            padding: 0 8px;
            color: ${(props) => props.theme.colors.grey[0]};
            border: 1px solid ${(props) => props.theme.colors.grey[0]};

            ${(props) => props.theme.breakpoints.medium`
                padding: 0 32px;
            `}
        `}
`;

export const SortBarPill = styled.div`
    margin-right: 8px;
    margin-bottom: 8px;
    padding: 0 8px;
    border: 1px solid ${(props) => props.theme.colors.white[0]};
    display: flex;
    justify-content: center;
    border-radius: 16px;

    user-select: none;
    cursor: pointer;

    border-radius: 16px;

    transition: color 400ms, background-color 400ms, opacity 400ms;

    ${(props) =>
        props.activeSelectLevel === 'Active' &&
        css`
            background-color: ${props.theme.colors.white[0]};
            color: ${props.theme.colors.blue[1]};
        `}

    ${(props) =>
        props.activeSelectLevel === 'Inactive' &&
        css`
            opacity: 0.4;
        `}

    ${(props) => props.theme.breakpoints.medium`
        max-width: initial;
        padding: 0 16px;
    `}
`;

export const SortBarFilters = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.white[0]};
    white-space: nowrap;

    display: flex;
    flex-wrap: wrap;

    &::-webkit-scrollbar {
        display: none;
    }

    &:last-of-type {
        margin-top: 16px;
    }
`;

export const SortBar = styled.div`
    background: ${(props) => props.theme.colors.blue[1]};
    position: absolute;
    width: 100%;
    bottom: 0;
    z-index: 3;

    padding: 16px 32px;
`;
