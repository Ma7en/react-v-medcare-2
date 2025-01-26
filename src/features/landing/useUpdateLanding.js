import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateLanding as updateLandingApi } from "../../services/apiLanding";

export function useUpdateLanding() {
    const queryClient = useQueryClient();

    const { mutate: updateLanding, isLoading: isUpdating } = useMutation({
        mutationFn: ({ newLandingData, id }) =>
            updateLandingApi(newLandingData, id),
        onSuccess: () => {
            toast.success("Landing succesfully Updated");
            queryClient.invalidateQueries({ queryKey: ["landing"] });
        },
        onError: (error) => toast.error(error.message),
    });

    return { isUpdating, updateLanding };
}
