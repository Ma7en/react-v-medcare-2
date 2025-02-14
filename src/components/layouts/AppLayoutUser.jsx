// import
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

// context
import { AppMenuProviderUser } from "../../contexts/AppMenuContextUser";

// ui
import Appheader from "../../ui/appheader/Appheader";
import AppSidebar from "../../ui/appsidebar/AppSidebar";

const StyledAppLayout = styled.div`
    display: grid;
    grid-template-columns: 26rem 1fr;
    grid-template-rows: auto 1fr;
    height: 100vh;
    position: relative;
    /* scroll-behavior: smooth;
    overflow-y: scroll; */

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

const Main = styled.main`
    background-color: var(--color-grey-50);
    /* padding: 4rem 4.8rem 6.4rem; */
    padding: 4rem 3rem 6.4rem;
    overflow: auto;
    /* start max 767px */
    @media (max-width: 767px) {
        padding: 2rem 2.8rem 3.4rem;
    }
`;

const Container = styled.div`
    /* max-width: 120rem; */
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`;

function AppLayoutUser() {
    useEffect(() => {
        // قم بتحديد padding للـ body عند دخول الصفحة
        document.body.style.padding = "0"; // أو أي قيمة تريدها

        // يجب إعادة تحديد ال padding للـ body عند مغادرة الصفحة
        return () => {
            document.body.style.padding = ""; // استعادة ال padding الأصلي
        };
    }, []);

    return (
        <>
            <AppMenuProviderUser>
                <StyledAppLayout className="">
                    <Appheader />

                    <AppSidebar />

                    <Main className="AppMain">
                        <Container>
                            <Outlet />
                        </Container>
                    </Main>
                </StyledAppLayout>
            </AppMenuProviderUser>
        </>
    );
}

export default AppLayoutUser;
