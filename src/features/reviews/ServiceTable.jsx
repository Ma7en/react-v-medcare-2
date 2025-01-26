/* eslint-disable no-unused-vars */
import { useSearchParams } from "react-router-dom";

import { useServices } from "./useServices";

import Spinner from "../../ui/spinner/Spinner";
import Empty from "../../ui/error/Empty";

import Menus from "../../ui/modal/Menus";
import Table from "../../ui/table/Table";
import ServiceRow from "./ServiceRow";

// const TableHeader = styled.header`
//     display: grid;
//     grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//     column-gap: 2.4rem;
//     align-items: center;
//     background-color: var(--color-grey-50);
//     border-bottom: 1px solid var(--color-grey-100);
//     text-transform: uppercase;
//     letter-spacing: 0.4px;
//     font-weight: 600;
//     color: var(--color-grey-600);
//     padding: 1.6rem 2.4rem;
// `;

function ServiceTable() {
    // const { isLoading, cabins } = uesServices();
    const { isLoading, services } = useServices();
    // const [searchParams] = useSearchParams();

    if (isLoading) return <Spinner />;
    if (!services.length) return <Empty resourceName="services" />;

    // // 1) filter
    // const filterValue = searchParams.get("discount") || "all";

    // let filteredServices;
    // if (filterValue === "all") filteredServices = services;
    // if (filterValue === "no-discount")
    //     filteredServices = services.filter((cabin) => cabin.discount === 0);
    // if (filterValue === "with-discount")
    //     filteredServices = services.filter((cabin) => cabin.discount > 0);

    // // 2) sort
    // const sortBy = searchParams.get("sortBy") || "startDate-asc";
    // const [field, direction] = sortBy.split("-");
    // const modifier = direction === "asc" ? 1 : -1;
    // const sortedServices = filteredServices.sort(
    //     (a, b) => (a[field] - b[field]) * modifier,
    // );

    return (
        <>
            <Menus>
                <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
                    <Table.Header>
                        <div>title</div>
                        <div>images</div>
                        <div>video</div>
                        <div>summary</div>
                        <div>user</div>
                        <div></div>
                    </Table.Header>

                    <Table.Body
                        // data={cabins}
                        // data={filteredServices}
                        // data={sortedServices}
                        render={(service) => (
                            <ServiceRow service={service} key={service.id} />
                        )}
                    />
                    {/* {cabins.map((cabin) => (
                        <CabinRow cabin={cabin} key={cabin.id} />
                    ))} */}
                </Table>
            </Menus>
        </>
    );
}

export default ServiceTable;
