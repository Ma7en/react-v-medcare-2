/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiEye, HiEyeSlash } from "react-icons/hi2";
import { useForm } from "react-hook-form";

// serivces
import { userLogin } from "../../../../services/auth/user/authUser";

// utils
import { App_User } from "../../../../utils/constants";

// plugin
import Toast from "../../../../plugin/Toast";

// ui form
import Form from "../../../../ui/form/Form";
import FormRowVertical from "../../../../ui/form/FormRowVertical";
import Input from "../../../../ui/form/Input";
import FormRowPass from "../../../../ui/form/FormRowPass";
import Button from "../../../../ui/global/Button";

// ui
import SpinnerMini from "../../../../ui/spinner/SpinnerMini";

function LoginForm({ sign }) {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [errorsMessage, setErrorsMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    let userData = localStorage.getItem("userData");
    let userJson = JSON.parse(userData);

    const { register, formState, reset, handleSubmit } = useForm();
    const { errors } = formState;

    const handleLogin = async ({ email, password }) => {
        try {
            if (errors.root) {
                return;
            }

            const { data, error } = await userLogin(email, password);

            if (error) {
                if (error?.message) {
                    Toast("error", `${error?.message}.`);
                    setErrorsMessage(error?.message);
                }

                if (error?.data?.is_verified == false) {
                    let userData = localStorage.setItem(
                        "userData",
                        JSON.stringify(error?.data)
                    );
                    navigate(`/verifyaccount`);
                }

                if (error?.message?.email[0]) {
                    setErrorsMessage(error?.message?.email[0]);
                    Toast("error", `${error?.message?.email[0]}.`);
                    setIsLoading(false);
                }
            } else {
                setIsLoading(true);
                Toast(
                    "success",
                    `${data?.message || "Patient Login Successfully."}`
                );
                navigate(`/${App_User}/profile`);
            }
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    };

    return (
        <>
            <Form onSubmit={handleSubmit(handleLogin)}>
                <FormRowVertical
                    label="Email address"
                    error={errors?.email?.message || errorsMessage}
                >
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        disabled={isLoading}
                        {...register("email", {
                            required: `This field is required`,
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: `Please Provide a valid email address`,
                            },
                            // value: userJson?.email || "p001@gmail.com",
                        })}
                        autoComplete="off"
                        required
                    />
                </FormRowVertical>

                <FormRowPass
                    label="Password"
                    error={errors?.password?.message || errorsMessage}
                    sign={sign}
                    // icon={<HiEye />}
                >
                    <Input
                        type={!showPassword ? "password" : "text"}
                        id="password"
                        name="password"
                        disabled={isLoading}
                        {...register("password", {
                            required: `This field is required`,
                            minLength: {
                                value: 8,
                                message: `Password needs a minimum of 8 characters`,
                            },
                            // value: "Mazen@@1",
                        })}
                        autoComplete="off"
                        required
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
