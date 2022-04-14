import { BaseButton } from 'components/ui/BaseButton';
import styled, { css } from 'styled-components';

export const StoryExpand = styled(BaseButton)`
    width: 100%;

    ${(props) => props.theme.breakpoints.mobile`
        max-width: 200px;
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
            cursor: pointer;
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
`;
