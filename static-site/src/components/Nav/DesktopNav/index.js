import * as S from './DesktopNav.styled';
import { forwardRef } from 'react';

const raw = `
<div class="Header-inner Header-inner--top" data-nc-group="top">
   <div data-nc-container="top-left">
      <a style="
         flex: 0 1 auto;
         " href="https://www.hythacg.com" class="Header-branding" data-nc-element="branding" data-content-field="site-title">  
      <img src="//images.squarespace-cdn.com/content/v1/58d3ef1846c3c41b05ee3695/611f157c-e76c-4b91-a808-81c178ac4bc0/Hythacg+Logo+2.png?format=1500w" alt="HYTHA.CG" class="Header-branding-logo"> 
      </a>
   </div>
   <div style="display: none;"data-nc-container="top-center">
   </div>
   <div style="justify-content: flex-end;" data-nc-container="top-right">
      <nav class="Header-nav Header-nav--primary" data-nc-element="primary-nav" data-content-field="navigation">
         <div class="Header-nav-inner">
            <a href="https://www.hythacg.com/aboutme" class="Header-nav-item" data-test="template-nav">About Me</a><a href="https://www.hythacg.com/rowhomes" class="Header-nav-item" data-test="template-nav">Rowhomes</a><a href="https://highrises.hythacg.com" class="Header-nav-item">Highrises</a><a href="https://www.hythacg.com/highrisesblog" class="Header-nav-item Header-nav-item--active" data-test="template-nav">Highrises Blog</a><a href="https://www.hythacg.com/print-shop" class="Header-nav-item" data-test="template-nav">Prints</a><a href="https://www.hythacg.com/center-square-station-2" class="Header-nav-item" data-test="template-nav">Architecture</a><a href="https://www.hythacg.com/bike-the-usa" class="Header-nav-item" data-test="template-nav">Bike Blog</a>
         </div>
      </nav>
   </div>
</div>
`;

export const DesktopNav = forwardRef((props, ref) => {
    return (
        <S.DesktopNavHeader
            className="Header Header--top tweak-header-primary-nav-hover-style-active"
            dangerouslySetInnerHTML={{ __html: raw }}
            ref={ref}
        />
    );
});
