/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// form components
import Form from "../../../ui/form/Form";
import FormRow from "../../../ui/form/FormRow";
import FormRowVertical from "../../../ui/form/FormRowVertical";
import Input from "../../../ui/form/Input";
import Button from "../../../ui/global/Button";

// ui
import SpinnerMini from "../../../ui/spinner/SpinnerMini";
import Textarea from "../../../ui/form/Textarea";

function ContactForm({ sign }) {
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
        return;
        // try {
        //     // console.log(`errors`, typeof errors.root);
        //     if (errors.root) {
        //         return;
        //     }
        //     const { data, error } = await userRegister(
        //         first_name,
        //         last_name,
        //         email,
        //         password,
        //         passwordConfirm
        //     );
        //     // console.log(`--->`, data);
        //     if (error) {
        //         if (error?.message?.email[0]) {
        //             setErrorsMessage(error?.message?.email[0]);
        //             Toast("error", `${error?.message?.email[0]}.`);
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
            <Form onSubmit={handleSubmit(handleSignUp)}>
                <FormRowVertical
                    label="Full Name"
                    error={errors?.full_name?.message}
                >
                    <Input
                        type="text"
                        id="full_name"
                        name="full_name"
                        disabled={isLoading}
                        {...registerForm("full_name", {
                            required: `This field is required`,
                            // value: "mazen",
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
                        {...registerForm("phone_number", {
                            required: `This field is required`,
                            pattern: {
                                value: /^01[0|1|2|5][0-9]{8}$/,
                                // message: `Please Provide a valid phone number`,
                                message: `Phone must be start 010, 011, 012, 015 and all number contains 11 digits`,
                            },
                            // value: "mazen",
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
                        {...registerForm("message", {
                            required: `This field is required`,
                            // value: "mazen",
                        })}
                        autoComplete="off"
                        required
                    />
                </FormRowVertical>

                <FormRow>
                    <Button type="submit" disabled={isLoading}>
                        {isLoading ? <SpinnerMini /> : `Contact`}
                    </Button>
                </FormRow>
            </Form>
        </>
    );
}

export default ContactForm;
