// hooks
import { useMoveBack } from "../../../hooks/useMoveBack";

// components
import BookForm from "../../../ui/book/BookForm";

// ui
import Row from "../../../ui/global/Row";
import Button from "../../../ui/global/Button";
import Heading from "../../../ui/global/Heading";

function BookUser() {
    const moveBack = useMoveBack();

    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">Book</Heading>
            </Row>

            <Row>
                {/* <Heading as="h5">Update password</Heading> */}
                <BookForm />
            </Row>

            <Row>
                <Button variation="secondary" onClick={moveBack}>
                    &larr; Back
                </Button>
            </Row>
        </>
    );
}

export default BookUser;
