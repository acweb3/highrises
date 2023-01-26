import styled from 'styled-components';

export const Masthead = styled.div`
    color: ${(props) => props.theme.colors.blue[0]};
    background: ${(props) => props.theme.colors.white[0]};
    border-bottom: 1px solid ${(props) => props.theme.colors.grey[0]};

    overflow-x: hidden;
    overflow-y: scroll;

    display: flex;
    flex-direction: column;

    padding: 16px 32px 32px;
`;
