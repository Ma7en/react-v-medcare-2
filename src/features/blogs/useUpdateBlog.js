import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateBlog as updateBlogApi } from "../../services/apiBlogs";

export function useUpdateBlog() {
    const queryClient = useQueryClient();

    const { mutate: updateBlog, isLoading: isUpdating } = useMutation({
        mutationFn: ({ newBlogData, id }) => updateBlogApi(newBlogData, id),
        onSuccess: () => {
            toast.success("Blog succesfully Updated");
            queryClient.invalidateQueries({ queryKey: ["blogs"] });
        },
        onError: (error) => toast.error(error.message),
    });

    return { isUpdating, updateBlog };
}
