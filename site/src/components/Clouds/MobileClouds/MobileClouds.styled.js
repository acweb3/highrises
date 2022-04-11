import { Clouds } from 'components/Clouds/Clouds.styled';
import styled from 'styled-components';

export const MobileClouds = styled(Clouds)`
    display: block;

    ${(props) => props.theme.breakpoints.mobile`
        display: none;
    `}
`;
