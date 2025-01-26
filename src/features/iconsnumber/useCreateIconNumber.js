import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createIconNumber as createIconNumberApi } from "../../services/apiIconsNumber";

export function useCreateIconNumber() {
    const queryClient = useQueryClient();

    const { mutate: createIconNumber, isLoading: isCreating } = useMutation({
        mutationFn: createIconNumberApi,
        onSuccess: () => {
            toast.success("New Service Number Succesfully Created");
            queryClient.invalidateQueries({ queryKey: ["iconsnumber"] });
        },
        onError: (error) => toast.error(error.message),
    });

    return { isCreating, createIconNumber };
}
