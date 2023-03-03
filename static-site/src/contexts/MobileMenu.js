import { createContext, useContext, useState } from 'react';

export const MobileMenuContext = createContext({
    isMobileMenuActive: false,
});
export const useMobileMenuContext = () => useContext(MobileMenuContext);

export const MobileMenu = ({ children }) => {
    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

    return (
        <MobileMenuContext.Provider
            value={{
                isMobileMenuActive,
                setIsMobileMenuActive,
            }}
        >
            {children}
        </MobileMenuContext.Provider>
    );
};
