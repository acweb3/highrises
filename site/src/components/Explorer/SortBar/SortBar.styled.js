import styled, { css } from 'styled-components';

export const DropdownFilter = styled.div`
    white-space: nowrap;
    margin-right: 16px;
    padding: 8px 16px;
    font-size: 12px;
    color: ${(props) => props.theme.colors.white[0]};
    background-color: ${(props) =>
        props.isActive
            ? props.theme.colors.blue[2]
            : props.theme.colors.grey[0]};
    border-radius: 16px;
    cursor: pointer;
    user-select: none;
`;

export const DropdownFilters = styled.div`
    display: flex;
    width: 100vw;
    overflow-x: scroll;
    padding: 16px;
    margin: 8px 0 0;
    color: ${(props) => props.theme.colors.blue[0]};
    background-color: ${(props) => props.theme.colors.grey[1]};

    box-shadow: ${(props) => props.theme.shadows.inset.medium};

    &::-webkit-scrollbar {
        display: none;
    }

    ${(props) => props.theme.breakpoints.medium`
        width: calc(100% - 32px);
    `}
`;

export const SortLink = styled.div`
    color: ${(props) =>
        props.isReset
            ? props.theme.colors.blue[0]
            : props.theme.colors.grey[0]};
    cursor: pointer;
    margin: 0 8px;
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

export const SortBar = styled.div`
    height: 40px;

    font-size: 16px;
    font-weight: 500;

    white-space: nowrap;

    display: flex;
    align-items: center;

    padding: 32px 32px 16px;

    overflow-x: auto;
    overflow-y: hidden;

    ${(props) => props.theme.breakpoints.small`
        height: auto;
        padding: 24px 32px 0;
        margin-bottom: 24px;
    `}

    ${(props) => props.theme.breakpoints.medium`
        line-height: 4rem;
        font-size: 1.175rem;
        padding: 32px 16px 0;
    `}

    &::-webkit-scrollbar {
        display: none;
    }
`;
