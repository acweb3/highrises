import styled, { css } from 'styled-components';

export const StoryPurchase = styled.a`
    font-family: Anton, sans-serif;

    text-transform: uppercase;
    width: fit-content;
    font-size: 16px;

    border-radius: 3px;
    padding: 13px 26px;
    letter-spacing: 0.3em;

    border: none;
    cursor: pointer;
    color: ${(props) => props.theme.colors.white[0]};
    background-color: ${(props) => props.theme.colors.blue[2]};

    transition: opacity 0.1s linear;
    text-decoration: none;

    &:focus,
    &:hover {
        opacity: 0.8;
    }
`;

export const StoryCopy = styled.div`
    margin-bottom: 24px;
`;

export const Story = styled.div`
    flex: 1;
    margin-right: 64px;

    display: flex;
    flex-direction: column;
`;

export const TraitBottomEllipsis = styled.div`
    flex: 1;
    border-bottom: 1px dotted;
    height: 17px;
    margin: 0 8px;
`;

export const TraitWord = styled.div`
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
`;

export const Attributes = styled.div`
    display: flex;
`;
