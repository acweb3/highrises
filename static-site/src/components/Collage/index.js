import { useEthers } from '@usedapp/core';
import * as S from 'components/Collage/Collage.styled';
import { useMint } from 'components/Collage/useMint';
import { Paragraph } from 'components/ui/Paragraph';
import { config } from 'config';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react';
import { Bars } from 'react-loading-icons';

const errorMap = {
    'Error: No injected provider available': 'No wallet',
};

const Mint = () => {
    const {
        mint,
        collageSupply,
        isWhiteListed,
        hasClaimed,
        mintError,
        hasMinted,
        isMinting,
    } = useMint();
    const { account, activateBrowserWallet, error } = useEthers();

    const [hasSubmitted, setHasSubmitted] = useState(undefined);

    useEffect(() => {
        setHasSubmitted(localStorage.getItem('hasSubmitted'));
    }, []);

    const name = useState('');
    const street = useState('');
    const apartment = useState('');
    const city = useState('');
    const state = useState('');
    const zip = useState('');
    const email = useState('');

    const makeFormControls = ([value, setValue]) => {
        return {
            value,
            onChange: (e) => {
                setValue(e.target.value);
            },
        };
    };

    if (hasSubmitted) {
        return (
            <>
                <Paragraph
                    css={`
                        text-align: center;
                        padding-bottom: 16px;
                        font-weight: 100;

                        text-align: center;
                        ${(props) => props.theme.breakpoints.mobile`
                            text-align: initial;
                        `}
                    `}
                >
                    We're sending a poster over to:
                </Paragraph>
                <Paragraph
                    css={`
                        text-align: center;
                        padding-bottom: 48px;
                        font-weight: 100;
                    `}
                >
                    {hasSubmitted.split('\n').map((line) => (
                        <React.Fragment key={line}>
                            {line} <br />
                        </React.Fragment>
                    ))}
                </Paragraph>
            </>
        );
    }

    if (hasMinted) {
        return (
            <>
                <Paragraph
                    css={`
                        text-align: center;
                        font-weight: 100;
                    `}
                >
                    With minting a Northeast Collage, you get a free poster!
                    (Shipping only covered within continental USA)
                </Paragraph>

                <div
                    css={`
                        margin: 0 16px;
                    `}
                >
                    <S.CollageInput
                        placeholder="name"
                        {...makeFormControls(name)}
                    />
                    <S.CollageInput
                        placeholder="street address"
                        {...makeFormControls(street)}
                    />
                    <S.CollageInput
                        placeholder="apartment number"
                        {...makeFormControls(apartment)}
                    />
                    <S.CollageInput
                        placeholder="city"
                        {...makeFormControls(city)}
                    />
                    <S.CollageInput
                        placeholder="state"
                        {...makeFormControls(state)}
                    />
                    <S.CollageInput
                        placeholder="zip"
                        {...makeFormControls(zip)}
                    />
                    <S.CollageInput
                        placeholder="email"
                        {...makeFormControls(email)}
                    />
                </div>

                <S.CollageButtons>
                    <S.CollageButton
                        onClick={() => {
                            const formData = new FormData();
                            formData.append('name', name[0]);
                            formData.append('street', street[0]);
                            formData.append('apartment', apartment[0]);
                            formData.append('city', city[0]);
                            formData.append('state', state[0]);
                            formData.append('zip', zip[0]);
                            formData.append('email', email[0]);
                            formData.append('account', account);

                            fetch(config.googleFormUrl, {
                                method: 'POST',
                                body: formData,
                            });

                            const text = [
                                name,
                                street,
                                apartment,
                                city,
                                state,
                                zip,
                                email,
                            ]
                                .map((value) => value[0])
                                .filter(Boolean)
                                .join('\n');

                            localStorage.setItem('hasSubmitted', text);
                            setHasSubmitted(text);
                        }}
                    >
                        Submit
                    </S.CollageButton>
                </S.CollageButtons>
            </>
        );
    }

    return (
        <>
            {isWhiteListed && !hasClaimed ? (
                <Paragraph
                    css={`
                        text-align: center;
                        font-size: 20px;
                    `}
                >
                    <strong>
                        You are a Highrise owner, this is a free mint for you!
                    </strong>
                </Paragraph>
            ) : (
                <Paragraph
                    css={`
                        text-align: center;
                        font-weight: 100;

                        text-align: center;
                        ${(props) => props.theme.breakpoints.mobile`
                            text-align: initial;
                        `}
                    `}
                >
                    This mint is 0.08Ξ for general sale.
                </Paragraph>
            )}

            <Paragraph
                css={`
                    font-weight: 100;

                    text-align: center;
                    ${(props) => props.theme.breakpoints.mobile`
                        text-align: initial;
                    `}
                `}
            >
                This colorful poster features a collage of historic highrises in
                18 cities across the Northeastern United States. Decorate your
                space with 100-year-old landmarks from Philadelphia, Boston,
                Baltimore, Newark, Pittsburgh, Buffalo, and more!
            </Paragraph>

            <S.CollageButtons>
                <S.CollageButton
                    onClick={(() => {
                        if (isMinting) {
                            return undefined;
                        }

                        if (account) {
                            return mint;
                        }

                        return activateBrowserWallet;
                    })()}
                >
                    {(() => {
                        if (isMinting) {
                            return <Bars />;
                        }

                        if (account) {
                            return 'Mint';
                        }

                        return 'Connect';
                    })()}
                </S.CollageButton>
                {typeof collageSupply === 'number' && (
                    <S.CollageSubtext>
                        {100 - collageSupply}/100 available
                    </S.CollageSubtext>
                )}
                {hasClaimed && (
                    <S.CollageSubtext>
                        You have claimed your free Northeast Collage
                    </S.CollageSubtext>
                )}
                {errorMap[error] ||
                    (mintError && (
                        <S.CollageSubtext
                            css={`
                                color: red;
                            `}
                        >
                            {errorMap[error] || mintError}
                        </S.CollageSubtext>
                    ))}
            </S.CollageButtons>
        </>
    );
};

export const Collage = ({ isIndex }) => {
    return (
        <S.Collage>
            <S.CollageImage>
                <StaticImage
                    src={'../../assets/images/collage.webp'}
                    alt=""
                    placeholder="blurred"
                    objectPosition="center"
                />
            </S.CollageImage>
            <S.CollageCard>
                <S.CollageHeader>The Northeast Collage</S.CollageHeader>
                {isIndex ? (
                    <>
                        <Mint />
                    </>
                ) : (
                    <>
                        <Paragraph
                            css={`
                                font-weight: 100;

                                text-align: center;
                                ${(props) => props.theme.breakpoints.mobile`
                                    text-align: initial;
                                `}
                            `}
                        >
                            This colorful poster features a collage of historic
                            highrises in 18 cities across the Northeastern
                            United States. Decorate your space with 100-year-old
                            landmarks from Philadelphia, Boston, Baltimore,
                            Newark, Pittsburgh, Buffalo, and more!
                        </Paragraph>

                        <S.CollageButtons>
                            <S.CollageExternalLink
                                href="https://www.hythacg.com/prints/northeastcollage"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Poster Print
                            </S.CollageExternalLink>
                            <S.CollageLink to="/collage">
                                Digital Collectible
                            </S.CollageLink>
                        </S.CollageButtons>
                    </>
                )}
            </S.CollageCard>
        </S.Collage>
    );
};
