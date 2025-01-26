import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteLanding as deleteLandingApi } from "../../services/apiLanding";

export function useDeleteLanding() {
    const queryClient = useQueryClient();

    const { isLoading: isDeleting, mutate: deleteLanding } = useMutation({
        mutationFn: deleteLandingApi,
        onSuccess: () => {
            toast.success("Landing successfully deleted");

            queryClient.invalidateQueries({
                queryKey: ["landing"],
            });
        },
        onError: (error) => toast.error(error.message),
    });
    return { isDeleting, deleteLanding };
}
