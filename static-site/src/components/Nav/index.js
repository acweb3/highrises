import { DesktopNav } from 'components/Nav/DesktopNav';
import { forwardRef } from 'react';

export const Nav = forwardRef((props, ref) => {
    return <DesktopNav ref={ref} />;
});
