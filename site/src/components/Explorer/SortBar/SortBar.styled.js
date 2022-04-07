import styled from 'styled-components';

export const SortLink = styled.div`
    color: ${(props) =>
        props.isReset
            ? props.theme.colors.blue[0]
            : props.theme.colors.grey[0]};
    cursor: pointer;
    margin: 0 8px;
    opacity: ${(props) => (props.isActive ? 1 : 0.6)};
    user-select: none;
`;

export const SortBar = styled.div`
    height: 40px;

    font-size: 16px;
    font-weight: 500;

    white-space: nowrap;

    display: flex;
    align-items: center;

    margin: 32px 32px 0;

    ${(props) => props.theme.breakpoints.mobile`
        line-height: 4rem;
        font-size: 1.175rem;
        margin: 16px 16px 0;
    `}
`;
