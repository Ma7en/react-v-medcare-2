import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateService as updateServiceApi } from "../../services/apiServices";

export function useUpdateService() {
    const queryClient = useQueryClient();

    const { mutate: updateService, isLoading: isUpdating } = useMutation({
        mutationFn: ({ newServiceData, id }) =>
            updateServiceApi(newServiceData, id),
        onSuccess: () => {
            toast.success("Service succesfully Updated");
            queryClient.invalidateQueries({ queryKey: ["services"] });
        },
        onError: (error) => toast.error(error.message),
    });

    return { isUpdating, updateService };
}
