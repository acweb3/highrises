import styled, { css } from 'styled-components';

export const SortBarLink = styled.div`
    color: ${(props) => props.theme.colors.white[0]};
    cursor: pointer;
    margin: 0 12px 8px;
    opacity: ${(props) => (props.isActive ? 1 : 0.6)};
    user-select: none;

    display: flex;
    align-items: center;

    ${(props) =>
        !props.isReset &&
        css`
            display: flex;
            justify-content: center;
            border-radius: 16px;
            padding: 0 8px;
            color: ${(props) => props.theme.colors.grey[0]};
            border: 1px solid ${(props) => props.theme.colors.grey[0]};
        `}
`;

export const SortBarPill = styled.div`
    margin-right: 8px;
    margin-bottom: 8px;
    border: 1px solid ${(props) => props.theme.colors.white[0]};
    display: flex;
    justify-content: center;
    border-radius: 16px;

    user-select: none;
    cursor: pointer;

    border-radius: 24px;

    padding: 8px 24px;

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

    ${(props) => props.theme.breakpoints.XL`
        padding: 16px 32px;

        margin-right: 16px;
        margin-bottom: 16px;

        border-radius: 32px;
    `}
`;

export const SortBarFilters = styled.div`
    font-size: 1rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.white[0]};
    white-space: nowrap;

    display: flex;
    flex-wrap: wrap;

    ${(props) =>
        props.isAnimated &&
        css`
            max-height: ${props.isActive ? 777 : 0}px;
            transition: max-height 400ms;
            overflow: hidden;
        `}

    &::-webkit-scrollbar {
        display: none;
    }

    ${(props) => props.theme.breakpoints.XL`
        font-size: 2rem;
    `}
`;

export const SortBar = styled.div`
    z-index: 4;
    padding: 16px 32px 8px;
    border-radius: 24px 24px 0 0;
    overflow: hidden;

    ${(props) => props.theme.breakpoints.XL`
        padding: 32px 48px 16px;
    `}
`;
