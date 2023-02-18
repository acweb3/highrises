import styled from 'styled-components';

export const DesktopNavHeader = styled.div`
    ${(props) => props.theme.breakpoints.small`
        background: #fff;
        display: block !important;

        & * {
            font-family: poppins;
        }
    `}
`;
