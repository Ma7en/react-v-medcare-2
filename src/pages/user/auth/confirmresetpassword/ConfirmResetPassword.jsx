// style
import "./ConfirmResetPassword.scss";

// components
import ConfirmResetPasswordForm from "./ConfirmResetPasswordForm";

// ui
import Heading from "../../../../ui/global/Heading";
import Main from "../../../../ui/global/Main";

function ConfirmResetPassword() {
    return (
        <>
            <Main type="loginpage" className="loginpage">
                <div className="confirmresetpassword">
                    <div className="container" data-aos="fade-up">
                        <section>
                            <Heading as="h3">Confirm Reset Password</Heading>

                            <ConfirmResetPasswordForm />
                        </section>
                    </div>
                </div>
            </Main>
        </>
    );
}

export default ConfirmResetPassword;
