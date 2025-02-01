/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

// store
import useUserData from "../../../store/userDataStore";

// ui form
import Form from "../../../ui/form/Form";
import FormRowVertical from "../../../ui/form/FormRowVertical";
import FormRow from "../../../ui/form/FormRow";
import Input from "../../../ui/form/Input";
import Textarea from "../../../ui/form/Textarea";
import Button from "../../../ui/global/Button";

// ui
import SpinnerMini from "../../../ui/spinner/SpinnerMini";

function ReviewUserForm() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [errorsMessage, setErrorsMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    let { userData, userProfile } = useUserData();
    let userID = userData?.id;
    let userFullName = userData?.full_name;

    const { register, formState, getValues, handleSubmit, reset } = useForm();
    const { errors } = formState;

    const handleReview = async ({
        full_name,
        phone_number,
        email,
        message,
    }) => {
        return;
        // try {
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
            <Form onSubmit={handleSubmit(handleReview)}>
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
                    label="Number of Stars"
                    error={errors?.stars?.message}
                >
                    <Input
                        type="number"
                        id="stars"
                        name="stars"
                        disabled={isLoading}
                        {...register("stars", {
                            required: `This field is required`,
                            pattern: {
                                value: /^[0-9]{1}$/,
                                message: `Phone must be start 010, 011, 012, 015 and all number contains 11 digits`,
                            },
                            // maxLength: 5,
                            // max: 5,
                        })}
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
                        {isLoading ? <SpinnerMini /> : `Review`}
                    </Button>
                </FormRow>
            </Form>
        </>
    );
}

export default ReviewUserForm;
