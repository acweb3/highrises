import * as S from 'components/EmailCollection/EmailCollection.styled';
import { Header } from 'components/ui/Header';
import { useState } from 'react';

export const EmailCollection = () => {
    const [email, setEmail] = useState('');

    return (
        <S.EmailCollection>
            <S.EmailCollectionContent>
                <Header>Stay up to date</Header>
                <S.Paragraph>
                    To recieve updates on future NFT releases, prints, and the
                    photo book, please add your email below.
                </S.Paragraph>

                <S.EmailCollectionInput
                    type="text"
                    placeholder="xxx@gmail.com"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    onKeyDown={(e) => {
                        // # TODO => This needs to actually do something
                        if (e.key === 'Enter') {
                            setEmail('');
                        }
                    }}
                />
            </S.EmailCollectionContent>
        </S.EmailCollection>
    );
};