/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import { getLanding } from "../../services/apiLanding";

export function useLanding() {
    const {
        isLoading,
        data: landing,
        error,
    } = useQuery({
        queryKey: ["landing"],
        queryFn: getLanding,
    });

    return { isLoading, error, landing };
}
