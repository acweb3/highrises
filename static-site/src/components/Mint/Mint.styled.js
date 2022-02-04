import { BaseButton } from 'components/ui/BaseButton';
import styled from 'styled-components';

export const Mint = styled(BaseButton)`
    ${(props) => props.theme.utility.membersGradient};

    &:hover {
        opacity: 1;
    }
`;
