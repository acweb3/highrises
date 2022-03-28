import styled, { css } from 'styled-components';

export const StoryExpand = styled.div`
    font-family: Anton, sans-serif;

    text-transform: uppercase;
    width: fit-content;
    font-size: 12px;

    border-radius: 3px;
    padding: 8px 12px;
    letter-spacing: 0.3em;

    border: none;
    cursor: pointer;
    color: ${(props) => props.theme.colors.white[0]};
    background-color: ${(props) => props.theme.colors.blue[2]};

    transition: opacity 0.1s linear;

    margin-bottom: 24px;

    &:focus,
    &:hover {
        opacity: 0.8;
    }
`;

export const StoryCopy = styled.div`
    position: relative;

    margin-bottom: 24px;
    overflow: hidden;

    word-break: break-word;

    ${(props) =>
        !props.isExpanded &&
        css`
            max-height: 200px;

            &::after {
                content: ' ';
                position: absolute;
                height: 48px;
                width: 100%;

                left: 0;
                bottom: 0;

                background: linear-gradient(
                    180deg,
                    rgba(255, 255, 255, 0) 0%,
                    rgba(255, 255, 255, 0.8) 40%,
                    rgba(255, 255, 255, 1) 100%
                );
            }
        `}
`;

export const Story = styled.div`
    flex: 1;
    margin-right: 64px;

    display: flex;
    flex-direction: column;
`;
