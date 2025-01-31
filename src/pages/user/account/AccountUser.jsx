//
// import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
// import UpdateUserDataForm from "../../../features/authentication/UpdateUserDataForm";

// hooks
import { useMoveBack } from "../../../hooks/useMoveBack";

// components
import UpdateUserDataForm from "./UpdateUserDataForm";

// ui
import Row from "../../../ui/global/Row";
import Heading from "../../../ui/global/Heading";
import Button from "../../../ui/global/Button";

export default function AccountUser() {
    const moveBack = useMoveBack();

    return (
        <>
            <Heading as="h1">Update your account</Heading>

            <Row>
                <Heading as="h3">Update user data</Heading>
                <UpdateUserDataForm />
            </Row>

            <Row>
                <Heading as="h3">Update password</Heading>
                {/* <UpdatePasswordForm /> */}
            </Row>

            <Row>
                <Button variation="secondary" onClick={moveBack}>
                    Back
                </Button>
            </Row>
        </>
    );
}
