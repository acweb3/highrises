const raw = `
<div class="Header-inner Header-inner--top" data-nc-group="top">
  <div data-nc-container="top-left">
        <a style="
        flex: 0 1 auto;
    " href="/" class="Header-branding" data-nc-element="branding" data-content-field="site-title">  
                    <img src="//images.squarespace-cdn.com/content/v1/58d3ef1846c3c41b05ee3695/611f157c-e76c-4b91-a808-81c178ac4bc0/Hythacg+Logo+2.png?format=1500w" alt="HYTHA.CG" class="Header-branding-logo"> 
            </a></div>
        <div style="display: none;"data-nc-container="top-center">
        </div>
        <div style="justify-content: flex-end;" data-nc-container="top-right">
        <nav class="Header-nav Header-nav--primary" data-nc-element="primary-nav" data-content-field="navigation">     
        <div class="Header-nav-inner">
        <a href="/aboutme" class="Header-nav-item" data-test="template-nav">About Me</a><a href="/rowhomes" class="Header-nav-item" data-test="template-nav">Rowhomes</a><a href="https://highrises.hythacg.com" class="Header-nav-item">Highrises</a><a href="/highrisesblog" class="Header-nav-item Header-nav-item--active" data-test="template-nav">Highrises Blog</a><a href="/print-shop" class="Header-nav-item" data-test="template-nav">Prints</a><a href="/center-square-station-2" class="Header-nav-item" data-test="template-nav">Architecture</a><a href="/bike-the-usa" class="Header-nav-item" data-test="template-nav">Bike Blog</a>
        </div>
      </nav></div>
</div>
`;

export const DesktopNav = () => {
    return (
        <header
            className="Header Header--top tweak-header-primary-nav-hover-style-active"
            css={`
                ${(props) => props.theme.breakpoints.mobile`
                    background: #fff;
                    display: block !important;

                    & * {
                        font-family: poppins;
                    }
                `}
            `}
            dangerouslySetInnerHTML={{ __html: raw }}
        />
    );
};
