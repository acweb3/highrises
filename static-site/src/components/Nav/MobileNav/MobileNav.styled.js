import HamburgerIcon from 'assets/icons/hamburger.svg';
import styled from 'styled-components';

export const Hamburger = styled(HamburgerIcon)`
    stroke-width: 2;
    stroke: rgba(34, 34, 34, 0.5);
`;

export const MobileNavMenu = styled.div`
    width: 40px;
    height: 34px;

    padding: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MobileNavLogo = styled.img`
    width: 150px;
`;
export const MobileNavLogoContainer = styled.div`
    margin-left: -4px;
`;

export const InitOffset = styled.div`
    height: 140.05px;
    background: ${(props) => props.theme.colors.white[0]};

    ${(props) => props.theme.breakpoints.mobile`
        display: none;
    `}
`;

export const MobileNav = styled.div`
    background: ${(props) => props.theme.colors.white[0]};

    height: 83.65px;
    width: 100vw;
    padding: 8px 12px;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1001;

    display: fixed;
    align-items: center;
    justify-content: space-between;

    ${(props) => props.theme.breakpoints.mobile`
        display: none;
    `}
`;
