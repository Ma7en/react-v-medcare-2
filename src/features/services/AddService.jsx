// import Modal from "../../ui/Modal";
// import Button from "../../ui/Button";

import Button from "../../ui/global/Button";
import Modal from "../../ui/modal/Modal";
import CreateServiceForm from "./CreateServiceForm";

function AddService() {
    return (
        <>
            <div>
                <Modal>
                    <Modal.Open opens="service-form">
                        <Button style={{ margin: "2rem 0rem" }}>
                            Add new Service
                        </Button>
                    </Modal.Open>

                    <Modal.Window name="service-form">
                        <CreateServiceForm />
                    </Modal.Window>
                </Modal>
            </div>
        </>
    );
}

export default AddService;
