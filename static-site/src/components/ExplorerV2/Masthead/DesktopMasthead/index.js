import { useChainConfig } from 'common/hooks/useChainConfig';
import { Story } from 'components/ExplorerV2/Masthead/Attributes/Story';
import { Traits } from 'components/ExplorerV2/Masthead/Attributes/Traits';
import * as S from 'components/ExplorerV2/Masthead/DesktopMasthead/DesktopMasthead.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useEffect, useState } from 'react';

export const DesktopMasthead = ({ activeHighrise }) => {
    const { openseaURL, contractAddress } = useChainConfig();
    const { setActiveHighrise } = useActiveHighriseContext();

    const [tempHighrise, setTempHighrise] = useState();

    useEffect(() => {
        let sto;

        if (activeHighrise) {
            setTempHighrise(activeHighrise);
        } else {
            sto = setTimeout(() => {
                setTempHighrise(undefined);
            }, 400);
        }

        return () => {
            clearTimeout(sto);
        };
    }, [activeHighrise]);

    return (
        <S.DesktopMasthead isActive={Boolean(activeHighrise)}>
            <S.DesktopMastheadX
                onClick={() => {
                    setActiveHighrise(undefined);
                }}
            />
            {tempHighrise && (
                <>
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={`https://www.hythacg.com/prints/highrise${`${
                            tempHighrise.index + 1
                        }`.padStart(2, '0')}`}
                    >
                        <S.DesktopMastheadImage src={tempHighrise.posterSrc} />
                    </a>
                    <S.DesktopMastheadExternalButtonLink
                        rel="noopener noreferrer"
                        target="_blank"
                        href={`https://www.hythacg.com/prints/highrise${`${
                            tempHighrise.index + 1
                        }`.padStart(2, '0')}`}
                    >
                        Order Print
                    </S.DesktopMastheadExternalButtonLink>
                    <S.DesktopMastheadExternalButtonLink
                        href={`https://${openseaURL}.io/assets/${contractAddress}/${`${tempHighrise.index}`}`}
                    >
                        View NFT
                    </S.DesktopMastheadExternalButtonLink>
                    <S.DesktopMastheadAlert>
                        Scroll for more info ↴
                    </S.DesktopMastheadAlert>
                    <Traits
                        css={`
                            margin: 24px 0 16px;
                        `}
                        activeHighrise={tempHighrise}
                    />
                    <Story isModal activeHighrise={tempHighrise} />
                </>
            )}
        </S.DesktopMasthead>
    );
};
