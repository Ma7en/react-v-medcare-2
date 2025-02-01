/* eslint-disable no-unused-vars */
// hooks
import { useMoveBack } from "../../../hooks/useMoveBack";

// components
import UpdateUserDataForm from "../auth/userdata/UpdateUserDataForm";
import UpdateUserProfileForm from "../auth/userprofile/UpdateUserProfileForm";
import UpdatePasswordForm from "../auth/updatepassword/UpdatePasswordForm";

// ui
import Row from "../../../ui/global/Row";
import Heading from "../../../ui/global/Heading";
import Button from "../../../ui/global/Button";

export default function AccountUser() {
    const moveBack = useMoveBack();

    return (
        <>
            <Heading as="h1">Account</Heading>

            {/* <Row>
                <Heading as="h5">Update User</Heading>
                <UpdateUserDataForm />
            </Row> */}

            <Row>
                <Heading as="h5">Update Profile</Heading>
                <UpdateUserProfileForm />
            </Row>

            <Row>
                <Heading as="h5">Update password</Heading>
                <UpdatePasswordForm />
            </Row>

            <Row>
                <Button variation="secondary" onClick={moveBack}>
                    &larr; Back
                </Button>
            </Row>
        </>
    );
}
