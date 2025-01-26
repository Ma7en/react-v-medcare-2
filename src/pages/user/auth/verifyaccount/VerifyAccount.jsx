// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import styles from "./Login.module.css";
// import PageNav from "../ui/header/PageNav";
// import Button from "../components/Button";

// import { useAuth } from "../contexts/FakeAuthContext";
// import { useNavigate } from "react-router-dom";
import Main from "../../../../ui/global/Main";
import Heading from "../../../../ui/global/Heading";
import DivForm from "../../../../ui/form/DivForm";
import Button from "../../../../ui/global/Button";
import VerifyAccountForm from "./VerifyAccountForm";

export default function VerifyAccount() {
    const navigate = useNavigate();

    return (
        <>
            <Main type="loginpage" className="loginpage">
                <div className="container">
                    <section>
                        <Heading as="h3">Verify Account</Heading>

                        <VerifyAccountForm />

                        <DivForm>
                            <Button
                                size="large"
                                onClick={() => navigate("/login")}
                            >
                                Login
                            </Button>

                            <Button
                                size="large"
                                onClick={() => navigate("/signup")}
                            >
                                SignUp
                            </Button>
                        </DivForm>

                        {/* <form className="form" onSubmit={handleSubmite}>
                            <div className="row">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    id="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </div>

                            <div className="row">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    value={password}
                                />
                            </div>

                            <div>
                                <Button type="primary">Login</Button>
                            </div>
                        </form> */}
                    </section>
                </div>
            </Main>
        </>
    );
}
