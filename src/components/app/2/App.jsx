/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import { DarkModeProvider } from "./contexts/DarkModeContext";
import ScrollToTop from "./hooks/ScrollToTop";

import GlobalStyles from "./styles/GlobalStyles";
import "./styles/styles.scss";

import Homepage from "./pages/Homepage";

// import { DarkModeProvider } from "./contexts/DarkModeContext";

// import GlobalStyles from "./styles/GlobalStyles";
// import "./styles/styles.scss";

// import Homepage from "./pages/Homepage";

// import ProtectedRoute from "./ui/auth/ProtectedRoute";
// import AppLayout from "./pages/AppLayout";

// import PageNotFound from "./pages/PageNotFound";

// import { App_Url } from "./utils/constants";

// import ScrollToTop from "./hooks/ScrollToTop";

// import Edit from "./ui/error/Edit";
// import AppHome from "./pages/app/AppHome";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // staleTime: 60 * 1000,
            staleTime: 0,
        },
    },
});

function App() {
    return (
        <>
            <DarkModeProvider>
                <QueryClientProvider client={queryClient}>
                    <ReactQueryDevtools initialIsOpen={false} />

                    <GlobalStyles />

                    <BrowserRouter>
                        <ScrollToTop />
                        <Routes>
                            {/* <Route
                                // path="app"
                                element={
                                    <ProtectedRoute>
                                        <AppLayout />
                                    </ProtectedRoute>
                                }
                            >
                                <Route
                                    index
                                    element={
                                        <Navigate
                                            replace
                                            to={`${App_Url}/home`}
                                        />
                                    }
                                />
                                 <Route exact path="/app" component={App} />
                                <Route
                                    path={`${App_Url}/home`}
                                    element={<AppHome />}
                                /> * 
                            </Route> */}

                            <Route path="/home" element={<Homepage />} />

                            {/* <Route path="/edit" element={<Edit />} />
                            <Route path="*" element={<PageNotFound />} /> */}
                        </Routes>
                    </BrowserRouter>

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
        </>
    );
}

export default App;
