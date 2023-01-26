import styled from 'styled-components';

export const HeaderBasic = styled.div`
    z-index: 0;

    position: absolute;
    padding-left: 8px;

    font-size: 48px;

    color: ${(props) => props.theme.colors.grey[1]};
    font-family: ${(props) => props.theme.typography.fontFamily.rc.basicFull};
`;

export const HeaderFilled = styled.div`
    z-index: 1;

    font-size: 48px;

    font-family: ${(props) =>
        props.theme.typography.fontFamily.rc.guidelinesFull};
`;

export const Header = styled.div`
    width: 100%;

    flex: 0 0 72px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
`;
