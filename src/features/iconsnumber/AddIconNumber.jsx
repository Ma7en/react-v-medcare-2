// import Modal from "../../ui/Modal";
// import Button from "../../ui/Button";

import Button from "../../ui/global/Button";
import Modal from "../../ui/modal/Modal";
import CreateIconNumberForm from "./CreateIconNumberForm";

function AddIconNumber() {
    return (
        <>
            <div>
                <Modal>
                    <Modal.Open opens="iconnumber-form">
                        <Button style={{ margin: "2rem 0rem" }}>
                            Add new Service Number
                        </Button>
                    </Modal.Open>

                    <Modal.Window name="iconnumber-form">
                        <CreateIconNumberForm />
                    </Modal.Window>
                </Modal>
            </div>
        </>
    );
}

export default AddIconNumber;
