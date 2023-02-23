import styled from 'styled-components';

export const ProfileSocials = styled.div`
    display: flex;
    margin-right: auto;
    margin-left: -4px;
`;

export const ProfileHeader = styled.div`
    color: ${(props) => props.theme.colors.blue[0]};
    font-weight: 800;
`;

export const ProfileTitle = styled.div`
    color: ${(props) => props.theme.colors.grey[0]};
    width: 100%;
`;

export const ProfileText = styled.div`
    color: ${(props) => props.theme.colors.blue[0]};

    padding: 16px 0;
`;

export const ProfileImageWrapper = styled.div`
    background: #e0e0e0;
    overflow: hidden;
    margin-right: auto;
    width: 88px;
    height: 88px;
    border-radius: 50%;
    flex: 0 0 88px;

    margin-right: 16px;
`;

export const Profile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    flex: 1;
`;

export const ProfileColumn = styled.div`
    display: flex;
    flex-direction: column;

    flex: 1;
`;

export const ProfileRow = styled.div`
    display: flex;
    flex-direction: row;
`;
