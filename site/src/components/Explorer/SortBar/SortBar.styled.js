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

    line-height: 4rem;
    font-size: 1.175rem;
    font-weight: 500;

    white-space: nowrap;

    display: flex;
    align-items: center;

    margin: 16px 16px 0;
`;
