/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { HiEye, HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";

import Table from "../../ui/table/Table";
import Modal from "../../ui/modal/Modal";
import Menus from "../../ui/modal/Menus";
import UpdateBlogForm from "./UpdateBlogForm";
import ConfirmDelete from "../../ui/modal/ConfirmDelete";

import { useDeleteBlog } from "./useDeleteBlog";
import { useCreateBlog } from "./useCreateBlog";
import { Link, useNavigate } from "react-router-dom";

// const TableRow = styled.div`
//     display: grid;
//     grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//     column-gap: 2.4rem;
//     align-items: center;
//     padding: 1.4rem 2.4rem;
//     &:not(:last-child) {
//         border-bottom: 1px solid var(--color-grey-100);
//     }
// `;

const Img = styled.img`
    width: 100%;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* display: block;
    width: 6.4rem;
    aspect-ratio: 3 / 2;
    object-fit: cover;
    object-position: center;
    transform: scale(1.5) translateX(-7px); */
    border-radius: var(--border-radius-tiny);
`;

const Video = styled.video`
    width: 100%;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Cabin = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-grey-600);
    font-family: "Sono";
`;

// const Price = styled.div`
//     font-family: "Sono";
//     font-weight: 600;
// `;

// const Discount = styled.div`
//     font-family: "Sono";
//     font-weight: 500;
//     color: var(--color-green-700);
// `;

function BlogRow({ blog }) {
    const navigate = useNavigate();
    const { isDeleting, deleteBlog } = useDeleteBlog();
    const { isCreating, createBlog } = useCreateBlog();

    const {
        id: blogId,
        dataupdate,
        description,
        title,
        icon,
        image,
        video,
        summary,
        email,
        user_id,
        username,
    } = blog;

    function handleDeuplicate() {
        createBlog({
            // dataupdate: new Date().toISOString(),
            title: `Capy of ${title}`,
            summary,
            description,
            dataupdate,
            icon,
            image,
            video,
            email,
            user_id,
            username,
        });
    }

    // function handleView() {
    //     navigate(`${document.location.origin}/services/${serviceId}`);
    //     // {`${document.location.origin}/aboutus`}
    // }

    return (
        <>
            <Table.Row>
                {/* <Img src={image.src} alt={image.alt} /> */}
                <Img
                    src={image.url || image.src || "/images/blogs/blog-1.jpg"}
                />

                {/* <Video
                    src={video.url || video.src || "/vidoes/neurorons.mp4"}
                /> */}

                <Cabin>{title}</Cabin>

                <div>
                    <p>{summary}</p>
                </div>

                <div>
                    <p>{dataupdate}</p>
                </div>

                <div>{username}</div>

                {/* <Price>{formatCurrency(regularPrice)}</Price> */}

                {/* {discount ? (
                    <Discount>{formatCurrency(discount)}</Discount>
                ) : (
                    <span>&mdash;</span>
                )} */}

                <div>
                    <Modal>
                        <Menus.Menu>
                            <Menus.Toggle id={blogId} />
                            <Menus.List id={blogId}>
                                <Link
                                    target="_blank"
                                    to={`${document.location.origin}/services/${blogId}`}
                                >
                                    <Menus.Button
                                        icon={<HiEye />}
                                        // onClick={handleView}
                                        disabled={isCreating}
                                    >
                                        View
                                    </Menus.Button>
                                </Link>

                                <Menus.Button
                                    icon={<HiSquare2Stack />}
                                    onClick={handleDeuplicate}
                                    disabled={isCreating}
                                >
                                    Duplicating
                                </Menus.Button>

                                <Modal.Open opens="edit">
                                    <Menus.Button icon={<HiPencil />}>
                                        Edit
                                    </Menus.Button>
                                </Modal.Open>

                                <Modal.Open opens="delete">
                                    <Menus.Button icon={<HiTrash />}>
                                        Delete
                                    </Menus.Button>
                                </Modal.Open>
                            </Menus.List>

                            <Modal.Window name="edit">
                                <UpdateBlogForm blog={blog} />
                            </Modal.Window>

                            <Modal.Window name="delete">
                                <ConfirmDelete
                                    resourceName="blogs"
                                    disabled={isDeleting}
                                    onConfirm={() => deleteBlog(blogId)}
                                />
                            </Modal.Window>
                        </Menus.Menu>
                    </Modal>
                </div>
            </Table.Row>
            {/* {showForm && <CreateCabinForm cabinToEdit={cabin} />} */}
        </>
    );
}

export default BlogRow;
