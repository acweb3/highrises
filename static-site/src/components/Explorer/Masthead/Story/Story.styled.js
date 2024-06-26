import styled from 'styled-components';

export const StoryCopy = styled.div`
    line-height: 1.5rem;
    position: relative;
    margin-bottom: 16px;
    overflow: hidden;
    word-break: break-word;
    text-align: left;
    text-indent: 1rem;

    ${(props) => props.theme.breakpoints.XL`
        font-size: 2rem;
        line-height: 1.2;
        font-weight: 100;
        text-indent: 2rem;

        margin-bottom: 32px;
    `}
`;

export const StoryTransparencyWrapper = styled.div`
    position: relative;
    overflow: hidden;
`;

export const Story = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
`;
