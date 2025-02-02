/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// services
import { userProfileUpdate } from "../../../../services/auth/user/authUser";

// store
import useUserData from "../../../../store/userDataStore";

// plugin
import Toast from "../../../../plugin/Toast";

// utils
import { App_User } from "../../../../utils/constants";

// ui form
import Form from "../../../../ui/form/Form";
import FormRow from "../../../../ui/form/FormRow";
import Input from "../../../../ui/form/Input";
import Button from "../../../../ui/global/Button";
import FormRowVertical from "../../../../ui/form/FormRowVertical";
import SelectForm from "../../../../ui/form/SelectForm";
import FileInput from "../../../../ui/form/FileInput";

// ui
import SpinnerMini from "../../../../ui/spinner/SpinnerMini";

function UpdateUserProfileForm() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [errorsMessage, setErrorsMessage] = useState("");
    let { userData, userProfile } = useUserData();
    let user = userData?.id;
    let userGender = userProfile?.gender;
    let userPhoneNumber = userProfile?.phone_number;
    let userAge = userProfile?.age;

    const { register, formState, getValues, handleSubmit, reset } = useForm();
    const { errors } = formState;

    const handleUpdateProfile = async ({
        gender,
        image,
        phone_number,
        age,
    }) => {
        try {
            if (errors.root) {
                return;
            }

            // const payload = {
            //     gender: gender || userProfile?.gender,
            //     image: image?.[0] || null,
            //     phone_number: phone_number || userPhoneNumber,
            //     age: age || userAge,
            //     user: user || null,
            // };
            // console.log(`py`, payload);
            // const { data, error } = await userProfileUpdate(payload);
            // const { data, error } = await userProfileUpdate(
            //     gender,
            //     imageData,
            //     phone_number,
            //     age,
            //     user
            // );

            const { data, error } = await userProfileUpdate(
                gender,
                image?.[0],
                phone_number,
                age,
                user
            );

            // console.log(`data`, data);
            // console.log(`error`, error);

            if (error) {
                if (error?.message && typeof error.message === "string") {
                    Toast("error", `${error?.message || "Invalid token"}.`);
                    setIsLoading(false);
                }
            } else {
                setIsLoading(true);
                Toast(
                    "success",
                    `${
                        data?.message || "Paitent Profile updated Successfully."
                    }`
                );
                navigate(`/${App_User}/home`);
            }
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    };

    return (
        <>
            <Form type="updata" onSubmit={handleSubmit(handleUpdateProfile)}>
                <FormRowVertical
                    label="gender"
                    error={errors?.gender?.message || errorsMessage}
                >
                    <SelectForm
                        name="gender"
                        id="gender"
                        {...register("gender", {
                            // required: `This field is required`,
                            // minLength: {
                            //     value: 8,
                            //     message: `Password needs a minimum of 8 characters`,
                            // },
                            value: userGender || "",
                        })}
                        autoComplete="off"
                        required
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </SelectForm>
                </FormRowVertical>

                <FormRowVertical
                    label="image"
                    error={errors?.image?.message || errorsMessage}
                >
                    <FileInput
                        id="image"
                        accept="image/*"
                        {...register("image", {
                            // required: isEditSession
                            //     ? false
                            //     : "This field is required",
                        })}
                    />
                </FormRowVertical>

                <FormRowVertical
                    label="phone number"
                    error={errors?.phone_number?.message || errorsMessage}
                >
                    <Input
                        type="text"
                        id="phone_number"
                        name="phone_number"
                        disabled={isLoading}
                        {...register("phone_number", {
                            // required: `This field is required`,
                            pattern: {
                                value: /^01[0|1|2|5][0-9]{8}$/,
                                message: `Phone number must start with 010, 011, 012, 015 and contain 11 digits.`,
                            },
                            value: userPhoneNumber || null,
                        })}
                        autoComplete="off"
                        // required
                    />
                </FormRowVertical>

                <FormRowVertical label="age" error={errors?.age?.message}>
                    <Input
                        type="number"
                        id="age"
                        name="age"
                        disabled={isLoading}
                        {...register("age", {
                            // required: `This field is required`,
                            // minLength: {
                            //     value: 8,
                            //     message: `Password needs a minimum of 8 characters`,
                            // },
                            pattern: {
                                value: /^[0-9]{2}$/,
                                message: `A valid integer is required.`,
                            },
                            value: userAge || null,
                        })}
                        autoComplete="off"
                        // required
                    />
                </FormRowVertical>

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
                        {isLoading ? <SpinnerMini /> : `Update`}
                    </Button>
                </FormRow>
            </Form>
        </>
    );
}

export default UpdateUserProfileForm;
