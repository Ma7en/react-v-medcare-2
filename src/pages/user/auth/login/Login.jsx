import { useNavigate } from "react-router-dom";

// components
import LoginForm from "./LoginForm";

// ui
import Main from "../../../../ui/global/Main";
import DivForm from "../../../../ui/form/DivForm";
import Button from "../../../../ui/global/Button";
import Heading from "../../../../ui/global/Heading";

export default function Login() {
    const navigate = useNavigate();

    return (
        <>
            <Main type="loginpage" className="loginpage">
                <div className="container">
                    <section>
                        <Heading as="h3">Log in to your account</Heading>

                        <LoginForm sign="true" />

                        <DivForm>
                            <Button
                                size="large"
                                onClick={() => {
                                    navigate("/resetpassword");
                                }}
                            >
                                Reset password
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
