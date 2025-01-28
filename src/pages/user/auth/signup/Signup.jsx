import { useNavigate } from "react-router-dom";

// components
import SignupForm from "./SignupForm";

// ui
import Main from "../../../../ui/global/Main";
import DivForm from "../../../../ui/form/DivForm";
import Heading from "../../../../ui/global/Heading";
import Button from "../../../../ui/global/Button";

export default function Signup() {
    const navigate = useNavigate();

    return (
        <>
            <Main type="loginpage" className="loginpage">
                <div className="signup">
                    <div className="container">
                        <section>
                            <Heading as="h3">Signup to your account</Heading>

                            <SignupForm sign="true" />

                            <DivForm>
                                <Button
                                    size="large"
                                    onClick={() => navigate("/resetpassword")}
                                >
                                    Reset password
                                </Button>

                                <Button
                                    size="large"
                                    onClick={() => navigate("/login")}
                                >
                                    Login
                                </Button>
                            </DivForm>
                        </section>
                    </div>
                </div>
            </Main>
        </>
    );
}
