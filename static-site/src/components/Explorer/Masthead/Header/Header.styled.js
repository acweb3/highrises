import styled from 'styled-components';

export const HeaderSubtitle = styled.div`
    font-size: ${(props) => props.theme.typography.fontSize.prose};
    margin-top: 0.75rem;
`;

export const HeaderBasic = styled.div`
    z-index: 0;

    position: absolute;
    padding-left: 3px;

    color: ${(props) => props.theme.colors.grey[1]};
    font-family: ${(props) => props.theme.typography.fontFamily.rc.basicFull};
`;

export const HeaderFilled = styled.div`
    z-index: 1;

    font-size: ${(props) => props.theme.typography.fontSize.h2};
    font-family: ${(props) =>
        props.theme.typography.fontFamily.rc.guidelinesFull};
`;

export const HeaderDouble = styled.div`
    position: relative;
    display: flex;
    font-size: ${(props) => props.theme.typography.fontSize.h2};
`;

export const Header = styled.div`
    width: 100%;
    flex: 0 0 88px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 16px 0 32px;
`;
