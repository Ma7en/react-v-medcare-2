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
import SpinnerMini from "../../../../ui/spinner/SpinnerMini";

// ui
import FormRowVertical from "../../../../ui/form/FormRowVertical";
import Select from "../../../../ui/table/Select";

function UpdateUserProfileForm() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [errorsMessage, setErrorsMessage] = useState("");
    let { userData, userProfile } = useUserData();
    let user = userData?.id;

    const { register, formState, getValues, handleSubmit, reset } = useForm();
    const { errors } = formState;

    const handleChangePassword = async ({
        gander,
        image,
        phone_number,
        age,
    }) => {
        try {
            if (errors.root) {
                return;
            }

            const { data, error } = await userProfileUpdate(
                gander,
                image,
                phone_number,
                age,
                user
            );

            if (error) {
                if (error?.message && typeof error.message === "string") {
                    Toast("error", `${error?.message || "Invalid token"}.`);
                    setIsLoading(false);
                }
            } else {
                setIsLoading(true);
                Toast(
                    "success",
                    `${data?.message || "Password Changed Successfully."}`
                );
                navigate(`/${App_User}/home`);
            }
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    };

    return (
        <>
            <Form type="updata" onSubmit={handleSubmit(handleChangePassword)}>
                {/* <FormRowVertical
                    label="gender"
                    error={errors?.phone_number?.message || errorsMessage}
                > 
                    <Input
                        type="text"
                        id="gender"
                        name="gender"
                        disabled={isLoading}
                        {...register("gender", {
                            // required: `This field is required`,
                            // minLength: {
                            //     value: /^01[0|1|2|5][0-9]{8}$/,
                            //     message: `Phone must be start 010, 011, 012, 015 and all number contains 11 digits`,
                            // },
                            // value: "Mazen@@1",
                        })}
                        autoComplete="off"
                        // required
                    />
                </FormRowVertical> */}
                {/* <Select options={["Male", "Female"]} /> */}

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
                            minLength: {
                                value: /^01[0|1|2|5][0-9]{8}$/,
                                message: `Phone must be start 010, 011, 012, 015 and all number contains 11 digits`,
                            },
                            // value: "Mazen@@1",
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
                            // value: "Mazen@@1",
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
