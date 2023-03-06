import styled from 'styled-components';

export const Header = styled.div`
    text-align: center;
    width: 100%;

    line-height: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-weight: 600;
    font-family: ${(props) => props.theme.typography.fontFamily.rc.basicFull};
    font-size: ${(props) => props.theme.typography.fontSize.h3};

    margin-bottom: 16px;

    padding: 0 16px;

    ${(props) => props.theme.breakpoints.small`
        margin-bottom: 8px;
        padding: 0;
    `}

    ${(props) => props.theme.breakpoints.XL`
        font-size: ${(props) => props.theme.typography.fontSize.h2};
    `}
`;
