// hooks
import { useMoveBack } from "../../../hooks/useMoveBack";

// components
import ContactForm from "../../app/contact/ContactForm";

// ui
import Row from "../../../ui/global/Row";
import Button from "../../../ui/global/Button";
import Heading from "../../../ui/global/Heading";

function ContactUser() {
    const moveBack = useMoveBack();

    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">Contact</Heading>
            </Row>

            <Row>
                {/* <Heading as="h5">Update password</Heading> */}
                {/* <UpdatePasswordForm /> */}
                <ContactForm />
            </Row>

            <Row>
                <Button variation="secondary" onClick={moveBack}>
                    &larr; Back
                </Button>
            </Row>
        </>
    );
}

export default ContactUser;
