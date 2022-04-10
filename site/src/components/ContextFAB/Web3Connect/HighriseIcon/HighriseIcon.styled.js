import styled from 'styled-components';

export const HighriseIconImage = styled.img`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    margin: auto;
`;

export const HighriseIcon = styled.div`
    position: relative;

    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.colors.white[0]};
    margin-left: 16px;

    overflow: hidden;
`;
