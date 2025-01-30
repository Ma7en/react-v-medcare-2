/* eslint-disable react/prop-types */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { HiEye, HiEyeSlash } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

// services
import { userRegister } from "../../../../services/auth/user/authUser";

// plugin
import Toast from "../../../../plugin/Toast";

// ui form
import Form from "../../../../ui/form/Form";
import FormRow from "../../../../ui/form/FormRow";
import FormRowVertical from "../../../../ui/form/FormRowVertical";
import FormRowPass from "../../../../ui/form/FormRowPass";
import Input from "../../../../ui/form/Input";
import Button from "../../../../ui/global/Button";

// ui
import SpinnerMini from "../../../../ui/spinner/SpinnerMini";

function SignupForm({ sign }) {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [errorsMessage, setErrorsMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const {
        register: registerForm,
        formState,
        getValues,
        handleSubmit,
        reset,
    } = useForm();
    const { errors } = formState;

    const handleSignUp = async ({
        first_name,
        last_name,
        email,
        password,
        passwordConfirm,
    }) => {
        try {
            if (errors?.root) {
                return;
            }

            const { data, error } = await userRegister(
                first_name,
                last_name,
                email,
                password,
                passwordConfirm
            );

            if (error) {
                if (error?.message?.email[0]) {
                    setErrorsMessage(error?.message?.email[0]);
                    Toast("error", `${error?.message?.email[0]}.`);
                    setIsLoading(false);
                }
            } else {
                setIsLoading(true);
                Toast(
                    "success",
                    `${
                        data?.message ||
                        "Registration successful! Please check your email to confirm your account."
                    }`
                );
                navigate(`/verifyaccount`);
            }
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    };

    // useEffect(() => {
    //     localStorage.removeItem("userData");
    // }, []);

    // let x = localStorage.getItem("userDataRegister");
    // console.log(`ddd`, JSON.parse(x));

    return (
        <>
            <Form onSubmit={handleSubmit(handleSignUp)}>
                <FormRowVertical
                    label="First name"
                    error={errors?.first_name?.message}
                >
                    <Input
                        type="text"
                        id="first_name"
                        name="first_name"
                        disabled={isLoading}
                        {...registerForm("first_name", {
                            required: `This field is required`,
                            // value: "mazen",
                        })}
                        autoComplete="off"
                        required
                    />
                </FormRowVertical>

                <FormRowVertical
                    label="Last name"
                    error={errors?.last_name?.message}
                >
                    <Input
                        type="text"
                        id="last_name"
                        name="last_name"
                        disabled={isLoading}
                        {...registerForm("last_name", {
                            required: `This field is required`,
                            // value: "saad",
                        })}
                        autoComplete="off"
                        required
                    />
                </FormRowVertical>

                <FormRowVertical
                    label="Email address"
                    error={errorsMessage || errors?.email?.message}
                >
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        disabled={isLoading}
                        {...registerForm("email", {
                            required: `This field is required`,
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: `Please Provide a valid email address`,
                            },
                            // value: "p030@gmail.com",
                        })}
                        // Email regex: /\S+@\S+\.\S+/
                        autoComplete="off"
                        required
                    />
                </FormRowVertical>

                <FormRowPass
                    label="Password (min 8 characters)"
                    error={errors?.password?.message}
                    sign={sign}
                >
                    <Input
                        type={!showPassword ? "password" : "text"}
                        id="password"
                        name="password"
                        disabled={isLoading}
                        {...registerForm("password", {
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
                            onClick={() => {
                                setShowPassword((show) => !show);
                            }}
                        />
                    ) : (
                        <HiEyeSlash
                            onClick={() => {
                                setShowPassword((show) => !show);
                            }}
                        />
                    )}
                </FormRowPass>

                <FormRowPass
                    label="Repeat password"
                    error={errors?.passwordConfirm?.message}
                    sign={sign}
                >
                    <Input
                        type={!showPassword ? "password" : "text"}
                        id="passwordConfirm"
                        name="passwordConfirm"
                        disabled={isLoading}
                        {...registerForm("passwordConfirm", {
                            required: `This field is required`,
                            minLength: {
                                value: 8,
                                message: `Password needs a minimum of 8 characters`,
                            },
                            validate: (value) =>
                                value === getValues()?.password ||
                                `Passwords need to match`,
                            // value: "Mazen@@1",
                        })}
                        autoComplete="off"
                        required
                    />
                </FormRowPass>

                <FormRow>
                    <Button
                        variation="secondary"
                        type="reset"
                        disabled={isLoading}
                        onClick={reset}
                    >
                        Cancel
                    </Button>

                    <Button type="submit" disabled={isLoading}>
                        {isLoading ? <SpinnerMini /> : `Create`}
                    </Button>
                </FormRow>
            </Form>
        </>
    );
}

export default SignupForm;
