// import
import { Outlet } from "react-router-dom";

// ui component

function AppLayoutUser() {
    return (
        <>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default AppLayoutUser;
