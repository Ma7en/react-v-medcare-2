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
                    <Modal.Open opens="cabin-form">
                        <Button>Add new Service</Button>
                    </Modal.Open>

                    <Modal.Window name="cabin-form">
                        <CreateServiceForm />
                    </Modal.Window>
                </Modal>
            </div>
        </>
    );
}

export default AddService;
