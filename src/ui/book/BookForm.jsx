/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// ui form
import Form from "../form/Form";
import FormRowVertical from "../form/FormRowVertical";
import Input from "../form/Input";
import Textarea from "../form/Textarea";
import FormRow from "../form/FormRow";
import Button from "../global/Button";

// ui
import SpinnerMini from "../spinner/SpinnerMini";
import useUserData from "../../store/userDataStore";

function BookForm() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [errorsMessage, setErrorsMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    let { userData, userProfile } = useUserData();
    let userPhoneNumber = userProfile?.phone_number;
    let userFullName = userData?.full_name;
    let userEmail = userData?.email;

    const { register, formState, getValues, handleSubmit, reset } = useForm();
    const { errors } = formState;

    const handleBook = async ({ full_name, phone_number, email, message }) => {
        // try {
        //     if (errors.root) {
        //         return;
        //     }
        //     const { data, error } = await userRegister(
        // full_name,
        // phone_number,
        // email,
        // message,
        //     );
        //     if (error) {
        //         if (error?.message) {
        //             setErrorsMessage(error?.message);
        //             Toast("error", `${error?.message}.`);
        //             setIsLoading(false);
        //         }
        //     } else {
        //         setIsLoading(true);
        //         Toast(
        //             "success",
        //             `${
        //                 data?.message ||
        //                 "Registration successful! Please check your email to confirm your account."
        //             }`
        //         );
        //         navigate(`/verifyaccount`);
        //     }
        // } catch (error) {
        //     console.log(`Error: ${error}`);
        // }
    };

    return (
        <>
            <Form onSubmit={handleSubmit(handleBook)}>
                <FormRowVertical
                    label="Full Name"
                    error={errors?.full_name?.message}
                >
                    <Input
                        type="text"
                        id="full_name"
                        name="full_name"
                        disabled={isLoading}
                        {...register("full_name", {
                            required: `This field is required`,
                            value: userFullName || "",
                        })}
                        autoComplete="off"
                        required
                    />
                </FormRowVertical>

                <FormRowVertical
                    label="Phone Number"
                    error={errors?.phone_number?.message}
                >
                    <Input
                        type="text"
                        id="phone_number"
                        name="phone_number"
                        disabled={isLoading}
                        {...register("phone_number", {
                            required: `This field is required`,
                            pattern: {
                                value: /^01[0|1|2|5][0-9]{8}$/,
                                // message: `Please Provide a valid phone number`,
                                message: `Phone must be start 010, 011, 012, 015 and all number contains 11 digits`,
                            },
                            value: userPhoneNumber || "",
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
                        {...register("email", {
                            required: `This field is required`,
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: `Please Provide a valid email address`,
                            },
                            value: userEmail || "",
                        })}
                        // Email regex: /\S+@\S+\.\S+/
                        autoComplete="off"
                        required
                    />
                </FormRowVertical>

                <FormRowVertical
                    label="Message"
                    error={errors?.message?.message}
                >
                    <Textarea
                        type="text"
                        id="message"
                        name="message"
                        disabled={isLoading}
                        {...register("message", {
                            required: `This field is required`,
                            // value: "mazen",
                        })}
                        autoComplete="off"
                        required
                    />
                </FormRowVertical>

                <FormRow>
                    <Button type="submit" disabled={isLoading}>
                        {isLoading ? <SpinnerMini /> : `Submit`}
                    </Button>
                </FormRow>
            </Form>
        </>
    );
}

export default BookForm;
