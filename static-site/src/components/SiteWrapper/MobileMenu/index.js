import * as S from 'components/SiteWrapper/MobileMenu/MobileMenu.styled';
import { useMobileMenuContext } from 'contexts/MobileMenu';
import { useEffect } from 'react';

const raw = `
<div class="Mobile-overlay" id="yui_3_17_2_1_1677716679638_2211">
   <div class="Mobile-overlay-menu" data-controller="MobileOverlayFolders" data-controllers-bound="MobileOverlayFolders">
      <div class="Mobile-overlay-menu-main">
         <nav class="Mobile-overlay-nav Mobile-overlay-nav--primary" data-content-field="navigation">
            <a href="https://www.hythacg.com/highrises-shop" class="Mobile-overlay-nav-item">
            Highrises shop
            </a>
            <a href="https://www.hythacg.com/rowhomes" class="Mobile-overlay-nav-item">
            Rowhomes
            </a>
            <a href="https://www.hythacg.com/aboutme" class="Mobile-overlay-nav-item">
            About Me
            </a>
         </nav>
         <nav class="Mobile-overlay-nav Mobile-overlay-nav--secondary" data-content-field="navigation">
         </nav>
      </div>
      <div class="Mobile-overlay-folders" data-content-field="navigation">
      </div>
   </div>
   <button onclick="window.globalRef.current()" class="Mobile-overlay-close" data-controller="MobileOverlayToggle" data-controllers-bound="MobileOverlayToggle" id="yui_3_17_2_1_1677716679638_2210">
    <svg style="
    width: 16px;
    height: 16px;
    " xmlns="http://www.w3.org/2000/svg" id="close-icon" viewBox="0 0 16 16">
      <line fill="none" stroke-miterlimit="10" x1="1.4" y1="1.4" x2="14.4" y2="14.4"/>
      <line fill="none" stroke-miterlimit="10" x1="1.4" y1="14.4" x2="14.4" y2="1.4"/>
    </svg>
   </button>
   <div class="Mobile-overlay-back" data-controller="MobileOverlayToggle" data-controllers-bound="MobileOverlayToggle"></div>
</div>
`;

export const MobileMenu = () => {
    const { isMobileMenuActive, setIsMobileMenuActive } =
        useMobileMenuContext();

    useEffect(() => {
        window.globalRef = {
            current: () => {
                setIsMobileMenuActive(false);
            },
        };
    }, [setIsMobileMenuActive]);

    return (
        <S.MobileMenu
            className={isMobileMenuActive ? 'is-mobile-overlay-active' : ''}
            dangerouslySetInnerHTML={{ __html: raw }}
        />
    );
};
