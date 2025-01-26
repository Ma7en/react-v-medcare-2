/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import { getAboutUs } from "../../services/apiAboutUs";

export function useAboutUs() {
    const {
        isLoading,
        data: aboutus,
        error,
    } = useQuery({
        queryKey: ["aboutus"],
        queryFn: getAboutUs,
    });

    return { isLoading, error, aboutus };
}
