import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createLanding as createLandingApi } from "../../services/apiLanding";
// import { createEditCabin } from "../../services/apiCabins";

export function useCreateLanding() {
    const queryClient = useQueryClient();

    const { mutate: createLanding, isLoading: isCreating } = useMutation({
        mutationFn: createLandingApi,
        onSuccess: () => {
            toast.success("New Landing Succesfully Created");
            queryClient.invalidateQueries({ queryKey: ["landing"] });
        },
        onError: (error) => toast.error(error.message),
    });

    return { isCreating, createLanding };
}
