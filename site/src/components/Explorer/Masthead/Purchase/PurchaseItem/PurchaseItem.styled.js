import { Header } from 'components/ui/Header';
import styled from 'styled-components';

export const PurchaseCopy = styled.div``;

export const PurchaseImage = styled.img`
    margin-top: 16px;
    width: 100%;
`;

export const PurchasePrice = styled.div`
    margin-top: 16px;
    font-size: 32px;
    font-weight: 700;
`;

export const PurchaseHeader = styled(Header)`
    margin-left: -8px;
`;

export const PurchaseComingSoon = styled.div`
    text-transform: uppercase;
    width: 180px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    letter-spacing: 0.16em;

    transform: rotate(7deg);

    border: 1px dashed ${(props) => props.theme.colors.blue[0]};
`;

export const PurchaseDisabled = styled.div`
    margin-top: 16px;
    width: 320px;
    height: 467.33px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px dashed ${(props) => props.theme.colors.blue[0]};
    border-radius: 16px;
`;

export const PurchaseItem = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 0 320px;

    &:first-of-type {
        margin-right: 32px;
    }
`;
