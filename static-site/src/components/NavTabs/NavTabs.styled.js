import { BaseLink } from 'components/ui/BaseLink';
import styled from 'styled-components';

export const NavTabsLink = styled(BaseLink.GatsbyLink)`
    font-size: ${(props) => props.theme.typography.fontSize.h4};

    color: ${(props) => props.theme.colors.grey[0]};

    &.active {
        color: ${(props) => props.theme.colors.blue[0]};
    }

    &:first-of-type {
        margin-left: 0;
    }
`;

export const NavTabsContent = styled.div`
    display: flex;
    max-width: 1040px;
`;

export const NavTabs = styled.div`
    background-color: ${(props) => props.theme.colors.grey[1]};
    display: flex;
    border-top: 1px solid ${(props) => props.theme.colors.grey[0]};

    align-items: center;
    justify-content: center;

    padding: 16px 48px 16px;

    ${(props) => props.theme.breakpoints.small`
        display: none;
    `}
`;
