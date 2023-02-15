import { createContext, useContext, useState } from 'react';

export const MobilePopoverContext = createContext({
    isMobilePopoverOpen: false,
});
export const useMobilePopoverContext = () => useContext(MobilePopoverContext);

export const MobilePopover = ({ children }) => {
    const [isMobilePopoverOpen, setIsMobilePopoverOpen] = useState(false);

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
