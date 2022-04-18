import styled from 'styled-components';

export const ProfileSocials = styled.div`
    display: flex;
    margin-top: 16px;

    margin-right: auto;

    ${(props) => props.theme.breakpoints.mobile`
        margin-right: initial;
    `}
`;

export const ProfileHeader = styled.div`
    color: ${(props) => props.theme.colors.blue[0]};
    font-weight: 800;
    margin: 16px 0 16px;

    width: 100%;

    ${(props) => props.theme.breakpoints.mobile`
        width: auto;
        font-size: 1.25rem;
    `}
`;

export const ProfileTitle = styled.div`
    color: ${(props) => props.theme.colors.blue[0]};
    font-weight: 600;
    margin-bottom: 16px;

    width: 100%;

    ${(props) => props.theme.breakpoints.mobile`
        width: auto;
        white-space: nowrap;
    `};
`;

export const ProfileText = styled.div`
    color: ${(props) => props.theme.colors.blue[0]};
    line-height: 1.2;

    ${(props) => props.theme.breakpoints.mobile`
        text-align: center;
    `};
`;

export const ProfileImage = styled.img``;

export const ProfileImageWrapper = styled.div`
    background: #e0e0e0;
    overflow: hidden;
    margin-right: auto;

    ${(props) => props.theme.breakpoints.mobile`
        width: 180px;
        height: 180px;
        border-radius: 50%;
        margin-right: initial;
    `}
`;

export const Profile = styled.div`
    flex: 0 0 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 160px;

    margin: 0 0 32px;

    @media (max-width: 360px) {
        width: 130px;
    }

    ${(props) => props.theme.breakpoints.mobile`
        width: 200px;
    `}

    ${(props) => props.theme.breakpoints.extraSmall`
        width: 260px;
    `}

    ${(props) => props.theme.breakpoints.medium`
        width: 400px;
    `}

    ${(props) => props.theme.breakpoints.large`
        margin: 0 45px;
        
        &:first-of-type {
            margin-left: 0;
        }

        &:last-of-type {
            margin-right: 0;
        }
    `}
`;
