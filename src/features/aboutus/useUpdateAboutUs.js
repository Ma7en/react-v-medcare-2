import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateAboutUs as updateAboutUsApi } from "../../services/apiAboutUs";

export function useUpdateAboutUs() {
    const queryClient = useQueryClient();

    const { mutate: updateAboutUs, isLoading: isUpdating } = useMutation({
        mutationFn: ({ newAboutUsData, id }) =>
            updateAboutUsApi(newAboutUsData, id),
        onSuccess: () => {
            toast.success("AboutUs succesfully Updated");
            queryClient.invalidateQueries({ queryKey: ["aboutus"] });
        },
        onError: (error) => toast.error(error.message),
    });

    return { isUpdating, updateAboutUs };
}
