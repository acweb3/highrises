import styled from 'styled-components';

export const ViewScrollContainer = styled.div`
    opacity: 0;
    transform: translateY(20%);
    transition: opacity 700ms, transform 200ms;

    ${(props) => {
        return props.before;
    }}

    ${(props) => {
        if (props.isInView) {
            return (
                props.after ??
                `
                transform: translateY(0);
                opacity: 1;
            `
            );
        }
    }}
`;
