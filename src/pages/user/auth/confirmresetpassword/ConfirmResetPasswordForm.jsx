/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { HiEye, HiEyeSlash } from "react-icons/hi2";

// services
import { userConfirmResetPassword } from "../../../../services/auth/user/authUser";

// plugins
import Toast from "../../../../plugin/Toast";

// ui form
import Form from "../../../../ui/form/Form";
import FormRowPass from "../../../../ui/form/FormRowPass";
import Input from "../../../../ui/form/Input";
import FormRow from "../../../../ui/form/FormRow";
import Button from "../../../../ui/global/Button";

// ui
import SpinnerMini from "../../../../ui/spinner/SpinnerMini";
import FormRowVertical from "../../../../ui/form/FormRowVertical";

function ConfirmResetPasswordForm() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [errorsMessage, setErrorsMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const { register, formState, getValues, handleSubmit, reset } = useForm();
    const { errors } = formState;

    const handleConfirmResetPassword = async ({
        otp,
        new_password,
        confirm_password,
    }) => {
        try {
            if (errors.root) {
                return;
            }

            const { data, error } = await userConfirmResetPassword(
                otp,
                new_password,
                confirm_password
            );

            if (error) {
                if (error?.message && typeof error.message === "string") {
                    Toast("error", `${error?.message || "Invalid OTP."}.`);
                    setErrorsMessage(error?.message);
                    setIsLoading(false);
                }
            } else {
                setIsLoading(true);
                Toast(
                    "success",
                    `${data?.message || "Password Changed Successfully."}`
                );
                navigate(`/login`);
            }
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    };

    return (
        <>
            <Form onSubmit={handleSubmit(handleConfirmResetPassword)}>
                <FormRowVertical
                    label="OTP Code (6 characters)"
                    error={errors?.otp?.message || errorsMessage}
                >
                    <Input
                        type="text"
                        id="otp"
                        name="otp"
                        {...register("otp", {
                            required: `This field is required`,
                            pattern: {
                                // value: /\S+@\S+\.\S+/,
                                value: /^\d{6}$/,
                                message: `Please Provide a valid OTP code.`,
                            },
                        })}
                        autoComplete="off"
                        required
                        disabled={isLoading}
                    />
                </FormRowVertical>

                <div className="resend">
                    <p>
                        Don't get the Code?
                        <a
                            onClick={() => {
                                navigate(`/resetpassword`);
                            }}
                        >
                            Resend
                        </a>
                    </p>
                </div>

                <FormRowPass
                    label="New Password (min 8 characters)"
                    error={errors?.new_password?.message}
                >
                    <Input
                        type={!showPassword ? "password" : "text"}
                        id="new_password"
                        name="new_password"
                        disabled={isLoading}
                        {...register("new_password", {
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
                    label="confirm password"
                    error={errors?.confirm_password?.message}
                >
                    <Input
                        type={!showPassword ? "password" : "text"}
                        id="confirm_password"
                        name="confirm_password"
                        disabled={isLoading}
                        {...register("confirm_password", {
                            required: `This field is required`,
                            minLength: {
                                value: 8,
                                message: `Password needs a minimum of 8 characters`,
                            },
                            validate: (value) =>
                                value === getValues()?.new_password ||
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
                        {isLoading ? <SpinnerMini /> : `Change`}
                    </Button>
                </FormRow>
            </Form>
        </>
    );
}

export default ConfirmResetPasswordForm;
