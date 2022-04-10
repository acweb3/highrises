import styled, { css } from 'styled-components';

export const StoryExpand = styled.div`
    font-family: Anton, sans-serif;

    text-transform: uppercase;
    width: fit-content;
    font-size: 12px;

    border-radius: 3px;
    padding: 12px 12px;
    letter-spacing: 0.3em;

    border: none;
    cursor: pointer;
    color: ${(props) => props.theme.colors.white[0]};
    background-color: ${(props) => props.theme.colors.blue[2]};

    transition: opacity 0.1s linear;

    width: 100%;
    text-align: center;

    &:focus,
    &:hover {
        opacity: 0.8;
    }

    ${(props) => props.theme.breakpoints.mobile`
        width: 200px;
        padding: 8px 36px;
        white-space: nowrap;
        text-align: center;
    `}

    ${(props) => props.theme.breakpoints.medium`
        margin-bottom: 24px;
    `}
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
                height: 80px;
                width: 100%;

                left: 0;
                bottom: 0;

                background: linear-gradient(
                    180deg,
                    rgba(255, 255, 255, 0) 0%,
                    rgba(255, 255, 255, 0.8) 70%,
                    rgba(255, 255, 255, 1) 100%
                );
            }
        `}
`;

export const Story = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    margin-top: 48px;

    ${(props) => props.theme.breakpoints.mobile`
        margin-top: 0;
        margin-right: 64px;
    `}
`;
