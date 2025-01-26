import SortBy from "../../ui/pfs/SortBy";
import TableOperations from "../../ui/table/TableOperations";

function IconNumberTableOperations() {
    return (
        <>
            <TableOperations>
                {/* <Filter
                    filterField="discount"
                    options={[
                        { value: "all", label: "All" },
                        { value: "no-discount", label: "No discount" },
                        { value: "with-discount", label: "With discount" },
                    ]}
                /> */}

                <SortBy
                    options={[
                        { value: "title-asc", label: "Sort by name (A-Z)" },
                        { value: "title-desc", label: "Sort by name (Z-A)" },
                        // {
                        //     value: "regularPrice-asc",
                        //     label: "Sort by price (low first)",
                        // },
                        // {
                        //     value: "regularPrice-desc",
                        //     label: "Sort by price (high first)",
                        // },
                        // {
                        //     value: "maxCapacity-asc",
                        //     label: "Sort by price (low first)",
                        // },
                        // {
                        //     value: "maxCapacity-desc",
                        //     label: "Sort by price (high first)",
                        // },
                    ]}
                />
            </TableOperations>
        </>
    );
}

export default IconNumberTableOperations;
