import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { createContext, useContext, useEffect, useState } from 'react';

export const MobilePopoverContext = createContext({
    isMobilePopoverOpen: false,
});
export const useMobilePopoverContext = () => useContext(MobilePopoverContext);

export const MobilePopover = ({ children }) => {
    const [isMobilePopoverOpen, setIsMobilePopoverOpen] = useState(false);
    const { setIsAboutOverride } = useActiveHighriseContext();

    useEffect(() => {
        if (!isMobilePopoverOpen) {
            setIsAboutOverride(false);
        }
    }, [isMobilePopoverOpen, setIsAboutOverride]);

    return (
        <MobilePopoverContext.Provider
            value={{
                isMobilePopoverOpen,
                setIsMobilePopoverOpen,
            }}
        >
            {children}
        </MobilePopoverContext.Provider>
    );
};
