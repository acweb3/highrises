import { useChainConfig } from 'common/hooks/useChainConfig';
import { Story } from 'components/ExplorerV2/Masthead/Attributes/Story';
import { Traits } from 'components/ExplorerV2/Masthead/Attributes/Traits';
import * as S from 'components/ExplorerV2/Masthead/DesktopMasthead/DesktopMasthead.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';

export const DesktopMasthead = ({ activeHighrise }) => {
    const { openseaURL, contractAddress } = useChainConfig();
    const { setActiveHighrise } = useActiveHighriseContext();

    return (
        <S.DesktopMasthead>
            <S.DesktopMastheadX
                onClick={() => {
                    setActiveHighrise(undefined);
                }}
            />
            <S.DesktopMastheadImage src={activeHighrise.posterSrc} />
            <S.DesktopMastheadExternalButtonLink
                href={`https://www.hythacg.com/prints/highrise${`${
                    activeHighrise.index + 1
                }`.padStart(2, '0')}`}
            >
                Order Print
            </S.DesktopMastheadExternalButtonLink>
            <S.DesktopMastheadExternalButtonLink
                href={`https://${openseaURL}.io/assets/${contractAddress}/${`${activeHighrise.index}`}`}
            >
                View NFT
            </S.DesktopMastheadExternalButtonLink>
            <Traits
                css={`
                    margin: 24px 0 16px;
                `}
                activeHighrise={activeHighrise}
            />
            <Story isModal activeHighrise={activeHighrise} />
        </S.DesktopMasthead>
    );
};
