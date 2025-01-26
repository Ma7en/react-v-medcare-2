/* eslint-disable no-unused-vars */
// import
import React, { useContext } from "react";

// context
import ThemeContext from "../../contexts/ThemeContext";
import LanguageContext from "../../contexts/LanguageContext";

function Loader() {
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    const { language, setLanguage } = useContext(LanguageContext);

    return (
        <>
            <div
                className={`loader`}
                onClick={() => {
                    window.open(
                        `https://www.bestchange.com/?p=1313866`,
                        "_blank"
                    );
                }}
            >
                <div className="">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden"></span>
                    </div>
                    <h4>Loading ...</h4>
                </div>
            </div>
        </>
    );
}
export default Loader;
