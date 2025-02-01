// hooks
import { useMoveBack } from "../../../hooks/useMoveBack";

// components
import ReviewUserForm from "./ReviewUserForm";

// ui
import Row from "../../../ui/global/Row";
import Heading from "../../../ui/global/Heading";
import Button from "../../../ui/global/Button";

function ReviewUser() {
    const moveBack = useMoveBack();

    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">Review</Heading>
            </Row>

            <Row>
                {/* <Heading as="h5">Update password</Heading> */}
                <ReviewUserForm />
            </Row>

            <Row>
                <Button variation="secondary" onClick={moveBack}>
                    &larr; Back
                </Button>
            </Row>
        </>
    );
}

export default ReviewUser;
