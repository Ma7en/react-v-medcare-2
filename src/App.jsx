/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

// style
import "./App.css";
import "./styles/styles.scss";
import GlobalStyles from "./styles/GlobalStyles";

// store
// import store from "./store/store";

// context
import { DarkModeProvider } from "./contexts/DarkModeContext";
import ThemeContext from "./contexts/ThemeContext";
import LanguageContext from "./contexts/LanguageContext";

// hooks
import ScrollToTop from "./hooks/ScrollToTop";

// route
import Router from "./routes/Router";

//
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // staleTime: 60 * 1000,
            staleTime: 0,
        },
    },
});

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState("en");

    return (
        <>
            {/* <Provider store={store}> */}
            <DarkModeProvider>
                <QueryClientProvider client={queryClient}>
                    <ReactQueryDevtools initialIsOpen={false} />

                    <GlobalStyles />

                    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
                        <LanguageContext.Provider
                            value={{ language, setLanguage }}
                        >
                            <Router />
                        </LanguageContext.Provider>
                    </ThemeContext.Provider>

                    <Toaster
                        position="top-center"
                        gutter={12}
                        containerStyle={{ margin: "8px" }}
                        toastOptions={{
                            success: {
                                duration: 5000,
                            },
                            error: {
                                duration: 5000,
                            },
                            style: {
                                fontSize: "16px",
                                maxWidth: "500px",
                                padding: "16px 24px",
                                // backgroundColor: "var(--color-grey-0)",
                                color: "var(--color-grey-700)",
                                //  backgroundColor: "var(--back-sec-1)",
                                backgroundColor: "var(--back-box)",
                                boxShadow: "var(--box-shadow)",
                                border: "var(--border)",
                                borderRadius: "var(--border-radius-md)",
                            },
                        }}
                    />
                </QueryClientProvider>
            </DarkModeProvider>
            {/* </Provider> */}
        </>
    );
}

export default App;
