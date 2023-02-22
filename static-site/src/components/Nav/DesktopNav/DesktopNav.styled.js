import styled from 'styled-components';

export const DesktopNavHeader = styled.div`
    ${(props) => props.theme.breakpoints.medium`
        background: #fff;
        display: block !important;

        & * {
            font-family: poppins;
        }
    `}
`;
