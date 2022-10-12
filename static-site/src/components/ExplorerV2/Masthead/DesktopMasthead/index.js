import { getIndex } from 'common/helpers';
import { useChainConfig } from 'common/hooks/useChainConfig';
import { Story } from 'components/ExplorerV2/Masthead/Attributes/Story';
import { Traits } from 'components/ExplorerV2/Masthead/Attributes/Traits';
import * as S from 'components/ExplorerV2/Masthead/DesktopMasthead/DesktopMasthead.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import kebabCase from 'just-kebab-case';
import { useEffect, useRef, useState } from 'react';

export const DesktopMasthead = ({ activeHighrise }) => {
    const { openseaURL, contractAddress } = useChainConfig();
    const { setActiveHighrise } = useActiveHighriseContext();
    const desktopMastheadRef = useRef(null);

    const [tempHighrise, setTempHighrise] = useState();

    useEffect(() => {
        let sto;

        desktopMastheadRef.current?.scrollTo(0, 0);

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
        <S.DesktopMasthead
            ref={desktopMastheadRef}
            isActive={Boolean(activeHighrise)}
        >
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
                        href={`/building/${kebabCase(tempHighrise.name)}`}
                    >
                        View Detail
                    </S.DesktopMastheadExternalButtonLink>
                    <S.DesktopMastheadExternalButtonLink
                        rel="noopener noreferrer"
                        target="_blank"
                        href={`https://www.hythacg.com/prints/highrise${`${
                            getIndex(tempHighrise) + 1
                        }`.padStart(2, '0')}`}
                    >
                        Order Print
                    </S.DesktopMastheadExternalButtonLink>

                    {/* <S.DesktopMastheadExternalButtonLink
                        href={`https://${openseaURL}.io/assets/${contractAddress}/${`${tempHighrise.index}`}`}
                    >
                        Digital Collectible
                    </S.DesktopMastheadExternalButtonLink> */}

                    {getIndex(tempHighrise) < 55 && (
                        <S.DesktopMastheadExternalButtonLink
                            href={`https://${openseaURL}.io/assets/${contractAddress}/${`${tempHighrise.index}`}`}
                        >
                            Digital Collectible
                        </S.DesktopMastheadExternalButtonLink>
                    )}

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
