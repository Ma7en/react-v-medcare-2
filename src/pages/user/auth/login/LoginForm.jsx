/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { HiEye, HiEyeSlash } from "react-icons/hi2";
import { useForm } from "react-hook-form";

//
// import { useLogin } from "./useLogin";

import Form from "../../../../ui/form/Form";
import FormRowVertical from "../../../../ui/form/FormRowVertical";
import Input from "../../../../ui/form/Input";
import FormRowPass from "../../../../ui/form/FormRowPass";
import Button from "../../../../ui/global/Button";
import SpinnerMini from "../../../../ui/spinner/SpinnerMini";
import { useNavigate } from "react-router-dom";
import Toast from "../../../../plugin/Toast";
import { userLogin } from "../../../../services/auth/user/authUser";

// hi2 HiEye
// hi2 HiEyeSlash

function LoginForm({ sign }) {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [errorsMessage, setErrorsMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    let userVerifyAccount = localStorage.getItem("userVerifyAccount");
    let userJson = JSON.parse(userVerifyAccount);

    const { register, formState, reset, handleSubmit } = useForm();
    const { errors } = formState;

    const handleLogin = async ({ email, password }) => {
        console.log(`login`, email, password);
        try {
            if (errors.root) {
                return;
            }

            const { data, error } = await userLogin(email, password);

            console.log(`--->`, data);
            console.log(`----->`, error);

            // if (error) {
            //     if (error?.message?.email[0]) {
            //         setErrorsMessage(error?.message?.email[0]);
            //         Toast("error", `${error?.message?.email[0]}.`);
            //         setIsLoading(false);
            //     }
            // } else {
            //     setIsLoading(true);
            //     Toast(
            //         "success",
            //         `${data?.message || "Patient Login Successfully."}`
            //     );
            //     navigate(`/${"e"}/profile`);
            // }
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    };

    return (
        <>
            <Form onSubmit={handleSubmit(handleLogin)}>
                <FormRowVertical
                    label="Email address"
                    error={errors?.email?.message}
                >
                    <Input
                        type="email"
                        id="email"
                        disabled={isLoading}
                        {...register("email", {
                            required: `This field is required`,
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: `Please Provide a valid email address`,
                            },
                            // value: userJson?.email || "p001@gmail.com",
                        })}
                        // autoComplete="off"
                        required
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                    />
                </FormRowVertical>

                <FormRowPass
                    label="Password"
                    error={errors?.password?.message}
                    sign={sign}
                    // icon={<HiEye />}
                >
                    <Input
                        type={!showPassword ? "password" : "text"}
                        id="password"
                        disabled={isLoading}
                        {...register("password", {
                            required: `This field is required`,
                            minLength: {
                                value: 8,
                                message: `Password needs a minimum of 8 characters`,
                            },
                            // value: "Mazen@@1",
                        })}
                        // autoComplete="off"
                        required
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                    />
                    {!showPassword ? (
                        <HiEye
                            onClick={() => setShowPassword((show) => !show)}
                        />
                    ) : (
                        <HiEyeSlash
                            onClick={() => setShowPassword((show) => !show)}
                        />
                    )}
                </FormRowPass>

                <FormRowVertical>
                    <Button size="large" disabled={isLoading}>
                        {!isLoading ? `Login` : <SpinnerMini />}
                    </Button>
                </FormRowVertical>
            </Form>
        </>
    );
}

export default LoginForm;
