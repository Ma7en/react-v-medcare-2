/* eslint-disable react/prop-types */
import styled from "styled-components";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";

import Table from "../../ui/table/Table";
import Modal from "../../ui/modal/Modal";
import Menus from "../../ui/modal/Menus";
// import CreateServiceForm from "./CreateServiceForm";
import UpdateServiceForm from "./UpdateServiceForm";
import ConfirmDelete from "../../ui/modal/ConfirmDelete";

import { useDeleteService } from "./useDeleteService";
import { useCreateService } from "./useCreateService";

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
    display: block;
    width: 6.4rem;
    aspect-ratio: 3 / 2;
    object-fit: cover;
    object-position: center;
    transform: scale(1.5) translateX(-7px);
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

function ServiceRow({ service }) {
    const { isDeleting, deleteService } = useDeleteService();
    const { isCreating, createService } = useCreateService();

    const {
        id: serviceId,
        title,
        image,
        video,
        summary,
        email,
        user_id,
    } = service;

    function handleDeuplicate() {
        createService({
            title: `Capy of ${title}`,
            image,
            video,
            summary,
            email,
            user_id,
        });
    }

    return (
        <>
            <Table.Row>
                <Img src={image} />

                <Cabin>{title}</Cabin>

                <Img src={video} />

                <div>{summary}</div>

                {/* <Price>{formatCurrency(regularPrice)}</Price> */}

                {/* {discount ? (
                    <Discount>{formatCurrency(discount)}</Discount>
                ) : (
                    <span>&mdash;</span>
                )} */}

                <div>
                    <Modal>
                        <Menus.Menu>
                            <Menus.Toggle id={serviceId} />
                            <Menus.List id={serviceId}>
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
                                <UpdateServiceForm serviceToEdit={service} />
                            </Modal.Window>

                            <Modal.Window name="delete">
                                <ConfirmDelete
                                    resourceName="services"
                                    disabled={isDeleting}
                                    onConfirm={() => deleteService(serviceId)}
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

export default ServiceRow;
