/* eslint-disable no-unused-vars */
import { useState } from "react";

// import Button from "../../ui/Button";
// import FileInput from "../../ui/FileInput";
// import Form from "../../ui/Form";
// import FormRow from "../../ui/FormRow";
// import Input from "../../ui/Input";

// ui
import Form from "../../../ui/form/Form";
import FormRow from "../../../ui/form/FormRow";
import Input from "../../../ui/form/Input";
import Button from "../../../ui/global/Button";
import FileInput from "../../../ui/form/FileInput";
import FormRowVertical from "../../../ui/form/FormRowVertical";

// import { useUser } from "../../../features/authentication/useUser";
// import { useUpdateUser } from "../../../features/authentication/useUpdateUser";

function UpdateUserDataForm() {
    // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
    // const {
    //     user: {
    //         email,
    //         user_metadata: { fullName: currentFullName },
    //     },
    // } = useUser();
    // const { updateUser, isUpdating } = useUpdateUser();
    // const [fullName, setFullName] = useState(currentFullName);
    // const [avatar, setAvatar] = useState(null);

    function handleSubmit(e) {
        // e.preventDefault();
        // if (!fullName) return;
        // updateUser(
        //     { fullName, avatar },
        //     {
        //         onSuccess: () => {
        //             setAvatar(null);
        //             e.target.reset();
        //         },
        //     }
        // );
    }

    // function handleCancel() {
    //     setFullName(currentFullName);
    //     setAvatar(null);
    // }

    return (
        <>
            <Form type="updata" onSubmit={handleSubmit}>
                <FormRowVertical label="Email address">
                    <Input value={""} disabled />
                </FormRowVertical>

                <FormRowVertical label="Full name">
                    <Input
                        type="text"
                        value={""}
                        onChange={(e) => {}}
                        id="fullName"
                        disabled={""}
                    />
                </FormRowVertical>

                <FormRowVertical label="Avatar image">
                    <FileInput
                        id="avatar"
                        accept="image/*"
                        onChange={(e) => {}}
                        disabled={""}
                    />
                </FormRowVertical>

                <FormRow>
                    <Button
                        type="reset"
                        variation="secondary"
                        disabled={"isUpdating"}
                        onClick={"handleCancel"}
                    >
                        Cancel
                    </Button>

                    <Button disabled={"isUpdating"}>Update account</Button>
                </FormRow>
            </Form>
        </>
    );
}

export default UpdateUserDataForm;
