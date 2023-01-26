import styled from 'styled-components';

export const DesktopNavHeader = styled.div`
    ${(props) => props.theme.breakpoints.mobile`
        background: #fff;
        display: block !important;

        & * {
            font-family: poppins;
        }
    `}
`;
