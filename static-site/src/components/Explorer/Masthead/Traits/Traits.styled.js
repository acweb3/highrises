import styled, { css } from 'styled-components';

export const TraitBottomEllipsis = styled.div`
    flex: 1;
    border-bottom: 1px dotted;
    height: 17px;
    margin: 0 8px;
`;

export const TraitWord = styled.div`
    & > a {
        color: ${(props) => props.theme.colors.blue[0]};
    }

    ${(props) =>
        props.isValue &&
        css`
            font-weight: 700;
        `}
`;

export const Trait = styled.div`
    display: flex;
`;

export const Traits = styled.div`
    flex: 1;
    min-width: 100%;

    margin-bottom: 32px;

    ${(props) => props.theme.breakpoints.mobile`
        min-width: auto;
        margin-bottom: 0;
    `}
`;
