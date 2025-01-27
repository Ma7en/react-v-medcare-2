import { useNavigate } from "react-router-dom";

// component
import ResetPasswordForm from "./ResetPasswordForm";

// ui
import Main from "../../../../ui/global/Main";
import Heading from "../../../../ui/global/Heading";
import DivForm from "../../../../ui/form/DivForm";
import Button from "../../../../ui/global/Button";

export default function ResetPassword() {
    const navigate = useNavigate();

    return (
        <>
            <Main type="loginpage" className="loginpage">
                <div className="container">
                    <section>
                        <Heading as="h3">
                            Reset Password to your account
                        </Heading>

                        <ResetPasswordForm />

                        <DivForm>
                            <Button
                                size="large"
                                onClick={() => {
                                    navigate("/login");
                                }}
                            >
                                Login
                            </Button>

                            <Button
                                size="large"
                                onClick={() => {
                                    navigate("/signup");
                                }}
                            >
                                SignUp
                            </Button>
                        </DivForm>
                    </section>
                </div>
            </Main>
        </>
    );
}
