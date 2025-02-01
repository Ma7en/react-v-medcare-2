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

// ui
import SpinnerMini from "../../../../ui/spinner/SpinnerMini";
import SelectForm from "../../../../ui/form/SelectForm";

function UpdateUserProfileForm() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [errorsMessage, setErrorsMessage] = useState("");
    let { userData, userProfile } = useUserData();
    let user = userData?.id;
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
        console.log(`d`, gender);
        console.log(`d`, image);
        console.log(`d`, phone_number);
        console.log(`d`, age);
        // try {
        //     if (errors.root) {
        //         return;
        //     }

        //     const { data, error } = await userProfileUpdate(
        //         gander,
        //         image,
        //         phone_number,
        //         age,
        //         user
        //     );

        //     if (error) {
        //         if (error?.message && typeof error.message === "string") {
        //             Toast("error", `${error?.message || "Invalid token"}.`);
        //             setIsLoading(false);
        //         }
        //     } else {
        //         setIsLoading(true);
        //         Toast(
        //             "success",
        //             `${data?.message || "Password Changed Successfully."}`
        //         );
        //         navigate(`/${App_User}/home`);
        //     }
        // } catch (error) {
        //     console.log(`Error: ${error}`);
        // }
    };

    return (
        <>
            <Form type="updata" onSubmit={handleSubmit(handleUpdateProfile)}>
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
                {/* <Select options={[{ value: "name-asc", label: "Sort by name (A-Z)" }]} /> */}

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
                            // value: "Mazen@@1",
                        })}
                        autoComplete="off"
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </SelectForm>
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
