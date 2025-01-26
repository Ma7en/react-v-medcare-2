import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getService } from "../../services/apiServices";

export function useService() {
    const { serviceId } = useParams();

    const {
        isLoading,
        data: service,
        error,
    } = useQuery({
        queryKey: ["service", serviceId],
        queryFn: () => getService(serviceId),
        retry: false,
    });

    return { isLoading, error, service };
}
