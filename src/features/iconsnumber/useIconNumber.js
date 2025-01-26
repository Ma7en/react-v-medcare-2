import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getIconNumber } from "../../services/apiIconsNumber";

export function useIconNumber() {
    const { iconnumberId } = useParams();

    const {
        isLoading,
        data: iconnumber,
        error,
    } = useQuery({
        queryKey: ["iconsnumber", iconnumberId],
        queryFn: () => getIconNumber(iconnumberId),
        retry: false,
    });

    return { isLoading, error, iconnumber };
}
