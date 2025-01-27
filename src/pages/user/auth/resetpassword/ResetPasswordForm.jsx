/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// services
import { userResetPassword } from "../../../../services/auth/user/authUser";

// plugins
import Toast from "../../../../plugin/Toast";

// ui form
import Form from "../../../../ui/form/Form";
import FormRowVertical from "../../../../ui/form/FormRowVertical";
import Input from "../../../../ui/form/Input";
import Button from "../../../../ui/global/Button";

// ui
import SpinnerMini from "../../../../ui/spinner/SpinnerMini";

function ResetPasswordForm() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [errorsMessage, setErrorsMessage] = useState("");

    const { register, formState, reset, handleSubmit } = useForm();
    const { errors } = formState;

    const handleRestPassword = async ({ email }) => {
        try {
            // console.log(`errors`, typeof errors.root);
            if (errors.root) {
                return;
            }

            const { data, error } = await userResetPassword(email);

            // console.log(`--->`, data);

            if (error) {
                if (error?.message) {
                    setErrorsMessage(error?.message);
                    Toast("error", `${error?.message}.`);
                    setIsLoading(false);
                }
            } else {
                setIsLoading(true);
                Toast(
                    "success",
                    `${data?.message || "OTP has been sent to your email."}`
                );
                navigate(`/confirmresetpassword`);
            }
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    };

    return (
        <>
            <Form onSubmit={handleSubmit(handleRestPassword)}>
                <FormRowVertical
                    label="Email address"
                    error={errors?.email?.message || errorsMessage}
                >
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        {...register("email", {
                            required: `This field is required`,
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: `Please Provide a valid email address`,
                            },
                        })}
                        autoComplete="off"
                        disabled={isLoading}
                        required
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                    />
                </FormRowVertical>

                <FormRowVertical>
                    <Button size="large" disabled={isLoading}>
                        {!isLoading ? `Reset Password` : <SpinnerMini />}
                    </Button>
                </FormRowVertical>
            </Form>
        </>
    );
}

export default ResetPasswordForm;
