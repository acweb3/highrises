import * as S from 'components/NavTabs/NavTabs.styled';

export const NavTabs = () => {
    return (
        <S.NavTabs>
            <S.NavTabsContent>
                <S.NavTabsLink to="/" activeClassName="active">
                    Collection
                </S.NavTabsLink>
                <S.NavTabsLink to="/about" activeClassName="active">
                    About
                </S.NavTabsLink>
            </S.NavTabsContent>
        </S.NavTabs>
    );
};
