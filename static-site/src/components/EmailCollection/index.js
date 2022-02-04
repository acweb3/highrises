import * as S from 'components/EmailCollection/EmailCollection.styled';
import { config } from 'config';
import { useState } from 'react';

export const EmailCollection = () => {
    const [email, setEmail] = useState('');
    const [hasSubmitted, setHasSubmitted] = useState(false);

    return (
        <S.EmailCollection>
            <S.EmailCollectionContent>
                <S.EmailCollectionHeader>
                    Stay up to date
                </S.EmailCollectionHeader>
                <S.Paragraph>
                    To receive updates on future NFT releases, prints, and the
                    book, please add your email below.
                </S.Paragraph>

                <S.EmailCollectionInput
                    type="text"
                    placeholder="xxx@gmail.com"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            const formData = new FormData();
                            formData.append('Email', email);
                            setEmail('');

                            fetch(config.googleFormUrl, {
                                method: 'POST',
                                body: formData,
                            });

                            setHasSubmitted(true);
                        }
                    }}
                />
            </S.EmailCollectionContent>

            {hasSubmitted && (
                <S.EmailCollectionContent>
                    <S.Paragraph>
                        Got it! We'll keep you up to date.
                    </S.Paragraph>
                </S.EmailCollectionContent>
            )}
            <S.EmailCollectionContent>
                <S.EmailOutreach href="mailto:Hythacg.highrises@gmail.com">
                    <S.EmailIcon /> hythacg.highrises@gmail.com
                </S.EmailOutreach>
            </S.EmailCollectionContent>
            <S.LogoSection>
                <S.LogoLink
                    href="http://aboltc.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <S.ABoltCIcon />
                </S.LogoLink>
            </S.LogoSection>
        </S.EmailCollection>
    );
};
