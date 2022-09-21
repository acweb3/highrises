import { BaseButton, ExternalButtonLink } from '../ui/BaseButton';
import collageBackground from 'assets/images/collage-background.webp';
import { Header } from 'components/ui/Header';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

const collageLinkCss = css`
    margin: 0 0 8px;

    text-align: center;
    border-radius: 8px;
    background: ${(props) => props.theme.colors.blue[0]};
    color: ${(props) => props.theme.colors.white[0]};
    padding: 8px 32px;
    font-family: ${(props) => props.theme.typography.fontFamily.karla};
    letter-spacing: initial;
    text-decoration: none;

    font-size: 16px;
    text-transform: initial;

    width: 100%;
`;

export const CollageSubtext = styled.div`
    font-size: 12px;
    font-weight: 100;
    color: ${(props) => props.theme.colors.blue[0]};
`;

export const CollageButton = styled(BaseButton)`
    ${collageLinkCss}

    & > svg {
        height: 24px;
        margin: 0 auto;
    }
`;

export const CollageLink = styled(Link)`
    ${collageLinkCss}
`;

export const CollageExternalLink = styled(ExternalButtonLink)`
    ${collageLinkCss}
`;

export const CollageButtons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 50%;
    margin: 32px auto;
`;

export const CollageHeader = styled(Header)`
    font-family: ${(props) => props.theme.typography.fontFamily.poppins};
    font-family: 'proxima nova';
    font-weight: 700;
    text-transform: initial;

    margin-bottom: 16px;

    text-align: center;
`;

export const CollageCard = styled.div`
    border-radius: 16px;
    background-color: ${(props) => props.theme.colors.white[0]};

    margin-left: 48px;

    padding: 24px 32px 16px;

    max-width: 500px;

    box-shadow: ${(props) => props.theme.shadows.medium};

    ${(props) => props.theme.breakpoints.medium`
        max-width: 600px;
    `}

    ${(props) => props.theme.breakpoints.extraLarge`
        max-width: 750px;
    `};
`;

export const CollageImage = styled.div`
    box-shadow: ${(props) => props.theme.shadows.high};

    max-width: 400px;

    ${(props) => props.theme.breakpoints.medium`
        max-width: 400px;
    `}

    ${(props) => props.theme.breakpoints.extraLarge`
        max-width: 500px;
    `};
`;

export const CollageInput = styled.input`
    margin-top: 16px;
    border-radius: 16px;
    padding: 8px 16px;

    border: 1px solid ${(props) => props.theme.colors.grey[0]};

    width: 100%;
`;

export const Collage = styled.div`
    position: relative;
    max-width: 100vw;
    overflow: hidden;

    min-height: calc(100vh - 250.5px);
    background-color: ${(props) => props.theme.colors.grey[1]};

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 64px 32px;

    ${(props) => props.theme.breakpoints.mobile`
        min-height: 800px;
    `};

    background: url(${collageBackground});
    background-size: 1000px auto;
`;
