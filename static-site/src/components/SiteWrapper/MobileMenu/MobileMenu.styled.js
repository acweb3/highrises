import styled from 'styled-components';

export const MobileMenu = styled.div`
    z-index: 3;

    ${(props) => props.theme.breakpoints.medium`
        display: none !important;
    `}
`;
