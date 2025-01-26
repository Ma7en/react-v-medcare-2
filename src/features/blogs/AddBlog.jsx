import Button from "../../ui/global/Button";
import Modal from "../../ui/modal/Modal";
import CreateBlogForm from "./CreateBlogForm";

function AddBlog() {
    return (
        <>
            <div>
                <Modal>
                    <Modal.Open opens="blog-form">
                        <Button style={{ margin: "2rem 0rem" }}>
                            Add new Blog
                        </Button>
                    </Modal.Open>

                    <Modal.Window name="blog-form">
                        <CreateBlogForm />
                    </Modal.Window>
                </Modal>
            </div>
        </>
    );
}

export default AddBlog;
