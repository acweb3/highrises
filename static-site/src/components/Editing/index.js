import * as S from 'components/Editing/Editing.styled';

export const Editing = () => {
    return (
        <S.Editing>
            <S.EditingContent>
                <S.EditingCard.Desktop />
                <S.EditingDescription>
                    <S.H1 isMobileTitle>Editing</S.H1>
                    <S.Copy>
                        <S.P isMobileTitle>
                            Learn the Photoshop techniques Chris Hytha has
                            developed over 10 years of experience creating
                            complex layered architectural drawings and
                            atmospheric fine art photography edits.
                        </S.P>
                        <S.EditingCard.Mobile />
                        <S.H2>What's Included?</S.H2>
                        <S.List>
                            <S.ListItem>
                                5 quick tips videos to get you started with the
                                basic tools of Photoshop
                            </S.ListItem>
                            <S.ListItem>
                                2 full editing process videos with voiceovers by
                                Chris Hytha (Highrises #05 and #10)
                            </S.ListItem>
                            <S.ListItem>
                                Access to a private Discord channel to ask
                                questions and share creations
                            </S.ListItem>
                            <S.ListItem>
                                All raw data and final Photoshop files
                            </S.ListItem>
                        </S.List>
                    </S.Copy>

                    <S.EditingBuy>
                        <S.EditingPrice>$75</S.EditingPrice>
                        <S.LearnMore href="https://www.hythacg.com/highrises-editing-tutorials">
                            Sign Up
                        </S.LearnMore>
                    </S.EditingBuy>
                </S.EditingDescription>
            </S.EditingContent>
        </S.Editing>
    );
};
