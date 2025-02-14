/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { HiEye, HiEyeSlash } from "react-icons/hi2";

// services
import { userChangePassword } from "../../../../services/auth/user/authUser";

// plugin
import Toast from "../../../../plugin/Toast";

// ui form
import Form from "../../../../ui/form/Form";
import FormRowVertical from "../../../../ui/form/FormRowVertical";
import FormRowPass from "../../../../ui/form/FormRowPass";
import FormRow from "../../../../ui/form/FormRow";
import Input from "../../../../ui/form/Input";
import Button from "../../../../ui/global/Button";

// ui
import SpinnerMini from "../../../../ui/spinner/SpinnerMini";

function ChangePasswordForm() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [errorsMessage, setErrorsMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    let refreshtokenUser = localStorage.getItem("refreshtokenUser");
    let refreshtokenUserJson = JSON.parse(refreshtokenUser);

    const {
        register: registerForm,
        formState,
        getValues,
        handleSubmit,
        reset,
    } = useForm();
    const { errors } = formState;

    const handleChangePassword = async ({
        old_password,
        new_password,
        confirm_password,
    }) => {
        try {
            if (errors.root) {
                return;
            }

            const { data, error } = await userChangePassword(
                refreshtokenUserJson,
                old_password,
                new_password,
                confirm_password
            );

            if (error) {
                if (error?.message && typeof error.message === "string") {
                    Toast("error", `${error?.message || "Invalid token"}.`);
                    setIsLoading(false);
                }
                if (error?.message?.password) {
                    Toast(
                        "error",
                        `${
                            error?.message?.password ||
                            "Old password is incorrect"
                        }.`
                    );
                    setErrorsMessage(error?.message?.password);
                    setIsLoading(false);
                }
            } else {
                setIsLoading(true);
                Toast(
                    "success",
                    `${data?.message || "Password Changed Successfully."}`
                );
                navigate(`/`);
            }
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    };

    return (
        <>
            <Form onSubmit={handleSubmit(handleChangePassword)}>
                <FormRowPass
                    label="Old Password"
                    error={errors?.old_password?.message || errorsMessage}
                >
                    <Input
                        type={!showPassword ? "password" : "text"}
                        id="old_password"
                        name="old_password"
                        disabled={isLoading}
                        {...registerForm("old_password", {
                            required: `This field is required`,
                            minLength: {
                                value: 8,
                                message: `Password needs a minimum of 8 characters`,
                            },
                            value: "Mazen@@1",
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
                    label="New Password (min 8 characters)"
                    error={errors?.new_password?.message}
                >
                    <Input
                        type={!showPassword ? "password" : "text"}
                        id="new_password"
                        name="new_password"
                        disabled={isLoading}
                        {...registerForm("new_password", {
                            required: `This field is required`,
                            minLength: {
                                value: 8,
                                message: `Password needs a minimum of 8 characters`,
                            },
                            value: "Mazen@@1",
                        })}
                        autoComplete="off"
                        required
                    />
                </FormRowPass>

                <FormRowPass
                    label="confirm password"
                    error={errors?.confirm_password?.message}
                >
                    <Input
                        type={!showPassword ? "password" : "text"}
                        id="confirm_password"
                        name="confirm_password"
                        disabled={isLoading}
                        {...registerForm("confirm_password", {
                            required: `This field is required`,
                            minLength: {
                                value: 8,
                                message: `Password needs a minimum of 8 characters`,
                            },
                            validate: (value) =>
                                value === getValues()?.new_password ||
                                `Passwords need to match`,
                            value: "Mazen@@1",
                        })}
                        autoComplete="off"
                        required
                    />
                </FormRowPass>

                <FormRow>
                    <Button
                        type="reset"
                        variation="secondary"
                        disabled={isLoading}
                        onClick={reset}
                    >
                        Cancel
                    </Button>

                    <Button type="submit" disabled={isLoading}>
                        {isLoading ? <SpinnerMini /> : `Change`}
                    </Button>
                </FormRow>
            </Form>
        </>
    );
}

export default ChangePasswordForm;
