import ArrowRight from 'assets/icons/arrow--right.svg';
import styled, { css } from 'styled-components';

export const DropdownFilterScrollRight = styled(ArrowRight)`
    fill: #fff;
`;

export const DropdownFiltersWrapper = styled.div`
    width: min-content;
    max-width: 100%;
    margin-left: auto;
    z-index: 2;
`;

export const DropdownFilter = styled.div`
    white-space: nowrap;
    margin-right: 16px;
    padding: 8px 16px;
    font-size: 12px;

    border-radius: 16px;
    cursor: pointer;
    user-select: none;

    color: ${(props) => props.theme.colors.grey[0]};
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.colors.grey[0]};
    opacity: 0.6;

    ${(props) =>
        props.isActive &&
        css`
            opacity: 0.9;
            color: ${(props) => props.theme.colors.white[0]};
            background-color: ${props.theme.colors.blue[2]};
            border: 1px solid ${props.theme.colors.blue[2]};
        `}
`;

export const DropdownFilters = styled.div`
    display: flex;
    width: 100%;
    overflow-x: scroll;
    padding: 0px 16px 16px 48px;
    color: ${(props) => props.theme.colors.blue[0]};

    min-height: 52px;

    ${(props) => props.theme.breakpoints.small`
        min-height: initial;
    `}

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const SortLink = styled.div`
    color: ${(props) =>
        props.isReset
            ? props.theme.colors.blue[0]
            : props.theme.colors.grey[0]};
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

export const SortBar = styled.div`
    font-size: 16px;
    font-weight: 500;
    background: ${(props) => props.theme.colors.grey[1]};

    white-space: nowrap;

    display: flex;
    align-items: center;
    flex-wrap: wrap;

    padding: 32px 32px 16px;

    position: absolute;
    width: 100%;
    bottom: 0;

    overflow: visible;

    justify-content: center;

    z-index: 2;

    ${(props) => props.theme.breakpoints.small`
        justify-content: initial;
        padding: 16px 32px 0;
    `}

    ${(props) => props.theme.breakpoints.medium`
        line-height: 2rem;
    `}

    &::-webkit-scrollbar {
        display: none;
    }
`;
