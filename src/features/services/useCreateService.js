import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createService as createServiceApi } from "../../services/apiServices";

export function useCreateService() {
    const queryClient = useQueryClient();

    const { mutate: createService, isLoading: isCreating } = useMutation({
        mutationFn: createServiceApi,
        onSuccess: () => {
            toast.success("New Service Succesfully Created");
            queryClient.invalidateQueries({ queryKey: ["services"] });
        },
        onError: (error) => toast.error(error.message),
    });

    return { isCreating, createService };
}
