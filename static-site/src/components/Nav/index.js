import { DesktopNav } from 'components/Nav/DesktopNav';
import { MobileNav } from 'components/Nav/MobileNav';
import { forwardRef } from 'react';

export const Nav = forwardRef((props, ref) => {
    return (
        <>
            <DesktopNav ref={ref} />
            <MobileNav />
        </>
    );
});
