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
    const [canResend, setCanResend] = useState(true);
    const [timer, setTimer] = useState(0);
    let userData = localStorage.getItem("userData");

    const { register, formState, reset, handleSubmit } = useForm();
    const { errors } = formState;

    const handleVerify = async ({ otp }) => {
        try {
            if (errors.root) {
                return;
            }

            const { data, error } = await userVerifyAccount(otp);
            // console.log("222", error);

            if (error) {
                if (error?.message) {
                    setErrorsMessage(error?.message || "Invalid OTP Code");
                    Toast("error", `${error?.message || "Invalid OTP Code"}.`);
                    setIsLoading(false);
                }
            } else {
                setIsLoading(true);
                Toast(
                    "success",
                    `${data?.message || "Account Verified Successfully."}`
                );
                navigate(`/login`);
            }
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    };

    const handleResendOTP = async () => {
        try {
            if (!userData) {
                return;
            }
            let userJson = JSON.parse(userData);
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
                startTimer();
            }
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    };

    const startTimer = () => {
        setCanResend(false);
        setTimer(180);

        const countdown = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(countdown);
                    setCanResend(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
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

                <FormRowVertical
                    label="OTP Code"
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
                            onClick={(e) => {
                                if (canResend) {
                                    handleResendOTP();
                                }
                            }}
                            style={{
                                color: canResend ? "blue" : "gray",
                                cursor: canResend ? "pointer" : "not-allowed",
                            }}
                        >
                            Resend {timer > 0 && `(${formatTime(timer)})`}
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
