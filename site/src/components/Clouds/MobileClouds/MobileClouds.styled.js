import { Clouds } from 'components/Clouds/Clouds.styled';
import styled from 'styled-components';

export const MobileClouds = styled(Clouds)`
    opacity: ${(props) => (props.isLoaded ? 1 : 0)};
    transition: opacity 1s;
`;
