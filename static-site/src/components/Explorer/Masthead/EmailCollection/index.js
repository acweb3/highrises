import * as S from 'components/Explorer/Masthead/EmailCollection/EmailCollection.styled';
import { config } from 'config';
import { useState } from 'react';

export const EmailCollection = () => {
    const [email, setEmail] = useState('');
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const submit = () => {
        const formData = new FormData();
        formData.append('Email', email);
        setEmail('');

        fetch(config.googleFormUrl, {
            method: 'POST',
            body: formData,
        });

        setHasSubmitted(true);
    };

    return (
        <S.EmailCollection>
            <S.EmailCollectionContent>
                <S.EmailCollectionHeader>
                    Stay up to date
                </S.EmailCollectionHeader>
                <S.Paragraph
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Enter your email for updates on the Highrises Collection,
                    including exhibitions, events, and new releases and
                    products.
                </S.Paragraph>

                {!hasSubmitted && (
                    <S.EmailCollectionForm>
                        <S.EmailCollectionInput
                            type="text"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    submit();
                                }
                            }}
                        />

                        <S.EmailCollectionButton onClick={submit}>
                            Submit
                        </S.EmailCollectionButton>
                    </S.EmailCollectionForm>
                )}
            </S.EmailCollectionContent>

            {hasSubmitted && (
                <S.EmailCollectionContent>
                    <S.Paragraph
                        style={{
                            border: '1px dashed #fff',
                            padding: '16px',
                        }}
                    >
                        Got it! We'll keep you up to date.
                    </S.Paragraph>
                </S.EmailCollectionContent>
            )}
            <S.EmailCollectionContent>
                <S.EmailOutreach href="mailto:Hythacg.highrises@gmail.com">
                    <S.EmailIcon /> hythacg.highrises@gmail.com
                </S.EmailOutreach>
            </S.EmailCollectionContent>
        </S.EmailCollection>
    );
};
