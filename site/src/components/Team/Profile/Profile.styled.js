import styled from 'styled-components';

export const ProfileHeader = styled.div`
    color: ${(props) => props.theme.colors.blue[0]};
    font-size: 1.25rem;
    font-weight: 800;
    margin: 16px 0 8px;
`;

export const ProfileText = styled.div`
    color: ${(props) => props.theme.colors.blue[0]};
    white-space: nowrap;
    font-weight: 600;
    font-size: 1.1rem;
    line-height: 1.2;
`;

export const ProfileImage = styled.div`
    width: 180px;
    height: 180px;
    background: #e0e0e0;
    border-radius: 50%;
`;

export const Profile = styled.div`
    flex: 0 0 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 45px;

    &:first-of-type {
        margin-left: 0;
    }

    &:last-of-type {
        margin-right: 0;
    }
`;