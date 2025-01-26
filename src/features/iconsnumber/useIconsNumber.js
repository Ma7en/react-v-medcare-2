/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import { getIconsNumber } from "../../services/apiIconsNumber";

export function useIconsNumber() {
    const {
        isLoading,
        data: iconsnumber,
        error,
    } = useQuery({
        queryKey: ["iconsnumber"],
        queryFn: getIconsNumber,
    });

    return { isLoading, error, iconsnumber };
}
