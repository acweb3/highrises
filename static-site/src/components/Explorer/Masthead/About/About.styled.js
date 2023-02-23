import gridSrc from 'assets/images/blue-graph-paper.jpg';
import { BaseButton } from 'components/ui/BaseButton';
import { Header } from 'components/ui/Header';
import styled, { css } from 'styled-components';

export const AboutButton = styled(BaseButton)`
    max-width: 220px;
    width: 220px;
    margin: 16px auto;
`;

export const AboutHeader = styled(Header)`
    padding: 32px 0 8px;

    ${(props) =>
        props.theme.breakpoints.small &&
        props.isFirst &&
        css`
            padding-top: 0;
        `}
`;

export const AboutSection = styled.div`
    padding: 0 16px;

    ${(props) =>
        props.theme.breakpoints.small &&
        css`
            padding: 0 32px;
        `}
`;

export const AboutGridWrapper = styled.div`
    margin-top: 32px;
`;

export const AboutPlanCityButton = styled(BaseButton)`
    max-width: 140px;
    width: 140px;
    margin: 16px auto 0;
    border: 1px solid ${(props) => props.theme.colors.white[0]};

    ${(props) =>
        props.theme.breakpoints.small &&
        css`
            max-width: 180px;
            width: 180px;
            margin: 32px auto 0;
        `}
`;

export const AboutPlanCityCheck = styled.div`
    width: 20px;
    opacity: ${(props) => (props.isActive ? 1 : 0)};
`;

export const AboutPlanCity = styled.div`
    display: flex;
`;

export const AboutPlanCities = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    & > div {
        font-weight: 600;

        &:nth-child(even) {
            margin-left: auto;
        }
    }
`;

export const AboutPlan = styled.div`
    color: ${(props) => props.theme.colors.white[0]};

    padding: 16px 16px 32px;

    background-image: url(${gridSrc});

    ${(props) =>
        props.theme.breakpoints.small &&
        css`
            padding: 16px 32px 32px;
        `}
`;
