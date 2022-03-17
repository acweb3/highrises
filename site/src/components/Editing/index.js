import * as S from 'components/Editing/Editing.styled';
import { Header } from 'components/ui/Header';

export const Editing = () => {
    return (
        <S.Editing>
            <S.EditingContent>
                <S.EditingCard.Desktop />
                <S.EditingDescription>
                    <Header>Editing</Header>
                    <S.Copy>
                        <S.P>
                            Chris Hytha has been working in Photoshop for nearly
                            10 years. His experience ranges from creating
                            complex layered architectural drawing to creating
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
                                2 full editing process videos with live voice
                                overs by Chris Hytha (Highrise #05 and #10)
                            </S.ListItem>
                            <S.ListItem>
                                All raw data and final photoshop files are
                                available for download
                            </S.ListItem>
                            <S.ListItem>
                                Access to a private discord channel to ask
                                questions and share creation
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
