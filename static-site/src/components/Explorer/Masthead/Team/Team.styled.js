import UnstyledInstagramLogo from 'assets/icons/logo--instagram.svg';
import UnstyledTwitterLogo from 'assets/icons/logo--twitter.svg';
import UnstyledWebIcon from 'assets/icons/wikis.svg';
import styled from 'styled-components';

export const InstagramLogo = styled(UnstyledInstagramLogo)`
    fill: ${(props) => props.theme.colors.blue[0]};
`;

export const TwitterLogo = styled(UnstyledTwitterLogo)`
    fill: ${(props) => props.theme.colors.blue[0]};
    width: 36px;
    height: 36px;

    & path {
        fill: ${(props) => props.theme.colors.blue[0]};
    }
`;

export const WebIcon = styled(UnstyledWebIcon)`
    fill: ${(props) => props.theme.colors.blue[0]};
    width: 22px;
    height: 22px;
    margin-right: -4px;

    & path {
        fill: ${(props) => props.theme.colors.blue[0]};
    }
`;

export const SocialIcon = styled.a`
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    opacity: 0.8;

    position: relative;

    &:hover {
        opacity: 1;
    }

    & rect {
        fill: none;
    }
`;

export const Profiles = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 16px 16px;

    & > div {
        margin-bottom: 16px;

        &:last-of-type {
            margin-bottom: 0;
        }
    }
`;

export const Team = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
