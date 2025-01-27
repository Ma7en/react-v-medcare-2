// components
import ChangePasswordForm from "./ChangePasswordForm";

// ui
import Main from "../../../../ui/global/Main";
import Heading from "../../../../ui/global/Heading";

function ChangePassword() {
    return (
        <>
            <Main type="loginpage" className="loginpage">
                <div className="container">
                    <section>
                        <Heading as="h3">Chage Password</Heading>

                        <ChangePasswordForm />
                    </section>
                </div>
            </Main>
        </>
    );
}

export default ChangePassword;
