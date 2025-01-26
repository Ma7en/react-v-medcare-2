import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateIconNumber as updateIconNumberApi } from "../../services/apiIconsNumber";

export function useUpdateIconNumber() {
    const queryClient = useQueryClient();

    const { mutate: updateIconNumber, isLoading: isUpdating } = useMutation({
        mutationFn: ({ newServiceData, id }) =>
            updateIconNumberApi(newServiceData, id),
        onSuccess: () => {
            toast.success("Service number succesfully Updated");
            queryClient.invalidateQueries({ queryKey: ["iconsnumber"] });
        },
        onError: (error) => toast.error(error.message),
    });

    return { isUpdating, updateIconNumber };
}
