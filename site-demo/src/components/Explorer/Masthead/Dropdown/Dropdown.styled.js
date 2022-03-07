import styled from 'styled-components';

export const Select = styled.select`
    color: ${(props) => props.theme.colors.grey[0]};
    outline: none;
    padding-left: 8px;
    margin-right: 16px;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';

    opacity: ${(props) => (props.isActive ? 1 : 0.6)};
`;

export const Dropdown = styled.div`
    max-width: 80px;
`;
