/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

// import styles from "./Login.module.css";
// import PageNav from "../ui/header/PageNav";
// import Button from "../components/Button";

// import { useAuth } from "../contexts/FakeAuthContext";
import Main from "../../../../ui/global/Main";
// import { useSignup } from "../features/authentication/useSignup";
import DivForm from "../../../../ui/form/DivForm";
import Heading from "../../../../ui/global/Heading";
import Button from "../../../../ui/global/Button";
import SignupForm from "./SignupForm";

export default function Signup() {
    const navigate = useNavigate();

    return (
        <>
            <Main type="loginpage" className="loginpage">
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
            </Main>
        </>
    );
}
