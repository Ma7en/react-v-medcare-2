import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createBlog as createBlogApi } from "../../services/apiBlogs";

export function useCreateBlog() {
    const queryClient = useQueryClient();

    const { mutate: createBlog, isLoading: isCreating } = useMutation({
        mutationFn: createBlogApi,
        onSuccess: () => {
            toast.success("New Blog Succesfully Created");
            queryClient.invalidateQueries({ queryKey: ["blogs"] });
        },
        onError: (error) => toast.error(error.message),
    });

    return { isCreating, createBlog };
}
