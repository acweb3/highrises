import { Header } from 'components/ui/Header';
import styled from 'styled-components';

export const PointHeader = styled(Header)`
    font-size: 1.5rem;
    line-height: 1;
    margin-top: -3px;
`;

export const Point = styled.div`
    border-left: 1px solid ${(props) => props.theme.colors.blue[0]};
    padding: 0 0 24px 32px;

    position: relative;

    &::after {
        content: ' ';
        display: block;
        background: ${(props) => props.theme.colors.blue[0]};
        width: 18px;
        height: 18px;
        border-radius: 50%;

        position: absolute;
        top: 0;
        left: -9px;
    }

    &:last-of-type {
        padding-bottom: 0;

        &::after {
            top: initial;
            bottom: 0;
        }
    }
`;
