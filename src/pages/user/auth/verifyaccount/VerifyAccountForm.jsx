/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// style
import "./VerifyAccountForm.scss";

// services
import {
    userResendOTP,
    userVerifyAccount,
} from "../../../../services/auth/user/authUser";

// plugins
import Toast from "../../../../plugin/Toast";

// ui
import Form from "../../../../ui/form/Form";
import FormRowVertical from "../../../../ui/form/FormRowVertical";
import Input from "../../../../ui/form/Input";
import Button from "../../../../ui/global/Button";
import SpinnerMini from "../../../../ui/spinner/SpinnerMini";

// assets
import otpmail from "../../../../assets/images/user/mail.png";

function VerifyAccountForm() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [errorsMessage, setErrorsMessage] = useState("");

    const { register, formState, reset, handleSubmit } = useForm();
    const { errors } = formState;

    let userDataRegister = localStorage.getItem("userDataRegister");

    const handleVerify = async ({ otp }) => {
        try {
            if (errors.root) {
                return;
            }

            const { data, error } = await userVerifyAccount(otp);

            if (error) {
                if (error?.message) {
                    setErrorsMessage(error?.message || "Invalid OTP Code");
                    Toast("error", `${error?.message || "Invalid OTP Code"}.`);
                    setIsLoading(false);
                }
            } else {
                navigate(`/login`);
                localStorage.removeItem("userDataRegister");
                setIsLoading(true);
                Toast(
                    "success",
                    `${data?.message || "Account verified successfully"}`
                );
            }
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    };

    const handleResendOTP = async () => {
        try {
            if (!userDataRegister) {
                return;
            }
            let userJson = JSON.parse(userDataRegister);
            let email = userJson?.email;

            const { data, error } = await userResendOTP(email);

            if (error) {
                if (error?.message) {
                    setErrorsMessage(error?.message || "Invalid Email");
                    Toast("error", `${error?.message || "Invalid Email"}.`);
                    setIsLoading(false);
                }
            } else {
                Toast(
                    "success",
                    `${
                        data?.message ||
                        "OTP has been resent to your email Successfully."
                    }`
                );
            }
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    };

    // useEffect(() => {
    //     if (!userDataRegister) {
    //         navigate(`/signup`);
    //     }
    // }, [userDataRegister]);

    return (
        <>
            <Form
                onSubmit={handleSubmit(handleVerify)}
                className="verifyaccountform"
            >
                <div className="image">
                    <img src={otpmail} alt="OTP Code" />
                </div>

                <FormRowVertical label="OTP Code" error={errors?.otp?.message}>
                    <Input
                        type="text"
                        id="otp"
                        {...register("otp", {
                            required: `This field is required`,
                            pattern: {
                                // value: /\S+@\S+\.\S+/,
                                value: /^\d{6}$/,
                                message: `Please Provide a valid OTP code.`,
                            },
                        })}
                        // autoComplete="off"
                        required
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                    />
                </FormRowVertical>

                <div className="resend">
                    <p>
                        Don't get the Code?
                        <a
                            onClick={(e) => {
                                handleResendOTP();
                            }}
                        >
                            Resend
                        </a>
                    </p>
                </div>

                <FormRowVertical>
                    <Button size="large" disabled={isLoading}>
                        {/* {`Verify`} */}
                        {!isLoading ? `Verify` : <SpinnerMini />}
                    </Button>
                </FormRowVertical>
            </Form>
        </>
    );
}

export default VerifyAccountForm;
