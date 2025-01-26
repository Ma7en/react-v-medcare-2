import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteIconNumber as deleteIconNumberApi } from "../../services/apiIconsNumber";

export function useDeleteIconNumber() {
    const queryClient = useQueryClient();

    const { isLoading: isDeleting, mutate: deleteIconNumber } = useMutation({
        mutationFn: deleteIconNumberApi,
        onSuccess: () => {
            toast.success("Service number successfully deleted");

            queryClient.invalidateQueries({
                queryKey: ["iconsnumber"],
            });
        },
        onError: (error) => toast.error(error.message),
    });
    return { isDeleting, deleteIconNumber };
}
