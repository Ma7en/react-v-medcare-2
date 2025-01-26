/* eslint-disable react/prop-types */
import { useContext } from "react";
import { createContext, useEffect, useState } from "react";

const AppMenuContext = createContext();

function AppMenuProvider({ children }) {
    const [navMenu, setNavMenu] = useState(false);

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         setNavMenu(false);
    //     });
    // }, []);

    useEffect(() => {
        document.querySelector(".AppMain").addEventListener("scroll", () => {
            setNavMenu(false);
        });
    }, []);

    return (
        <AppMenuContext.Provider value={{ navMenu, setNavMenu }}>
            {children}
        </AppMenuContext.Provider>
    );
}

function useAppMenu() {
    const context = useContext(AppMenuContext);
    if (context === undefined)
        throw new Error(`AppMenuContext was used outside of AppMenuProvider`);

    return context;
}

export { AppMenuProvider, useAppMenu };
