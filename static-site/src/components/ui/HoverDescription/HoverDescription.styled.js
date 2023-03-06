import styled, { css } from 'styled-components';

export const HoverDescriptionCaption = styled.div`
    color: ${(props) => props.theme.colors.blue[0]};

    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: absolute;

    height: 100%;
    width: 100%;

    z-index: 1;

    opacity: 0;
    transition: opacity 400ms;

    line-height: 1.05;

    padding: 16px;

    &::before {
        content: ' ';
        position: absolute;
        background: ${(props) => props.theme.colors.white[0]};
        width: 100%;
        height: 100%;
        z-index: -1;
        opacity: 0;
        transition: opacity 400ms;
    }

    &:hover {
        opacity: 1;

        &::before {
            opacity: 0.75;
        }
    }

    display: none;

    ${(props) => props.theme.breakpoints.large`
        display: flex;
    `}
`;

export const HoverDescriptionIndex = styled.div`
    line-height: 1.25;
    font-weight: 600;
    user-select: none;
    text-align: center;
    padding: 0 4px;
`;

export const HoverDescriptionName = styled.div`
    text-align: center;
    text-align: center;
    margin-top: 8px;
`;

export const HoverDescription = styled.div`
    color: #fff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100%;
    width: max-content;

    cursor: pointer;

    position: relative;

    ${(props) =>
        props.isActive &&
        css`
            &::after {
                content: ' ';
                position: absolute;
                width: 100%;
                height: 100%;

                border: 2px solid ${(props) => props.theme.colors.white[0]};
                border-top: none;
            }
        `}

    ${(props) => props.theme.breakpoints.large`
        flex: 1;
        height: initial;
        width: initial;

        ${
            props.isActive &&
            css`
                &::after {
                    border-top: 2px solid
                        ${(props) => props.theme.colors.white[0]};
                }
            `
        }}
    `}

    ${(props) => props.theme.breakpoints.XL`
        font-size: 2rem;
    `}
`;
