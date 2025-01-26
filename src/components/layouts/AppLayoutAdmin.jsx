// import
import { Outlet } from "react-router-dom";

// ui component

function AppLayoutAdmin() {
    return (
        <>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default AppLayoutAdmin;
