/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { HiEye, HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";

import Table from "../../ui/table/Table";
import Modal from "../../ui/modal/Modal";
import Menus from "../../ui/modal/Menus";
import ConfirmDelete from "../../ui/modal/ConfirmDelete";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDeleteIconNumber } from "./useDeleteIconNumber";
import { useCreateIconNumber } from "./useCreateIconNumber";
import UpdateIconNumberForm from "./UpdateIconNumberForm";

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

function IconNumberRow({ iconnumber }) {
    const navigate = useNavigate();
    const { isDeleting, deleteIconNumber } = useDeleteIconNumber();
    const { isCreating, createIconNumber } = useCreateIconNumber();

    const {
        id: iconnumberId,
        dataupdate,
        title,
        icon,
        number,
        email,
        user_id,
        username,
    } = iconnumber;

    function handleDeuplicate() {
        createIconNumber({
            title: `Capy of ${title}`,
            icon,
            number,
            dataupdate,
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
                {/* <Img
                    src={
                        image.url ||
                        image.src ||
                        "/images/services/avter-service.png"
                    }
                />

                <Video
                    src={video.url || video.src || "/vidoes/neurorons.mp4"}
                /> */}

                <div>{icon}</div>

                <Cabin>{title}</Cabin>

                <div>
                    <p>{number}</p>
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
                            <Menus.Toggle id={iconnumberId} />
                            <Menus.List id={iconnumberId}>
                                {/* <Link
                                    target="_blank"
                                    to={`${document.location.origin}/home#iconsnumber`}
                                    onClick={() => {
                                        const targetSection =
                                            document.getElementById(
                                                "iconsnumber",
                                            );
                                        if (targetSection)
                                            targetSection.scrollIntoView();
                                    }}
                                >
                                    <Menus.Button
                                        icon={<HiEye />}
                                        // onClick={handleView}
                                        disabled={isCreating}
                                    >
                                        View
                                    </Menus.Button>
                                </Link> */}

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
                                <UpdateIconNumberForm iconnumber={iconnumber} />
                            </Modal.Window>

                            <Modal.Window name="delete">
                                <ConfirmDelete
                                    resourceName="services number"
                                    disabled={isDeleting}
                                    onConfirm={() =>
                                        deleteIconNumber(iconnumberId)
                                    }
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

export default IconNumberRow;
