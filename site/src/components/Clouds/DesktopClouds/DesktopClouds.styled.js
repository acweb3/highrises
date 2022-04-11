import { Clouds } from '../Clouds.styled';
import styled from 'styled-components';

export const DesktopClouds = styled(Clouds)`
    display: none;

    ${(props) => props.theme.breakpoints.mobile`
        display: block;
    `}
`;
